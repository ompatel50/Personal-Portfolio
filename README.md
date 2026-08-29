# Om M. Patel — Aerospace Engineering Portfolio

Static site. No build step, no dependencies, no framework.

**Live preview locally:** `python3 -m http.server` in this folder, then open
http://localhost:8000

## Design

Flight-test log: dark instrument-panel ground (`--bg`), one caution-panel
amber accent (`--amber`), condensed uppercase display type (Barlow Condensed),
and monospace (JetBrains Mono) carrying every number, label, and status flag.
Projects read as numbered log entries with honest verification states —
`VERIFIED / PARTIAL / NOT MET / NEVER FLEW`.

Colors and type are CSS variables at the top of `css/styles.css`. Changing
`--amber` or `--bg` restyles the whole site.

## Layout

```
index.html          Home — hero, three featured log entries, skills
projects.html       The full log: all six projects
resume.html         Resume (mirrors the PDF, plus laboratory experience)
contact.html        Contact details + form
404.html            Custom not-found page (Netlify picks it up automatically)
projects/           One page per project (six)
css/styles.css      All styling (single file)
js/main.js          Scroll reveal + form validation — nothing depends on it
assets/             Headshot, resume PDF, project report PDFs
netlify.toml        Deploy + cache config
PROJECT_FACTS.md    Verified facts — single source of truth for all content
DEPLOY.md           First-time deploy walkthrough
```

## Editing

Content lives directly in the HTML. To change a project, edit its page in
`projects/` and the matching log row in `projects.html` (and `index.html` if
it's one of the three featured entries).

**Check any new number against `PROJECT_FACTS.md` first.** If a draft
disagrees with that file, the file is right.

## Deploying

Every push to `main` redeploys automatically once the repo is connected to
Netlify. See `DEPLOY.md` for first-time setup.

## Report provenance

| File | Source |
|---|---|
| `structural-beam-report.pdf` | LaTeX rebuild of the Semester Final Project Report |
| `cfd-report.pdf` | LaTeX rebuild of the airfoil CFD report, coefficients corrected |
| `propulsion-report.pdf` | LaTeX rebuild of the AESP 314 final project |
| `habsat-report.pdf` | AESP 428 Design & Verification Report, student IDs redacted |
| `aircraft-design-report.pdf` | AESP 415 Conceptual Design Report, student IDs redacted |

All published PDFs have student ID numbers removed. Keep it that way — the
team reports carry other people's IDs. There is no electrical report and no
wind tunnel report; nothing on the site links to either.

**Note:** the five report PDFs above are currently absent from this copy — see
`assets/PDFS_MISSING.md`. The HTML links them by these exact filenames. Copy
the originals back into `assets/` before deploying; do not regenerate them.

## Contact form

Posts to formsubmit.co. Submit the form once yourself to receive the
activation email and confirm the address, or submissions won't be delivered.

## Accessibility notes

- Nothing depends on JavaScript: navigation is plain links (no hamburger),
  and the scroll reveal opts in by adding a class to `<html>` — if the script
  fails, every element stays visible.
- `prefers-reduced-motion` disables the reveal and all transitions.
- Keyboard focus is visible everywhere (amber outline).
- Unit case is hand-authored — no CSS `text-transform` is applied where µs,
  kHz, τ, or SI units appear.
- Print stylesheet flips to ink-on-white; the resume page prints cleanly.
