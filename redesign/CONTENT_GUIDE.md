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
