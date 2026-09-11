# Probst Lab design draft

This branch introduces a Jekyll lab homepage, shared navigation and stylesheet,
a data-driven People page, a research overview, Teaching & Outreach, and Join Us.
Existing research, publications, news, and CV URLs remain available.

## Editing

- People: `_data/people.yml`. Add confirmed members using the documented fields.
  Only confirmed PI information is populated. Groups display in first-seen order;
  featured members also appear on the homepage. Photos are optional.
- Research cards: `_data/research.yml`.
- Homepage news: `_data/highlights.yml`. These are curated archive highlights,
  not an automatically updated news feed. The original archive stays in `News.md`.
- Homepage copy and selected papers: `index.html`.
- Navigation: `_data/lab_navigation.yml`.
- Shared design: `_layouts/lab.html`, `_layouts/page.html`, `assets/css/lab.css`.

## Design choices

Uses optimized derivatives of existing repository photographs (under 650 KB total),
a static macro photograph for the hero, system serif/sans fonts, responsive layouts,
a keyboard-accessible mobile menu, a skip link, and reduced-motion support.
The existing video remains in the repository for a possible later motion variant.
No new client framework or external font dependency is introduced.

## Before publication

Review the proposed copy and contact address (the existing Gmail address), provide
confirmed student names, roles, bios and portraits, and decide whether to add newer
news. Interior research and publication text remains substantially as supplied;
publication statuses and historical claims have not been fact-checked or updated.

## Build

The repository's existing GitHub Pages Gemfile and lockfile are preserved. With a
Ruby environment compatible with that lockfile, use `bundle install`, then
`bundle exec jekyll serve`. This draft does not migrate the old dependency stack.
