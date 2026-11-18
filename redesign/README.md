# Probst Lab website redesign

This folder contains the Astro source for the new Probst Lab website. Routine text, link, image, people, publication, research, and news updates are made through Markdown/YAML files rather than through the page-layout code.

Start with **[EDITING_GUIDE.md](./EDITING_GUIDE.md)**. It gives the exact GitHub workflow, a file map, copyable examples, image instructions, publication fields, visibility controls, checks, and recovery steps.

## Important branch rule

Work only on the `probst-lab-redesign` branch while the existing site remains live. Do not commit redesign files to `master` until the replacement site has received final approval.

## Optional local check

```bash
npm install
npm run check
```

The check builds every page and verifies all internal pages, section links, images, video, and other local files.
