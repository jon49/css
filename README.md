# CSS

A minimal, semantic, modern CSS framework. Pico-inspired. OKLCH colors cascade from a single base hue and chroma. No classes required for most elements.

- **Demo:** https://jon49.github.io/css/
- **Repo:** https://github.com/jon49/css

## Features

- Classless styling for standard HTML elements (typography, forms, tables, buttons, nav, details, cards).
- OKLCH color system driven by two custom properties: `--hue` and `--chroma`. Every component color derives from them.
- Automatic light/dark via `color-scheme` and `light-dark()`, with an opt-in radio-input override (`<input name="theme" value="light|dark|auto">`).
- Each component lives in its own file under `css/` — load only what you need.
- Live color picker and one-click CSS bundle export on the demo page.

## Usage

Link the stylesheets in order (variables first, reset next, then components):

```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/document.css">
<link rel="stylesheet" href="css/typography.css">
<link rel="stylesheet" href="css/link.css">
<link rel="stylesheet" href="css/list.css">
<link rel="stylesheet" href="css/button.css">
<link rel="stylesheet" href="css/form.css">
<link rel="stylesheet" href="css/table.css">
<link rel="stylesheet" href="css/code.css">
<link rel="stylesheet" href="css/nav.css">
<link rel="stylesheet" href="css/details.css">
<link rel="stylesheet" href="css/card.css">
```

Or visit the [demo](https://jon49.github.io/css/), pick a color, and click **Export CSS** to download a single pre-configured bundle.

## Customizing colors

Override `--hue` (0–360) and `--chroma` (0–0.25) on `:root`:

```css
:root {
  --hue: 250;
  --chroma: 0.08;
}
```

## Project layout

```
css/          Component stylesheets
js/build.js   Bundle + download logic for the demo
index.html    Live demo and color picker
```

## License

MIT
