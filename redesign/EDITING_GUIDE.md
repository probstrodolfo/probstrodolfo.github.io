# Editing the Probst Lab website

The website's words, links, visibility controls, and image settings are stored in Markdown files under `src/content/`. The page layouts and styling are separate, so routine content edits should not require changing Astro components or CSS.

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
| Homepage | `src/content/pages/home.md` |
| Site name and navigation | `src/content/settings/site.md` |
| People page headings | `src/content/pages/people.md` |
| Individual people | `src/content/people/` |
| Research page headings | `src/content/pages/research.md` |
| Individual research programs | `src/content/research/` |
| Publications page headings | `src/content/pages/publications.md` |
| Individual publications | `src/content/publications/` |
| Manuscripts in development | `src/content/manuscripts/` |
| News page headings | `src/content/pages/news.md` |
| Individual News stories | `src/content/news/` |
| Teaching & Outreach | `src/content/pages/teaching-outreach.md` |
| Join the Lab | `src/content/pages/join.md` |
| Page-not-found text | `src/content/pages/not-found.md` |

Files whose names begin with `01-`, `02-`, and so forth are displayed according to their `order` field. The numerical filename prefix also keeps the GitHub folder easy to browse.

The News tab remains in the site navigation, but its current announcement and all individual stories are presently switched off with `show: false`. You can edit them normally and publish a story by changing the top-level `show` near the beginning of that story's file to `true`. The separate `show` nested under `image` controls only its photograph.

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

## Showing and hiding content

Most optional content has a visibility control:

```yaml
show: true
```

Change it to `false` to hide that item without deleting it. Use lowercase `true` and `false` without quotation marks.

News stories also have:

```yaml
featured: true
```

`true` places the story in the large featured area. `false` places it in the regular News grid.

## Editing the homepage

Homepage wording and links remain together in `src/content/pages/home.md`. The major blocks are:

- `hero` for the welcome message, main statement, button, and still photograph.
- `openingQuestion` for the dark central-question section.
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

## Editing a person

Each lab member has one file in `src/content/people/`. For example, XYZ profile is `02-XYZ.md`.

The most commonly edited fields are:

```yaml
name: XYZ
role: PhD Student
biography: >-
  Profile text goes here.
interests:
  - Invasion biology
  - Chemical ecology
```

To add another interest, add another indented line beginning with `-`. To add a new person, copy an existing student file, give it a new filename and `order`, and replace its contents.

## Adding a News story

Copy one of the files in `src/content/news/`, rename it using the next numerical prefix, and edit:

```yaml
order: 8
id: short-unique-name
show: true
featured: false
date: October 2026
category: Fieldwork
title: A short descriptive headline
summary: A concise description of what happened and why it matters.
```

The `id` should contain lowercase letters, numbers, and hyphens only.

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

## What not to edit for ordinary updates

Routine content changes should not require editing:

- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/styles/global.css`
- `src/content.config.ts`

Those files control page construction and visual design. Use them only for an intentional design or functionality change.

## Before committing

Check these five things:

- You are on `probst-lab-redesign`, not `master`.
- YAML indentation still matches the surrounding lines.
- Every image path begins with `/images/` and matches the uploaded filename exactly.
- Visibility fields use unquoted lowercase `true` or `false`.
- Your commit message briefly describes the change.
