# Git Basics: AI image prompt pack

Ready-to-paste prompts for an image-generation tool (for example Gemini, ChatGPT or any tool that renders text well). One prompt per page.

## How to use

1. Open a NEW chat in your image tool. If you have a reference page you like (for example a page from your own Java or Python notes), attach it and say: "Use this exact visual style for every page I ask for."
2. Paste the prompt for the cover (Prompt 1). Generate. Keep the chat open so the style stays consistent.
3. Paste the next prompts one at a time, in order. Ask for the highest resolution available.
4. Image tools often garble small text. Zoom in and check spelling and code. If a line is wrong, reply with the exact line and ask for only that fix.
5. If a page comes out too crowded, ask: "Same page, but make the boxes larger and keep all text."
6. Download all pages as images, name them 01, 02, 03 and so on, and send them back here. I will assemble them into one PDF in order.

---

## Prompt 1: Cover

~~~~
Create ONE portrait study-notes page (US Letter ratio, high resolution) in a hand-drawn notebook style.

STYLE (keep identical on every page of the series):
- Cream lined notebook paper with a black spiral binding down the left edge.
- Hand-lettered title at the top with a red wavy underline; a small round topic badge at the top-right.
- Content arranged in a tidy grid of numbered boxes (circled numbers) with coloured dashed borders and soft pastel fills.
  Colour roles: blue = core concept, green = correct / good practice, red = mistakes and warnings,
  yellow = key point or tip, purple = tables and comparisons, orange = examples.
- Small clean icons and simple diagrams inside the boxes. Code in monospace boxes with an "Output:" box beneath.
- A bottom strip of three callouts: Real-world use cases, Interview tip, Pro tip.
- Small footer text with the series name and the page number.
- Dense but readable. Large clear handwriting-style fonts. No overlapping text. No decorative clutter.

TEXT RULES (very important):
- Render the text below EXACTLY as written. Do not rephrase, shorten, translate or add words.
- Spell every word and every code symbol exactly. Keep code on separate lines.
- If something does not fit, make the font smaller rather than dropping text.

This is the COVER page.
Huge hand-lettered orange title: GIT
Large black title under it: QUICK NOTES
Orange kicker: (Version Control Basics)
Central illustration: a blue cloud labelled "GIT VCS" connected by arrows to rounded boxes: Working
Tree, Staging
Index, Local
Repo, Remote
GitHub, Branches
& Merging, Undo &
History.
A blue-outlined pill: BEGINNER TO INTERMEDIATE
Text: SWIPE TO NEXT with an arrow.
Bottom row separated by thin lines: Snapshot | Stage | Commit | Branch
~~~~

## Prompt 2: Roadmap

~~~~
Create ONE portrait study-notes page (US Letter ratio, high resolution) in a hand-drawn notebook style.

STYLE (keep identical on every page of the series):
- Cream lined notebook paper with a black spiral binding down the left edge.
- Hand-lettered title at the top with a red wavy underline; a small round topic badge at the top-right.
- Content arranged in a tidy grid of numbered boxes (circled numbers) with coloured dashed borders and soft pastel fills.
  Colour roles: blue = core concept, green = correct / good practice, red = mistakes and warnings,
  yellow = key point or tip, purple = tables and comparisons, orange = examples.
- Small clean icons and simple diagrams inside the boxes. Code in monospace boxes with an "Output:" box beneath.
- A bottom strip of three callouts: Real-world use cases, Interview tip, Pro tip.
- Small footer text with the series name and the page number.
- Dense but readable. Large clear handwriting-style fonts. No overlapping text. No decorative clutter.

TEXT RULES (very important):
- Render the text below EXACTLY as written. Do not rephrase, shorten, translate or add words.
- Spell every word and every code symbol exactly. Keep code on separate lines.
- If something does not fit, make the font smaller rather than dropping text.

This is the ROADMAP page, titled "Roadmap". Show these topics as a grid of numbered colourful cards:
3. The Three Trees: Work, Stage & Commit
4. Branching, Merging & Moving HEAD
5. Remotes, Syncing & Resolving Conflicts
6. Git Basics Cheat Sheet & Interview Guide

Box "How to use these notes":
- Page 3 sets the 3-stage architecture — master Working Tree, Index & Repo before memorising commands.
- Page 4 covers branching, pointers & merging — how switch & restore cleanly replace legacy checkout.
- Page 5 covers syncing with remotes — the mechanics of fetch, pull, push, and resolving merge conflicts.
- Page 6 is your cheat sheet & interview guide — 12 mini-guides, 10 questions, and the ultimate Git formula.
- Do the sample commands yourself in a sandbox directory to build muscle memory.
Box "Tools you will need":
- Git CLI: Version 2.23+ recommended to use switch & restore syntax.
- Terminal Shell: zsh or bash with Git branch auto-completion enabled.
- Hosting Platform: GitHub, GitLab, or Bitbucket for remote collaboration.
- Visual DAG Viewers: Built-in git log --graph --oneline or VS Code Git Graph extension.
- Productivity Aliases: Setup git config --global alias.st status and alias.co checkout.
Box "Mindset": ['Git does not store diffs; it stores full snapshots of your project on every commit.', 'Commits form a Directed Acyclic Graph (DAG) where each node points back to parent commits.', 'Nearly every operation is local-first; network latency only matters during fetch, pull, and push.', 'Git rarely deletes data. If you lose work, git reflog can usually rescue orphaned commits.']
Box "Modern Git Standards": ['Default Branch: Now main instead of master (git config --global init.defaultBranch main).', 'Replaced checkout: Modern Git uses git switch (branch navigation) and git restore (undoing changes).', 'Atomic Commits: Make small, focused commits with imperative messages (e.g. feat: add user auth).', 'Never Rebase Public Branches: Only rebase local unpublished branches to avoid rewriting shared history.']
~~~~

## Prompt 3: The Three Trees: Work, Stage & Commit

~~~~
Create ONE portrait study-notes page (US Letter ratio, high resolution) in a hand-drawn notebook style.

STYLE (keep identical on every page of the series):
- Cream lined notebook paper with a black spiral binding down the left edge.
- Hand-lettered title at the top with a red wavy underline; a small round topic badge at the top-right.
- Content arranged in a tidy grid of numbered boxes (circled numbers) with coloured dashed borders and soft pastel fills.
  Colour roles: blue = core concept, green = correct / good practice, red = mistakes and warnings,
  yellow = key point or tip, purple = tables and comparisons, orange = examples.
- Small clean icons and simple diagrams inside the boxes. Code in monospace boxes with an "Output:" box beneath.
- A bottom strip of three callouts: Real-world use cases, Interview tip, Pro tip.
- Small footer text with the series name and the page number.
- Dense but readable. Large clear handwriting-style fonts. No overlapping text. No decorative clutter.

TEXT RULES (very important):
- Render the text below EXACTLY as written. Do not rephrase, shorten, translate or add words.
- Spell every word and every code symbol exactly. Keep code on separate lines.
- If something does not fit, make the font smaller rather than dropping text.

PAGE TITLE (hand-lettered): The Three Trees: Work, Stage & Commit
Subtitle under the title: Understanding how Git moves changes through working directory, index, and repository
Footer: Git Basics - Quick Notes - Page 3 of 6

BOXES (in reading order, left column first):

Box 1: What is Git?
Git is a distributed version control system (DVCS). Every developer holds a complete copy of the project history on their local disk.
Unlike legacy VCS (SVN, CVS) that store file delta diffs, Git captures full snapshots of the entire project tree on every commit.
Every object is identified by a 40-character SHA cryptographic hash, ensuring data integrity.

Box 2: The Three Areas
- Working Directory: Local project files you edit directly in your editor.
- Staging Area (Index): An intermediate holding buffer for changes ready to commit.
- Repository (.git): Permanent database containing committed snapshots & history.

Box 3: The Lifecycle Flow
[DIAGRAM] Left-to-right flow of rounded boxes: Working Directory -> Staging Index -> Local Repository (arrow labels: git add, git commit) plus a dashed return arrow labelled "git restore / checkout"

Box 4: Behind the Scenes (.git folder)
- Blob: Stores pure file content (no filename, no permissions).
- Tree: Represents a directory; points to blobs and sub-trees with filenames.
- Commit: Points to a root tree, parent commit(s), author, date, and message.

Box 5: Core Staging Commands
TABLE:
Command | Action | Target Area
git init | Create new local repository | .git folder
git status | Check modified vs staged files | Work vs Index
git add <f> | Stage specific file for commit | Index
git add . | Stage all current modifications | Index
git diff | View unstaged changes vs Index | Workdir
git commit -m | Record snapshot with message | Repository

Box 6: The Four File States
TABLE:
State | Meaning | Next Action
Untracked | New file not yet in Git | git add
Unmodified | File matches last commit | Edit file
Modified | Edited but not yet staged | git add
Staged | Indexed ready for next commit | git commit

Box 7: First Commit Example
Terminal commands
CODE (monospace box):
    # Initialize repo and stage first file
    git init my-project && cd my-project
    echo "# Git Study Notes" > README.md
    git add README.md
    git commit -m "feat: initial commit"
Sample terminal output (green output box):
    [main (root-commit) 4a9b1c2] feat: initial commit
     1 file changed, 1 insertion(+)
     create mode 100644 README.md

Box 8: Common Mistakes & Fixes
- Editing files and forgetting to stage. Fix: Check git status before committing.
- Committing secrets or node_modules. Fix: Add files to .gitignore before first add.
- Vague commit messages like 'fixed stuff'. Fix: Write imperative summaries like feat: add user login.
- Accidentally staged the wrong file. Fix: Run git restore --staged <file> to unstage.

Box 9: Remember
REMEMBER banner: Edit in Working Tree, Buffer in Staging Index, Save permanently in Repository Snapshot.

BOTTOM STRIP (three small callouts):
- Real-world use cases: Atomic commits allow easy rollbacks, clear code reviews, and clean bisecting when bugs arise.
- Interview tip: Q: What is the Staging Area? A: An intermediate buffer allowing selective, atomic commits.
- Pro tip: Use git add -p (patch mode) to review and stage specific chunks of code interactively.
~~~~

## Prompt 4: Branching, Merging & Moving HEAD

~~~~
Create ONE portrait study-notes page (US Letter ratio, high resolution) in a hand-drawn notebook style.

STYLE (keep identical on every page of the series):
- Cream lined notebook paper with a black spiral binding down the left edge.
- Hand-lettered title at the top with a red wavy underline; a small round topic badge at the top-right.
- Content arranged in a tidy grid of numbered boxes (circled numbers) with coloured dashed borders and soft pastel fills.
  Colour roles: blue = core concept, green = correct / good practice, red = mistakes and warnings,
  yellow = key point or tip, purple = tables and comparisons, orange = examples.
- Small clean icons and simple diagrams inside the boxes. Code in monospace boxes with an "Output:" box beneath.
- A bottom strip of three callouts: Real-world use cases, Interview tip, Pro tip.
- Small footer text with the series name and the page number.
- Dense but readable. Large clear handwriting-style fonts. No overlapping text. No decorative clutter.

TEXT RULES (very important):
- Render the text below EXACTLY as written. Do not rephrase, shorten, translate or add words.
- Spell every word and every code symbol exactly. Keep code on separate lines.
- If something does not fit, make the font smaller rather than dropping text.

PAGE TITLE (hand-lettered): Branching, Merging & Moving HEAD
Subtitle under the title: How Git tracks divergent lines of development with lightweight movable pointers
Footer: Git Basics - Quick Notes - Page 4 of 6

BOXES (in reading order, left column first):

Box 1: What is a Branch?
In Git, a branch is simply a lightweight, movable pointer to a commit hash. Creating a branch takes 41 bytes and requires zero file duplication.
HEAD is the active pointer referencing whichever branch or commit is currently checked out in your working directory.

Box 2: Branch Topology
[DIAGRAM] Flowchart. Nodes: C1 (base) (box); C2 (main) (box); F1 (feat) (box); M1 (merge) (box). Arrows: C1 (base) -> C2 (main); C1 (base) -> F1 (feat); C2 (main) -> M1 (merge); F1 (feat) -> M1 (merge)

Box 3: Modern Navigation (Git 2.23+)
TABLE:
Task | Modern Command | Legacy Form
Switch branch | git switch <name> | git checkout <name>
Create & switch | git switch -c <name> | git checkout -b <name>
Discard work edits | git restore <file> | git checkout -- <file>
Unstage a file | git restore --staged <f> | git reset HEAD <file>
List all branches | git branch -a | git branch -a

Box 4: Merge Strategies
- Fast-Forward Merge: Main has no new commits; pointer simply rolls forward.
- 3-Way Merge: Combines ancestor with 2 heads; creates an explicit merge commit.
- Rebase: Replays branch commits atop target base; creates a clean linear history.

Box 5: Feature Branch Workflow
Branch & Merge Workflow
CODE (monospace box):
    # Create and isolate feature work
    git switch -c feature/login
    # ... edit files and commit ...
    git commit -am "feat: add login token validation"
    # Merge back into main
    git switch main
    git merge feature/login
Fast-forward merge output (green output box):
    Updating 4a9b1c2..8e2f3d1
    Fast-forward
     auth.py | 14 ++++++++++++++
     1 file changed, 14 insertions(+)

Box 6: Saving Work with Stash
- git stash: Shelves dirty uncommitted changes without committing.
- git stash pop: Re-applies stashed work and deletes it from stash list.
- git stash list: Shows all stored stashes across branches.
- Ideal when you must switch branches quickly to fix an urgent hotfix bug.

Box 7: Common Traps & Fixes
- Detached HEAD: Checked out a commit SHA instead of branch. Fix: Run git switch main.
- Rebasing shared branches: Rewrites commit hashes. Fix: Never rebase commits already pushed to remote.
- Switching with uncommitted edits. Fix: Run git stash before switching.

Box 8: Remember
REMEMBER banner: Branches are 41-byte pointers; HEAD is where you stand. Switch cleanly with git switch.

BOTTOM STRIP (three small callouts):
- Real-world use cases: Feature branches isolate experimental code without touching stable production main.
- Interview tip: Q: Git Merge vs Rebase? A: Merge preserves historical context; rebase rewrites linear history.
- Pro tip: Run git log --oneline --graph --all to view your branch topology in the terminal.
~~~~

## Prompt 5: Remotes, Syncing & Resolving Conflicts

~~~~
Create ONE portrait study-notes page (US Letter ratio, high resolution) in a hand-drawn notebook style.

STYLE (keep identical on every page of the series):
- Cream lined notebook paper with a black spiral binding down the left edge.
- Hand-lettered title at the top with a red wavy underline; a small round topic badge at the top-right.
- Content arranged in a tidy grid of numbered boxes (circled numbers) with coloured dashed borders and soft pastel fills.
  Colour roles: blue = core concept, green = correct / good practice, red = mistakes and warnings,
  yellow = key point or tip, purple = tables and comparisons, orange = examples.
- Small clean icons and simple diagrams inside the boxes. Code in monospace boxes with an "Output:" box beneath.
- A bottom strip of three callouts: Real-world use cases, Interview tip, Pro tip.
- Small footer text with the series name and the page number.
- Dense but readable. Large clear handwriting-style fonts. No overlapping text. No decorative clutter.

TEXT RULES (very important):
- Render the text below EXACTLY as written. Do not rephrase, shorten, translate or add words.
- Spell every word and every code symbol exactly. Keep code on separate lines.
- If something does not fit, make the font smaller rather than dropping text.

PAGE TITLE (hand-lettered): Remotes, Syncing & Resolving Conflicts
Subtitle under the title: Connecting to remote repositories, sharing commits, and resolving merge conflicts
Footer: Git Basics - Quick Notes - Page 5 of 6

BOXES (in reading order, left column first):

Box 1: What is a Remote?
A remote is a repository hosted on a network or cloud service (e.g. GitHub). By default, the main upstream remote is called origin.
Remote-tracking branches (e.g. origin/main) are local bookmarks reflecting where the remote server stood at the last fetch.

Box 2: Syncing Commands
TABLE:
Command | What it does | Affects Workdir?
git fetch | Downloads remote commits | No (100% safe)
git merge origin/main | Merges fetched branch | Yes
git pull | fetch + merge combined | Yes
git push -u origin main | Uploads commits & tracks | No

Box 3: Local vs Remote Sync Flow
[DIAGRAM] Sequence diagram with lanes Local Workdir | Local Repo (.git) | Remote (origin). Messages in order: 1. Local Workdir -> Local Repo (.git): 1. git commit; 2. Local Repo (.git) -> Remote (origin): 2. git push; 3. Remote (origin) -> Local Repo (.git): 3. git fetch (dashed return); 4. Local Repo (.git) -> Local Workdir: 4. git merge (dashed return)

Box 4: When Conflicts Happen
A merge conflict occurs when two branches modify the same line in a file, or one deletes a file another modified.
Git halts the merge and inserts standard conflict markers: <<<<<<< HEAD (current), ======= (divider), and >>>>>>> <branch> (incoming).

Box 5: Conflict Anatomy & Resolution
Conflict markers & fix
CODE (monospace box):
    # Inside conflicted settings.py:
    <<<<<<< HEAD
    DATABASE_PORT = 5432
    =======
    DATABASE_PORT = 5433
    >>>>>>> feature/port-update
    
    # Fix: Choose correct line, delete markers, then:
    git add settings.py
    git commit -m "fix: resolve port conflict"

Box 6: Remote Sync Best Practices
- git pull --rebase: Keeps local unpushed commits on top of remote changes without extra merge commits.
- git remote -v: Inspects configured fetch and push URLs.
- Upstream tracking: Use git push -u origin <branch> once so future git push and git pull know their target.

Box 7: Remote Sync Mistakes
- Push rejected because remote has commits. Fix: Run git pull --rebase, resolve conflicts, then push.
- Using git push --force on shared main. Fix: Use --force-with-lease to prevent overwriting colleague work.
- Panic when conflict markers appear. Fix: Run git merge --abort to return safely to pre-merge state.

Box 8: Remember
REMEMBER banner: Fetch is safe inspection; Pull is fetch plus merge. Resolve markers, stage, and commit to settle conflicts.

BOTTOM STRIP (three small callouts):
- Real-world use cases: Continuous Integration (CI) systems trigger builds and test suites on git push events.
- Interview tip: Q: git fetch vs git pull? A: Fetch downloads objects without modifying working files; pull merges them.
- Pro tip: Configure git config --global pull.rebase true to keep pull histories clean and linear.
~~~~

## Prompt 6: Git Basics Cheat Sheet & Interview Guide

~~~~
Create ONE portrait study-notes page (US Letter ratio, high resolution) in a hand-drawn notebook style.

STYLE (keep identical on every page of the series):
- Cream lined notebook paper with a black spiral binding down the left edge.
- Hand-lettered title at the top with a red wavy underline; a small round topic badge at the top-right.
- Content arranged in a tidy grid of numbered boxes (circled numbers) with coloured dashed borders and soft pastel fills.
  Colour roles: blue = core concept, green = correct / good practice, red = mistakes and warnings,
  yellow = key point or tip, purple = tables and comparisons, orange = examples.
- Small clean icons and simple diagrams inside the boxes. Code in monospace boxes with an "Output:" box beneath.
- A bottom strip of three callouts: Real-world use cases, Interview tip, Pro tip.
- Small footer text with the series name and the page number.
- Dense but readable. Large clear handwriting-style fonts. No overlapping text. No decorative clutter.

TEXT RULES (very important):
- Render the text below EXACTLY as written. Do not rephrase, shorten, translate or add words.
- Spell every word and every code symbol exactly. Keep code on separate lines.
- If something does not fit, make the font smaller rather than dropping text.

PAGE TITLE (hand-lettered): Git Basics Cheat Sheet & Interview Guide
Subtitle under the title: 12 key concepts, 10 must-know interview questions, and the ultimate Git formula
Footer: Git Basics - Quick Notes - Page 6 of 6

BOXES (in reading order, left column first):

Box 1: Snapshot Model
Git stores full trees, not file diffs.
Unchanged files are hard-linked.
Commits are immutable snapshots.

Box 2: Three States
Modified in working directory.
Staged in the index buffer.
Committed in the local database.

Box 3: Branch Pointers
41-byte references to commit SHA.
Zero overhead creation.
HEAD tracks current checked-out branch.

Box 4: switch & restore
switch manages branch navigation.
restore un-stages or discards files.
Modern replacements for checkout.

Box 5: Merging Types
Fast-Forward: moves branch label.
3-Way: combines ancestor + heads.
Squash: combines branch to 1 commit.

Box 6: Rebase vs Merge
Merge preserves historic timeline.
Rebase rewrites linear graph.
Golden rule: Never rebase public branches.

Box 7: Remote Sync
origin = default remote repository.
fetch downloads without applying.
pull = fetch followed by merge.

Box 8: Stashing Work
git stash saves dirty uncommitted work.
git stash pop re-applies changes.
Keeps working tree clean for switches.

Box 9: Undoing Mistakes
git commit --amend updates last commit.
git revert adds new inverse commit.
git reset --hard destroys changes.

Box 10: Conflict Markers
<<<<<<< HEAD = your current code.
======= = conflict boundary.
>>>>>>> = incoming code to merge.

Box 11: The Reflog
git reflog records all HEAD movements.
Enables recovery of lost commits.
Lifesaver after mistaken hard resets.

Box 12: Git Aliases
Shortcut custom commands in ~/.gitconfig.
git config --global alias.st status
Accelerates daily CLI productivity.

Box: Top 10 Interview Questions
1. What is the difference between Git and SVN? Git is distributed with full local snapshots; SVN is centralised and diff-based.
2. What happens internally when you commit? Git writes blob objects for files, a tree object for directories, and a commit object with metadata.
3. What is the staging area (index) and why does it exist? It provides an intermediate buffer allowing developers to craft atomic, granular commits.
4. Explain git fetch vs git pull. Fetch updates remote-tracking references without touching working files; pull fetches and immediately merges.
5. How does Fast-Forward merge differ from 3-Way merge? Fast-forward moves the branch label forward linearly; 3-way creates a merge commit from a common ancestor.
6. What is git rebase and when is it dangerous? It replays commits on top of another base to linearize history. Dangerous if run on shared public branches.
7. What is a detached HEAD state? HEAD points directly to a commit hash rather than a named branch; new commits risk being orphaned.
8. How do you resolve a merge conflict? Open the conflicted file, manually choose desired lines, delete <<<<<<< and >>>>>>> markers, stage, and commit.
9. Difference between git reset, git revert, and git restore? Reset rewrites branch pointer; revert creates an inverse commit; restore affects working tree / index.
10. How can you recover a commit lost to git reset --hard? Run git reflog to identify the orphaned commit hash, then git switch -c recovery <hash>.

Box: The Ultimate Git Formula
REMEMBER banner: Snapshot -> Stage -> Commit -> Branch -> Fetch -> Merge (Recover with Reflog)

BOTTOM STRIP (three small callouts):
- Real-world use cases: Daily reference sheet for code reviews, onboarding engineers, and resolving git blocks.
- Interview tip: Mastering the DAG mental model answers 90% of all Git technical interview questions.
- Pro tip: When stuck, run git status and git reflog before running destructive commands.
~~~~
