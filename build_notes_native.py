#!/usr/bin/env python3
"""Build study notes using headless Chrome with inline layout autofitting.
"""
import argparse, glob, json, os, subprocess, sys, tempfile, shutil

SKILL_DIR = '/Users/kalpanav/.claude/skills/study-notes-studio'
sys.path.insert(0, os.path.join(SKILL_DIR, 'scripts'))
import notes_lib as L
import prompt_pack

CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

AUTOFIT_SCRIPT = """
<script>
window.addEventListener('DOMContentLoaded', async () => {
    await document.fonts.ready;
    document.querySelectorAll('.page').forEach((pg, i) => {
        const b = pg.querySelector('.body');
        if (!b) return;
        let lo = 7.5, hi = 15.5;
        for (let k = 0; k < 15; k++) {
            const m = (lo + hi) / 2;
            b.style.setProperty('--fs', m + 'px');
            if (b.scrollHeight <= b.clientHeight + 1) {
                lo = m;
            } else {
                hi = m;
            }
        }
        b.style.setProperty('--fs', Math.max(9.5, lo) + 'px');
    });
});
</script>
"""

def validate(spec):
    problems = []
    for k in ('topic', 'pages'):
        if k not in spec:
            problems.append(f'missing "{k}"')
    for i, p in enumerate(spec.get('pages', [])):
        if 'title' not in p or 'rows' not in p:
            problems.append(f'page {i + 3}: needs title and rows')
        if not p.get('footer'):
            problems.append(f'page {i + 3} ({p.get("title")}): no footer callouts (use, interview, pro...)')
    return problems

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('spec')
    ap.add_argument('--out', default='.')
    ap.add_argument('--name', default=None)
    ap.add_argument('--formats', default='designed,image,verify')
    ap.add_argument('--preview', default=None)
    a = ap.parse_args()

    spec = json.load(open(a.spec))
    probs = validate(spec)
    if probs:
        print('SPEC PROBLEMS:\n- ' + '\n- '.join(probs))
        sys.exit(1)

    os.makedirs(a.out, exist_ok=True)
    name = a.name or spec['topic'].replace(' ', '-') + '-Complete-Notes'
    fmts = set(a.formats.split(','))
    total = 2 + len(spec['pages'])
    theme = {
        'logo_text': spec.get('theme', {}).get('logo_text') or ''.join(w[0] for w in spec['topic'].split())[:4].upper(),
        'logo_sub': spec.get('theme', {}).get('logo_sub', 'Notes')
    }
    footer_name = spec.get('footer_name') or f'{spec["topic"]} - Complete Notes'

    if fmts & {'designed', 'image'}:
        font_dir, ok = L.ensure_fonts()
        css = L.build_css(font_dir, spec.get('theme', {}).get('accent', '#f05032'))

        # Build individual pages
        pages = [L.cover_html(spec, theme), L.roadmap_html(spec, total, theme, footer_name)]
        for i, p in enumerate(spec['pages']):
            pages.append(L.spec_page(i + 3, total, p, theme, footer_name))

        doc = f'<!doctype html><html><head><meta charset="utf-8"><title>{L.esc(spec["topic"])}</title><style>{css}</style></head><body>{L.DEFS}{"".join(pages)}{AUTOFIT_SCRIPT}</body></html>'

        work = tempfile.mkdtemp()
        hp = os.path.join(work, 'notes.html')
        with open(hp, 'w') as f:
            f.write(doc)

        pdf_path = os.path.join(a.out, name + '.pdf')

        # Generate PDF using Google Chrome headless
        cmd = [
            CHROME_PATH,
            '--headless=new',
            '--disable-gpu',
            '--no-pdf-header-footer',
            '--print-to-pdf-no-header',
            f'--print-to-pdf={pdf_path}',
            '--run-all-compositor-stages-before-draw',
            '--virtual-time-budget=6000',
            f'file://{hp}'
        ]
        subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        print('wrote designed PDF:', pdf_path)

        # Generate raster images for preview and page checking
        img_dir = os.path.join(a.out, 'pages_preview')
        os.makedirs(img_dir, exist_ok=True)

        page_files = []
        for idx in range(len(pages)):
            single_doc = f'<!doctype html><html><head><meta charset="utf-8"><title>Page {idx+1}</title><style>{css}</style></head><body>{L.DEFS}{pages[idx]}{AUTOFIT_SCRIPT}</body></html>'
            shp = os.path.join(work, f'page_{idx+1}.html')
            with open(shp, 'w') as f:
                f.write(single_doc)

            img_file = os.path.join(img_dir, f'page_{idx+1}.png')
            cmd_img = [
                CHROME_PATH,
                '--headless=new',
                '--disable-gpu',
                f'--screenshot={img_file}',
                '--window-size=816,1056',
                '--default-background-color=00000000',
                '--run-all-compositor-stages-before-draw',
                '--virtual-time-budget=3500',
                f'file://{shp}'
            ]
            subprocess.run(cmd_img, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
            page_files.append(img_file)

        if 'image' in fmts:
            ip = os.path.join(a.out, name + '-IMAGE-PAGES.pdf')
            shutil.copyfile(pdf_path, ip)
            print('wrote image-pages PDF:', ip)

        if a.preview and page_files:
            shutil.copyfile(page_files[0], a.preview)
            print('preview ->', a.preview)

    if 'prompts' in fmts:
        pp = os.path.join(a.out, name + '-AI-IMAGE-PROMPTS.md')
        prompt_pack.build_pack(spec, pp)
        print('wrote prompt pack:', pp)

    if 'verify' in fmts and spec.get('verification'):
        vp = os.path.join(a.out, name + '-VERIFICATION.md')
        rows = ['| Fact | Status | Source |', '|---|---|---|'] + [
            f'| {v["fact"]} | {v["status"]} | {v.get("source", "")} |' for v in spec['verification']
        ]
        with open(vp, 'w') as f:
            f.write(f'# {spec["topic"]}: verification log\n\nChecked on {spec.get("checked_on", "(date not set)")}.\n\n' + '\n'.join(rows) + '\n')
        print('wrote verification log:', vp)

if __name__ == '__main__':
    main()
