# Chocolate Sea Salt Caramels — Playtester

A browser-based playtest app for *Chocolate Sea Salt Caramels* (v5 ruleset): 1 human player vs. 1–4 bots. Built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended, included)

This repo already includes a workflow at `.github/workflows/deploy.yml` that builds the app and deploys it automatically on every push to `main`.

1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push any commit to `main` (or re-run the workflow from the **Actions** tab). The site will publish at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

The build uses a relative asset base (`base: "./"` in `vite.config.js`), so it works at any path automatically — no config changes needed for your specific repo name.

### Option B — Manual build, no Actions

If you'd rather not use Actions:

```bash
npm install
npm run build
```

This produces a static site in `dist/`. Push the *contents* of `dist/` to whichever branch/folder GitHub Pages is configured to serve:

- **`gh-pages` branch:** easiest with the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package:
  ```bash
  npm install -D gh-pages
  npx gh-pages -d dist
  ```
  Then in **Settings → Pages**, set Source to the `gh-pages` branch.
- **`/docs` folder on `main`:** copy `dist/*` into a `docs/` folder at the repo root, commit, and set Source to `main` / `docs` in **Settings → Pages**.

## Project structure

```
├── index.html            # entry HTML
├── src/
│   ├── main.jsx           # mounts <App /> into #root
│   └── App.jsx             # the entire game (UI + game logic)
├── vite.config.js
├── package.json
└── .github/workflows/deploy.yml   # GitHub Actions Pages deployment
```

## Notes

- All game art (tile icons, sand background) is embedded directly in `App.jsx` as base64 data URIs — there are no separate image files to manage or lose.
- No backend/database is used; all game state lives in memory for the current browser session (a full page refresh starts a new game).
- Dependencies: `react`, `react-dom`, `lucide-react` (icons).
