# CSS

[Pico CSS](https://picocss.com) v2.1.1, split into one file per section, with a
live OKLCH theme picker and an in-browser CSS builder on the demo page.

- **Demo:** https://jon49.github.io/css/
- **Repo:** https://github.com/jon49/css

## Features

- Classless styling for standard HTML elements — typography, forms, tables,
  buttons, nav, accordions, cards, modals and more.
- Every section of `pico.css` lives in its own numbered file under `css/`, so
  you can load only the parts you need.
- An OKLCH accent color driven by three custom properties — `--accent-h`
  (hue), `--accent-c` (chroma) and `--accent-l` (lightness). The whole primary
  palette derives from them.
- Light/dark handled purely in CSS: system preference by default, with an
  opt-in override via `data-theme` or a `#theme` radio group (`:has()`), no
  JavaScript required.
- The demo page has a live color picker (wheel, sliders, hex/RGB input) and a
  CSS builder: tick the sections you want, download a single concatenated
  file with your color baked in, and restore an exact selection later from the
  config comment written into the file.

## Usage

Link the stylesheets in numbered order — `00-header` and `01-styles` define the
design tokens everything else depends on, so they come first:

```html
<link rel="stylesheet" href="css/00-header.css" />
<link rel="stylesheet" href="css/01-styles.css" />
<link rel="stylesheet" href="css/02-color-schemes.css" />
<!-- …through… -->
<link rel="stylesheet" href="css/34-reduce-motion.css" />
```

See `index.html` for the full list. Or visit the
[demo](https://jon49.github.io/css/), pick a color, choose your sections, and
click **Download CSS** to get a single pre-configured bundle.

## Customizing colors

Override the accent properties on `:root`:

```css
:root {
  --accent-h: 250;    /* hue, 0–360 */
  --accent-c: 0.08;   /* chroma, 0–0.3 */
  --accent-l: 0.83;   /* base lightness, 0–1 */
}
```

The primary palette is derived from these for both light and dark schemes; see
the `<style>` block in `index.html` for the exact `oklch()` rules.

## Project layout

```
css/          One stylesheet per Pico section (00–34)
index.html    Live demo, color picker, and CSS builder
```

## License

MIT — see `LICENSE`. Pico CSS is © 2019–2025 and licensed under MIT.
