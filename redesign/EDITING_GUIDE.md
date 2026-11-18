# Editing the Probst Lab website

The website's words, links, visibility controls, and image settings are stored in Markdown files under `src/content/`. On GitHub, the complete site is inside the `redesign/` folder, so the same location appears there as `redesign/src/content/`.

The page layouts and styling are separate. Routine content work—including changing text, adding a person, adding a publication or news item, replacing a photograph, and hiding an item—should not require changing Astro components or CSS.

## The 60-second workflow

For almost every routine update:

1. Open the repository on GitHub.
2. Switch to the `probst-lab-redesign` branch.
3. Open `redesign/` and locate the relevant Markdown file using the table below.
4. Click the pencil icon, make the smallest necessary edit, and preview the changed lines.
5. Commit directly to `probst-lab-redesign` with a short message such as `Update Mandy biography`.
6. Review the change in the private preview after it has been synchronized and rebuilt.

The Markdown/YAML files control content. The Astro and CSS files control layout. Keeping those jobs separate is what makes normal editing safe.

## The safe editing rule

Always confirm that GitHub shows the branch `probst-lab-redesign` before editing. Do not edit `master`, which still powers the current public website.

For a normal text change:

1. Open the appropriate file on GitHub.
2. Click the pencil icon (`Edit this file`).
3. Change the content, preserving the indentation and field names.
4. Select `Commit directly to the probst-lab-redesign branch`.
5. Enter a short description and click `Commit changes`.

Git records every version. A mistaken edit can be inspected or reversed later.

## Where content lives

| Content | Location |
| --- | --- |
| Homepage | `redesign/src/content/pages/home.md` |
| Site name and navigation | `redesign/src/content/settings/site.md` |
| People page headings and group photograph | `redesign/src/content/pages/people.md` |
| Individual people | `redesign/src/content/people/` |
| Research page headings | `redesign/src/content/pages/research.md` |
| Individual research programs | `redesign/src/content/research/` |
| Publications page headings | `redesign/src/content/pages/publications.md` |
| Individual publications | `redesign/src/content/publications/` |
| Manuscripts in development | `redesign/src/content/manuscripts/` |
| News page headings | `redesign/src/content/pages/news.md` |
| Individual news stories | `redesign/src/content/news/` |
| Teaching & Outreach | `redesign/src/content/pages/teaching-outreach.md` |
| Join the Lab | `redesign/src/content/pages/join.md` |
| Page-not-found text | `redesign/src/content/pages/not-found.md` |
| Photographs and video | `redesign/public/images/` |

Files whose names begin with `01-`, `02-`, and so forth are displayed according to their `order` field. The numerical filename prefix also keeps the GitHub folder easy to browse.

The News page is a simple newest-first list. Each visible update has one file in
`src/content/news/`. Change its top-level `show` value to `false` to hide it without deleting it.

## Editing text safely

The section between the two `---` lines at the top of each Markdown file uses YAML. A typical field looks like:

```yaml
title: Ants are, arguably, the coolest!
```

Change the text after `title:` but leave the field name and colon in place.

Long text may appear in a folded block:

```yaml
summary: >-
  The Probst Lab combines phylogenomics, natural history, morphology, and field biology to
  investigate ant evolution, ant–plant symbioses, and biological diversity.
```

Edit the indented lines normally. Keep every line in that paragraph indented by the same amount.

If text contains a colon and GitHub reports a YAML error, surround the complete value with quotation marks:

```yaml
title: "Ants and evolution: questions across scales"
```

Use ordinary Markdown asterisks for italics, including scientific names:

```yaml
summary: We study *Myrmelachista* evolution.
```

For a full species name, place both words inside the same pair:

```yaml
caption: '*Myrmelachista flavoguarea* on *Guarea tafae-malekui*.'
```

When an italicized word begins the value, keep quotation marks around the complete value as in the
caption example above. In an indented `>-` paragraph, quotation marks are not necessary.

## Editing links safely

Internal links begin with `/` and point to another page on the lab website:

```yaml
href: /research/
```

A link to a section on a page includes `#` followed by that section's fixed identifier:

```yaml
href: /research/#symbioses-convergence
```

Do not change the text after `#` unless the matching section identifier is also intentionally changed in the layout. External links should include the complete `https://` address. DOI links should normally use this stable form:

```yaml
href: https://doi.org/10.xxxx/example
```

Never place Markdown asterisks inside a URL. They belong only in the visible label or title.

## Showing and hiding content

Most optional content has a visibility control:

```yaml
show: true
```

Change it to `false` to hide that item without deleting it. Use lowercase `true` and `false` without quotation marks.

## Editing the homepage

Homepage wording and links remain together in `src/content/pages/home.md`. The major blocks are:

- `hero` for the welcome message, main statement, button, and still photograph.
- `researchOverview` for the combined dark **What we study** section: its central question and
  supporting paragraph.
- `researchThemes` for the three compact research gateways.
- `peopleGateway` for the **Meet the lab** button shown in the closing video section.
- `contact` for the closing invitation and **Contact us** button.
- `videoFeature` for the ant video behind the contact section, including its caption.

The hero photograph can be switched off without deleting it:

```yaml
image:
  show: false
```

The contact-background video has its own independent visibility control:

```yaml
videoFeature:
  show: false
```

Scientific names in the video caption use the same Markdown asterisks as other editable text. There
is no separate scientific-name list to maintain.

The three research cards each have a `link` whose `href` points to the corresponding section of the
Research page. Preserve the section name after `#` when editing those links.

## Editing the Research page

The opening text, hero image, research-program heading, and three collaborative extensions are in
`redesign/src/content/pages/research.md`. Each major ant research program has its own file in
`redesign/src/content/research/`.

To change the prose for one program, edit its existing file. Preserve its `id`; the homepage research cards link directly to that identifier. The program's article links follow this structure:

```yaml
links:
  - label: Short visible paper title · Journal (year)
    href: https://doi.org/10.xxxx/example
```

The collaborative extensions use the same text, image, credit, license, and link pattern inside
`pages/research.md`. If a figure is replaced, update its `alt`, `source`, `credit`, and license at the same time.

## Editing or adding a person

Each lab member has one file in `redesign/src/content/people/`. A student profile has this basic structure:

```yaml
---
order: 4
show: true
group: graduate-student
name: Example Name
initials: EN
role: PhD Student
biography: >-
  Profile text goes here.
interests:
  - Ant ecology
  - Natural history
image:
  show: false
  src: ''
  alt: Portrait of Example Name.
  objectPosition: 50% 40%
links: []
---
```

Use one of these exact `group` values:

| Person type | `group` value |
| --- | --- |
| Principal investigator | `principal-investigator` |
| Graduate student | `graduate-student` |
| Undergraduate student | `undergraduate-student` |
| Postdoctoral researcher | `postdoctoral-researcher` |
| Visiting researcher | `visiting-researcher` |

The page automatically displays only categories that currently contain people; adding the first undergraduate, postdoc, or visitor will create the appropriate section without creating an empty section beforehand.

Within each category, lower `order` values appear first. `initials` are used only while a portrait is hidden. Set the profile's top-level `show` to `false` to remove the complete profile temporarily without deleting it.

To add a person:

1. Copy a similar existing profile.
2. Give the copy the next numerical filename prefix and a lowercase hyphenated name, such as `05-example-name.md`.
3. Replace every personal field, including `alt` text and initials.
4. Choose the correct `group` and `order`.
5. Leave `links: []` when no links are ready.

## Adding a News story

Copy the newest file in `src/content/news/`, rename it using the next numerical prefix, and edit:

```yaml
order: 6
id: short-unique-name
show: true
date: December 2026
title: A short descriptive headline
summary: A concise description of what happened and why it matters.
```

The `id` should contain lowercase letters, numbers, and hyphens only. Give each new update the next
higher `order` number so it appears at the top of the list.

## Replacing photographs

Website photographs live in `public/images/`.

1. In GitHub, open `redesign/public/images/` on the `probst-lab-redesign` branch.
2. Choose `Add file` and then `Upload files`.
3. Use a short lowercase filename with hyphens, such as `mandy-fieldwork.jpg`.
4. Commit the upload to the redesign branch.
5. Open the relevant Markdown file and update the image fields:

```yaml
image:
  show: true
  src: /images/mandy-fieldwork.jpg
  alt: Mandy Frazer collecting ants during fieldwork.
  caption: Fieldwork in northern California
  objectPosition: 50% 40%
```

`alt` describes the image for visitors who cannot see it. `caption` is visible beneath the image. `objectPosition` adjusts the crop: the first percentage moves the focal point horizontally and the second moves it vertically.

For web performance, use JPEG or WebP for photographs. Avoid uploading the full-resolution camera original. A width of roughly 1600-2400 pixels should be sufficient.

### Replacing the lab-group photograph

Upload the new image to `redesign/public/images/`, then edit `labPhoto` in
`redesign/src/content/pages/people.md`:

```yaml
labPhoto:
  show: true
  src: /images/probst-lab-first-gathering.jpg
  alt: Four members of the Probst Lab seated together outdoors at their first lab gathering.
  caption: The Probst Lab at its first gathering at UC Davis, 2026.
  objectPosition: 50% 70%
```

Because this photograph is displayed as a wide editorial banner, `objectPosition` is especially important. Increase the second percentage to move the crop downward; decrease it to move the crop upward. Always check both desktop and mobile after changing it.

### Adding an individual portrait

After uploading the portrait, change the person's image block from `show: false` to `show: true`, add the path, and adjust the crop:

```yaml
image:
  show: true
  src: /images/example-name.jpg
  alt: Portrait of Example Name.
  objectPosition: 50% 35%
```

Do not delete `initials`; they remain a useful fallback if the photograph is hidden later.

## Publications and scientific names

Scientific names use the same visible Markdown notation throughout editable prose, biographies,
captions, research text, publication titles, and manuscript titles:

```yaml
title: The evolution of *Myrmelachista*
```

Captions displayed in capitals retain their specialized typographic treatment automatically.

Each publication has one file in `src/content/publications/`. Its `order` determines its position in the complete list. Set `show: false` to retain a record without displaying it.

Publication titles use the regular `title` field. Place asterisks around every genus or binomial that
should be italicized; no HTML tags are needed.

The IDs listed under `selected.publicationIds` in `src/content/pages/publications.md` control the four highlighted papers and their order.

Use this template when adding a published journal article:

```yaml
---
order: 1
id: short-unique-id
year: '2026'
type: Journal article
authors: Probst, R. S., Example, A., & Example, B.
title: A title containing *Genus species* when needed.
venue: Journal Name
details: '12(3): 101–115'
href: https://doi.org/10.xxxx/example
note: Optional short note
show: true
---
```

Publication fields mean:

| Field | What to enter |
| --- | --- |
| `order` | Display position; lower numbers appear first |
| `id` | Permanent lowercase identifier with hyphens; do not reuse one |
| `year` | Four-digit publication year in quotation marks |
| `status` | Optional, normally only `In press` or `Accepted` |
| `type` | `Journal article`, `Review`, `Book chapter`, or another accurate type |
| `authors` | Citation-order author list; `et al.` is acceptable for a very long list |
| `title` | Exact published title, with Markdown italics for scientific names |
| `venue` | Full journal or book title |
| `details` | Volume, issue, pages, or article number, such as `21(2): e0343810` |
| `href` | Prefer the stable DOI URL |
| `note` | Optional short lab-relevant note |
| `show` | `true` to publish the record; `false` to retain it privately |

For an in-press paper with no public volume, pages, or DOI, omit fields that are genuinely unavailable rather than guessing. Add them as soon as the publisher supplies the final record.

Optional media, podcast, data, or student-profile links can be added to the relevant publication
file beneath its article link:

```yaml
href: https://doi.org/10.xxxx/example
links:
  - label: Research feature
    href: https://example.org/feature
  - label: Podcast
    href: https://example.org/podcast
```

Add or remove complete two-line `label` and `href` pairs. These extra links appear beside the
article link in the publication list.

To change the four highlighted papers, edit only the IDs under `selected.publicationIds`. Every ID must exactly match the `id` in an existing visible publication file.

## Editing Teaching & Outreach

The wording, courses, outreach items, images, and contact invitation are all in
`src/content/pages/teaching-outreach.md`.

Several longer elements are retained but hidden in the simplified version:

```yaml
showCycle: false
showTopics: false
selectedTeaching:
  show: false
communication:
  show: false
```

Change an appropriate value to `true` if you later want to restore the teaching cycle, course topic
tags, selected teaching history, or separate science-communication section. Individual outreach
items also have their own `show` setting.

## Editing Join the Lab

The complete page is controlled by `src/content/pages/join.md`. Its main visible blocks are:

- `masthead` for the opening statement.
- `availability` for the current-status notice.
- `inclusion` for the lab's justice, equity, diversity, and inclusion commitment.
- `pathways` for graduate, undergraduate, postdoctoral, collaborator, and visitor information.
- `contact` for the closing email invitation.

The category-specific **What to include** guidance is visible beneath each opportunity. You can
hide or restore it with:

```yaml
pathways:
  showDetails: true
```

The remaining longer elements are retained but hidden in the simplified version:

```yaml
inclusion:
  showValues: false
pathways:
  showNumbers: false
firstMessage:
  show: false
```

The key guidance from **Help us understand the fit** is now condensed into `contact.body`. Change the
appropriate visibility value to `true` if you want to restore one of the longer elements, or change
`showDetails` to `false` if you want to hide the category-specific guidance again.

## What not to edit for ordinary updates

Routine content changes should not require editing:

- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/styles/global.css`
- `src/content.config.ts`

Those files control page construction and visual design. Use them only for an intentional design or functionality change.

## Previewing and checking changes

A GitHub commit updates the redesign branch, but it does not replace the public `master` website. The private preview is a separate deployment and must be synchronized and rebuilt after GitHub edits.

The build checks YAML structure, generates all eight routes, and runs an internal-link audit. The link audit verifies:

- every internal page link;
- every link to a section such as `/research/#functional-diversity`;
- every local image and video path;
- the favicon and sitemap paths.

External sources can change independently, so article, profile, media, and dataset links should also be opened manually when they are added or substantially revised.

If you work from a local clone, run:

```bash
npm install
npm run check
```

Do not commit `node_modules/` or generated `dist/` files.

## Fixing a mistake

GitHub keeps every committed version. If a recent edit causes a problem:

1. Open the changed file on the `probst-lab-redesign` branch.
2. Select **History**.
3. Open the last known-good version.
4. Use its contents to restore only the affected field or file.
5. Commit the repair with a message such as `Restore people page settings`.

Avoid deleting an entire file merely to hide content. Prefer `show: false`, which is easier to reverse.

Common build problems are usually small YAML mistakes:

- incorrect indentation;
- a missing closing quotation mark;
- a colon in unquoted one-line text;
- an incomplete `label`/`href` pair;
- a misspelled image filename;
- an ID in `selected.publicationIds` that does not match a publication file.

## Before committing

Check these things:

- You are on `probst-lab-redesign`, not `master`.
- YAML indentation still matches the surrounding lines.
- Every image path begins with `/images/` and matches the uploaded filename exactly.
- Visibility fields use unquoted lowercase `true` or `false`.
- Scientific names use paired Markdown asterisks.
- New external links include `https://`; internal links begin with `/`.
- Publication details include volume, issue, and pages or article number when available.
- No field names, colons, or YAML indentation were accidentally removed.
- Your commit message briefly describes the change.
