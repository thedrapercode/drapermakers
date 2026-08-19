# DraperMakers

The Draper family's handmade costume portfolio — build logs, a costume archive, and an
upcoming-conventions list. Built with [Eleventy](https://www.11ty.dev/) and edited through
[Sveltia CMS](https://sveltiacms.app/) (a free, git-based content editor).

## Local development

```
npm install
npm start
```

This serves the site at `http://localhost:8080` and rebuilds on save.

```
npm run build
```

Builds the static site into `_site/`.

## Structure

- `src/build-logs/*.md` — one file per costume. Fields: title, costume, year, theme
  (anime / horror / scifi / classic-monster — controls the color palette and font),
  maker, cover photo, a list of build photos, and contest placement.
- `src/conventions/*.md` — upcoming conventions (name, date, location, link).
- `src/_includes/layouts/` — page shell (`base.njk`) and the costume post layout (`post.njk`).
- `src/css/style.css` — base styles plus the theme variants (`.theme-anime`, `.theme-horror`,
  `.theme-scifi`, `.theme-classic-monster`). Add a new theme by adding a CSS block here and a
  new option in `src/admin/config.yml`.
- `src/admin/` — the Sveltia CMS editor. `config.yml` defines the fields in the editing form;
  **you must edit the `repo:` line in this file** to point at your actual GitHub repo before
  the admin panel will work (see setup guide).

## Deploying

See the setup guide provided alongside this project for connecting this repo to GitHub,
Cloudflare Pages, and the DraperMakers.com domain.
