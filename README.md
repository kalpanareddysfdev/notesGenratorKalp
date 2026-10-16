# Notes Generator - Project Documentation & Prompt Guide

## Overview
This directory contains the study note and document generator project, assets, and generated PDF notes.

## Personal Portfolio & Learning Hub

The home page introduces Kalpana Reddy, Salesforce Tech Lead at Thoughtworks and an AI enthusiast learning in public. It includes a searchable library of tools and PDF notes. The connection section and contact page link to [Instagram (@kalpanadecoded)](https://www.instagram.com/kalpanadecoded/), [GitHub (@kalpanareddysfdev)](https://github.com/kalpanareddysfdev), and [LinkedIn](https://www.linkedin.com/in/kalpana-reddy-165485202/).

- [index.html](./index.html) contains the portfolio content and the curated resource cards, which remain usable without JavaScript.
- [portfolio.css](./portfolio.css) follows the supplied updated UI reference: amber/rose/indigo gradients, glass-style navigation, rounded resource cards, topic filters, and a dark contact panel, with a complete optional dark theme.
- [kalpana-avatar.jpg](./kalpana-avatar.jpg) is the supplied anime avatar used in the hero profile; [kalpana-avatar-small.jpg](./kalpana-avatar-small.jpg) is its lightweight header version. Document previews continue to show their own content.
- [social-icons.svg](./social-icons.svg) supplies shared icons for the contact cards and LinkedIn community badge. The displayed LinkedIn count of 3K followers was provided by Kalpana; it is not a live API count.
- [portfolio.js](./portfolio.js) handles search, category filters, theme preferences, and discovery of new resources from the public repository.
- Topic filters combine with categories and text search. Counts reflect the resources actually available, including discovered additions.
- The curated library includes three tools and seven PDFs. [DayDone](https://daydone.pgmaaya.com/) is an externally hosted, installable daily planner for habits, meals, goals, and insights. Its card describes device-local storage and backup requirements; its source project remains separate from this portfolio.
- The contact form opens a pre-filled email draft in the visitor's mail app; it does not submit to a backend, store messages, or claim delivery. The tools and PDF links use the real existing files, not the demo modals from the reference design.
- Markdown files, hidden files, and site information pages are excluded from the library.
- Resource cards have topic labels, content summaries, and separate Open and Download links for documents. Downloads use same-origin file URLs and the browser's native `download` attribute.
- [previews/](./previews/) contains first-page JPEG previews rendered from the PDFs and original SVG illustrations for Study Notes Studio and PG Investment Planner. Regenerate a preview and check its page count/summary whenever its source PDF changes.
- [documents/rag-retrieval-notes.html](./documents/rag-retrieval-notes.html) is the editable source reconstructed from the RAG PDF. The revised PDF uses a clean 15-page A4 layout with safe margins, repeating table headers, and rows kept together. To regenerate, print this HTML to PDF using A4, 100% scale, background graphics enabled, and browser headers/footers disabled; its print stylesheet supplies the margins. Save it as `RAG-and-Data-Retrieval-Notes.pdf`, refresh its first-page preview, and update the library page count if pagination changes.
- Display names are independent of filenames to preserve existing URLs. The file `Study-Note-Generator-Guide.pdf` actually contains overlapping Claude Code material with a misleading export heading; its card is labelled "Claude Code: Workflow Reference" and explains the overlap.
- Keep curated resource links in sync when renaming files. Previously renamed PDFs are mapped in the repository loader to avoid duplicate cards during deployment.
- Publish the HTML, CSS, JavaScript, and renamed PDFs together. Local edits do not update the live site automatically.

---

## Prompt Guide (For Generating Notes)

### Simplest prompt
> Make complete notes on Docker.

### With options (recommended)
> Make complete notes on Docker for beginners preparing for interviews. 18 pages, with diagrams, code examples and a cheat sheet at the end.

### Other variations

| You want | Prompt |
|---|---|
| A shorter set | Make 8-page quick notes on Git basics. |
| A specific level | Make complete notes on Kubernetes, advanced level, for DevOps interviews. |
| A focus | Make notes on Python, focusing on data structures and interview questions. |
| Different output | Make notes on SQL, but only the designed PDF. |
| The AI-image prompts too | Make notes on React and also give me the AI image prompts. |
| Your own reference | Make notes on Java Streams in the same style as my Java PDF. |

### Tips for better results
- **Name the audience:** "for beginners", "for interviews" or "for a project" changes which pages and examples I choose.
- **Name a version or tool:** "Spring Boot 3" or "Python 3.12" keeps the facts current.
- **Narrow big topics:** "all of Java" is too large for one set, so I'd split it into a series. "Java OOP" or "Java Collections" works better.
- **Ask for edits afterwards:** "Add a page on testing", "Make it 12 pages" or "Simplify page 5" all work, and I rebuild only what changed.
- **Check the verification file:** it lists which facts I confirmed and which you should double-check.

To try it, send something like "Make complete notes on Docker for beginners" and I'll build the set.
