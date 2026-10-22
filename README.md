# joe johnson — portfolio

Personal site for Joe Johnson, full-stack developer. Built with [Astro](https://astro.build), static output, no client-side JavaScript.

## Requirements

Node.js 22.23.4 or newer (Astro 7 requirement). Node 24 LTS recommended.

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at localhost:4321  |
| `npm run build`   | Build the static site to `./dist/`      |
| `npm run preview` | Preview the production build locally    |

## Structure

```
src/
  content.config.ts      Collections: projects, experience
  content/projects/      One Markdown file per project (frontmatter + write-up)
  content/experience/    One Markdown file per role
  data/site.ts           Name, links, services, steps, stack, about, quote
  styles/global.css      Design tokens, buttons, cards, motion
  layouts/Base.astro     <head>, header, footer
  components/            Logo, Header, Footer, ProjectCard, ExperienceList, ...
  pages/                 /, /about, /projects, /projects/[id], /contact, 404
```

## Filling in content

- Search for `TODO` in `src/data/site.ts` and `astro.config.mjs` (production URL).
- Projects: edit or add files in `src/content/projects/`. Set `flagship: true` on the one that gets the large home-page card. Put screenshots next to the file and reference them with `cover: ./screenshot.png`.
- Experience: one file per role in `src/content/experience/`, sorted by `order`.
- CV: add `public/cv.pdf`.
- Accent colour: change `--accent` in `src/styles/global.css` (alternatives listed there).

## Deploying

Works on Vercel or Netlify with no config: build command `npm run build`, output directory `dist`.
