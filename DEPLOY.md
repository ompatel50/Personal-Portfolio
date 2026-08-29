# Deploying

One-time setup. After this, updating the site is `git push` and nothing else.

---

## 1. GitHub

The repo lives at `github.com/ompatel50/Personal-Portfolio`. The redesign
arrives on a branch via pull request — merge that PR and `main` becomes the
deployable site.

Day-to-day after that:

```bash
# edit files
git add .
git commit -m "what changed"
git push
```

For small text edits you can also edit files directly on github.com — the
pencil icon on any file, then "Commit changes". Same result, no terminal.

**Before the first deploy:** restore the five report PDFs into `assets/`
(see `assets/PDFS_MISSING.md`). The links already point at the right
filenames; just add the files, commit, push.

---

## 2. Connect Netlify to the repo

1. Sign in at https://netlify.com
2. **Add new site → Import an existing project → GitHub**
3. Authorise Netlify and pick `Personal-Portfolio`
4. Build settings: leave the build command **empty**, publish directory `.`
   (`netlify.toml` already sets this)
5. Deploy

You get a URL like `curious-pastry-8a3f.netlify.app`. Check the whole site
works there before touching DNS.

**From here, every `git push` to `main` redeploys automatically.**

### Vercel instead of Netlify?

Also fine — this site is plain static files, so either host serves it
unchanged. On Vercel: **Add New → Project → import the repo**, set Framework
Preset to **Other**, leave build command empty and output directory as the
repo root. Two differences to know about:

- `netlify.toml` is ignored by Vercel. The equivalent cache/security headers
  would go in a `vercel.json` if you want them; the site works fine without.
- The custom 404 works on both (`404.html` is the convention both hosts use).

Pick one host and stick with it — running both against the same domain buys
nothing.

---

## 3. Point your Squarespace domain at it

In Netlify: **Site configuration → Domain management → Add custom domain**,
enter your domain. It'll say "awaiting external DNS" — expected.

In Squarespace: open your domain → **DNS settings**.

> **Do not switch to Netlify's nameservers.** Netlify will suggest it, but on
> a Squarespace domain this commonly throws a "DNS zone already exists on
> NS1" error and blocks the SSL certificate. Keep Squarespace's own
> nameservers and just edit the records.

Add two records, deleting any existing `@` or `www` records that point at
Squarespace first:

| Type | Host | Value |
|---|---|---|
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `your-site-name.netlify.app` |

Propagation takes 15 minutes to 48 hours. Once Netlify shows the domain
verified, it issues a free Let's Encrypt certificate automatically. Confirm
both `yourdomain.com` and `www.yourdomain.com` load over https.

(For Vercel the equivalent records are A `@` → `76.76.21.21` and CNAME
`www` → `cname.vercel-dns.com` — Vercel's domain screen shows them.)

---

## Adding a new project

1. Copy an existing page in `projects/` as a starting point
2. Drop the report PDF in `assets/` — **strip student ID numbers first** if
   it's a team report
3. Add a matching log row to `projects.html` (and `index.html` if it should
   be featured), renumbering entries so the newest is 01
4. Check every number against `PROJECT_FACTS.md`, and add the new facts there
5. Commit and push
