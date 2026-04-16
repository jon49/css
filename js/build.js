// Build a single CSS bundle from every <link rel="stylesheet"> in document order.
// Rewrites the default --hue and --chroma in variables.css to the current picker values,
// then offers the result as a download.

const MANIFEST = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
  .map(l => l.getAttribute('href'))
  .filter(href => href && href.endsWith('.css'));

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed: ${url}`);
  return res.text();
}

function patchVariables(css, { hue, chroma }) {
  return css
    .replace(/--hue:\s*[\d.]+/, `--hue: ${hue}`)
    .replace(/--chroma:\s*[\d.]+/, `--chroma: ${chroma}`);
}

export async function buildBundle({ hue, chroma }) {
  const parts = await Promise.all(MANIFEST.map(async href => {
    const text = await fetchText(href);
    const patched = patchVariables(text, { hue, chroma });
    return `/* ===== ${href} ===== */\n${patched}`;
  }));
  return parts.join('\n\n');
}

export async function downloadBundle(opts) {
  const bundle = await buildBundle(opts);
  const blob = new Blob([bundle], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'css-framework.css';
  a.click();
  URL.revokeObjectURL(url);
  return bundle;
}

export { MANIFEST };
