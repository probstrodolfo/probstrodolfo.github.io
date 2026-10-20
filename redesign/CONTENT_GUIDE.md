# Editing the Probst Lab website

The homepage text, navigation, buttons, and image controls currently live in:

`src/data/site.ts`

## Show or hide the hero photograph

Find the `hero.image` section and change:

```ts
show: true
```

to:

```ts
show: false
```

## Replace the hero photograph

1. Add the new image to `public/images/`.
2. Change `src`, `alt`, and `caption` in the `hero.image` section.
3. Adjust `objectPosition` if the subject needs to move within the crop.

## Show or hide the opening research question

Find `openingQuestion` and change its `show` value to `true` or `false`.

Later sections will follow this same pattern. People, publications, news, and research projects will each be stored as individual content records, so adding or featuring an item will not require editing the page layout.

## Show or hide the research themes section

Find `researchThemes` and change its main `show` value to `true` or `false`.

Each theme also has its own `show` value. Changing that value hides only that theme. Each theme photograph has a separate `image.show` value, so a theme can remain visible without its photograph.

To replace a research photograph, add the file to `public/images/`, then update the theme's `src`, `alt`, `caption`, and—if needed—`objectPosition` values.

## Edit the publications page

All publication entries live in:

`src/data/publications.ts`

Each publication is one record. Edit its title, authors, venue, year, or link directly in that record. Change `show: true` to `show: false` to temporarily hide an entry without deleting it.

The four papers highlighted at the top are controlled by `selected.publicationIds`. Reorder those IDs or replace one with another publication's `id` to change the selected papers.

Scientific names in titles use simple HTML italics, for example:

```html
<em>Myrmelachista</em>
```

The manuscripts-in-preparation section has its own `show` control, and every manuscript inside it can also be shown or hidden independently.

## Edit the Join the Lab page

All Join page text, contact details, and opportunity pathways live in:

`src/data/join.ts`

The `availability` block is the place to announce a specific funded opening. Its `show` value can also hide the entire status notice.

Each pathway—graduate students, undergraduates, postdoctoral researchers, and collaborators—contains editable introductory text, a checklist, and an optional `links` list. Links can be added later without changing the page layout.

The lab-culture photograph has the same `show`, `src`, `alt`, `caption`, and `objectPosition` controls used elsewhere on the site.

Before launch, confirm the email address in `contact.email` and replace it there if a UC Davis address is preferred.

## Edit the Teaching & Outreach page

All course, teaching-history, outreach, and invitation text lives in:

`src/data/teachingOutreach.ts`

Each current course has a `show` control. Change the term, summary, or topic list in the same course record when the teaching schedule changes.

The selected teaching-history section has a main `show` control and is intentionally shorter than a CV. Every history and outreach item also has its own `show` control, so an item can be hidden without deleting it.

The three page images have the same `show`, `src`, `alt`, `caption`, and `objectPosition` controls used across the site.

The page's main photographs currently show Rodolfo actively doing fieldwork and field teaching. Student-centered photographs are reserved for the clearly labeled mentorship section, so future replacements should preserve that visual hierarchy.

The final outreach invitation can be hidden with `invitation.show`. Its email currently matches the old website and should be updated alongside the Join page before launch.

## Edit the News page

All News page text and stories live in:

`src/data/news.ts`

Each story has a `show` control. Set it to `false` to hide a story without deleting it. Set `featured: true` to place a story in the larger featured area; use `featured: false` for the chronological story grid.

Every story also has its own image controls. An item can be displayed without a photograph by setting `image.show` to `false`. To add or replace a photograph, place it in `public/images/` and update `src`, `alt`, `caption`, and `objectPosition`.

The starter archive is labeled as earlier mentoring and research work so it is not confused with current UC Davis lab membership. New UC Davis stories can be added at the beginning of `newsItems`; the archive introduction can be revised or hidden once the page has enough current news.
