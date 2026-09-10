# Idoma Nation

A multi-page front-end for an Idoma news, culture and community platform — home page, history page, and a palace/Och'Idoma page with a visitation request form. Plain HTML/CSS/JS, no build step required.

## File structure

```
idoma-nation-site/
├── index.html          Home — news, culture pillars, community gallery, contribute form
├── history.html         Idoma history & migration timeline
├── palace.html          The Och'Idoma, succession list, palace photos, visitation form
├── styles.css           Shared styles (design tokens, layout, dark mode)
├── script.js            Shared behaviour (nav, theme toggle, demo forms)
└── images/
    ├── gallery/          Community photos shown on the home page
    └── palace/           King's portrait + palace photos shown on the palace page
```

## Photos currently in the project

**`images/gallery/`** (home page "From the community"):
- `ochidoma-community-event.jpg` — the Och'Idoma addressing a public gathering
- `pepper-soup-1.jpg`, `pepper-soup-2.jpg` — Idoma pepper soup
- `otukpo-aerial.jpg` — aerial view of Otukpo ⚠️ **carries a "GEOTRAFFIC" watermark — this belongs to a drone photography service, not you. Get permission or replace it before publishing publicly.**
- `palace-building.jpg`, `chapel.jpg` — buildings in Idoma land (**please confirm these captions are accurate** — swap in verified ones if not)

**`images/palace/`**:
- `ochidoma-portrait.jpg` — the reigning Och'Idoma's portrait
- `building-1.jpg`, `chapel-1.jpg`, `ceremony-1.jpg` — palace/community photos (same caption caveat as above)

## Adding or replacing photos

Drop a new image into the matching folder using the same filename to replace one of the above, or add a new one:

1. Resize to roughly 1600px on the longest side and save as `.jpg`.
2. Give it a clear filename (lowercase, hyphens, no spaces).
3. Drop it into `images/gallery/` or `images/palace/`.
4. To wire it into a new slot, copy an existing `<img>` line in the HTML and point it at your new filename.

Until a file exists at the given path, that spot shows a striped placeholder instead of a broken image — nothing looks broken either way. Only use photos you have the right to publish.

## Running it locally

No install needed. Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Opening in VS Code

1. Open VS Code.
2. **File → Open Folder…** and select the `idoma-nation-site` folder.
3. Install the **Live Server** extension if you want auto-reload on save, then right-click `index.html` → **Open with Live Server**.

## Pushing to GitHub

This folder is **already a git repository with one commit** — you don't need to run `git init` again. From inside the `idoma-nation-site` folder, just connect it to a new GitHub repo and push:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Create the GitHub repo first (empty — no README/license, so it doesn't conflict with what's already here), then run the commands above.

### Optional: publish it for free with GitHub Pages

1. On GitHub, go to your repo's **Settings → Pages**.
2. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Save — GitHub gives you a live URL a minute or two later.

## Notes

- The contribute form and the palace visitation form are fully interactive but don't send data anywhere yet — they need a real backend or a form service (e.g. Formspree, a simple serverless function, or your own API) wired to the `<form>` submit handlers in `script.js`.
- The palace visitation form currently doesn't have a real palace contact behind it — connect it to an actual protocol email/phone before publishing so requests reach someone.
- Dark mode is a pure front-end toggle (no saved preference across page loads by design); add `localStorage` yourself in `script.js` if you want the choice to persist once this is running on your own domain.
