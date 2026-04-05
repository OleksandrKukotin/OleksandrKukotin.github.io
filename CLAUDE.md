# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal CV/portfolio website hosted on GitHub Pages at `OleksandrKukotin.github.io`. Built with Angular 21 (standalone components) and Bootstrap 5.3.

## Commands

```bash
npm start          # dev server at localhost:4200
npm run build      # production build → dist/portfolio/browser/
npm test           # run unit tests via vitest
npm run watch      # build in watch mode (development config)
```

After changing `angular.json` or `styles.css`, restart the dev server — hot reload does not pick up those changes.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and pushes `dist/portfolio/browser/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. GitHub Pages serves from the `gh-pages` branch. No PAT required — the workflow uses the built-in `GITHUB_TOKEN`.

## Architecture

Single-component app — all CV content lives in one component with no routing:

- `src/app/app.ts` — root component (no `RouterOutlet`, no signals, minimal)
- `src/app/app.html` — entire page: navbar, Bio, Education, Experience, Projects, Skills, Contact, footer
- `src/app/app.css` — component-scoped styles: navbar (`.cv-navbar`), footer (`.cv-footer`), contact label
- `src/styles.css` — **global** Bootstrap overrides and the color palette (use this file for anything that needs to override Bootstrap, since Angular's emulated encapsulation adds attribute selectors to component styles)
- `angular.json` — Bootstrap CSS is loaded here under `styles`, before `src/styles.css`

## Color palette

| Variable | Hex | Role |
|---|---|---|
| `--cv-navy` | `#364958` | Navbar, footer, headings, body text |
| `--cv-dark-teal` | `#3b6064` | Link hover, badge text |
| `--cv-teal` | `#55828b` | Links, accents |
| `--cv-sage` | `#87bba2` | Muted text, section labels |
| `--cv-light` | `#c9e4ca` | Borders, badge backgrounds |

CSS variables are defined in `:root` in `src/styles.css`.

## IDE

The project is opened in JetBrains IDE (`.idea/` present). The `.idea/` directory is intentionally untracked by git.
