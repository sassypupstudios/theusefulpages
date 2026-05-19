# The Useful Pages

A collection of free, fast, client-side web utilities at **theusefulpages.com**.

Built with plain HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build step, no dependencies, no backend.

---

## Site Structure

```
TheUsefulPages/
├── index.html                  # Homepage
├── word-unscrambler/index.html
├── password-generator/index.html
├── unit-converter/index.html
├── word-counter/index.html
├── lorem-ipsum/index.html
├── color-picker/index.html
├── css/shared.css              # Shared styles (ad zones, toast, animations)
├── js/shared.js                # Shared JS (dark mode, mobile menu, clipboard)
├── _redirects                  # Cloudflare Pages URL redirects
└── README.md
```

---

## Local Development

Since the pages use absolute paths (`/css/shared.css`, `/js/shared.js`), you need a local server — opening files directly in a browser (`file://`) will break shared assets.

**Option 1 — Python (built-in):**
```bash
cd TheUsefulPages
python -m http.server 8080
# Open http://localhost:8080
```

**Option 2 — Node `serve`:**
```bash
npx serve TheUsefulPages
```

**Option 3 — VS Code Live Server:**
Right-click `index.html` → Open with Live Server (set root to `TheUsefulPages/`).

---

## Adding Google AdSense

Each page has four ad placement zones with placeholder `<div>` elements and HTML comments marking the exact insertion point:

| Zone | Size | Location |
|------|------|----------|
| `top-banner` | 728×90 leaderboard | Below nav |
| `sidebar-rectangle` | 300×250 | Desktop sidebar (×2) |
| `mid-tool` | Responsive | Between tool sections |
| `footer-banner` | 728×90 leaderboard | Above footer links |

**Steps:**
1. Sign up at [Google AdSense](https://adsense.google.com) and get your publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`).
2. In every `<head>`, uncomment and update:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
3. Replace each `<div class="ad-placeholder">Advertisement · …</div>` with your AdSense ad unit code:
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```

---

## Adding Google Analytics

In every `<head>`, uncomment and update the two GA4 blocks:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Replace `G-XXXXXXXXXX` with your Measurement ID from Google Analytics 4.

---

## Cloudflare Pages Deployment

1. Push this repo to GitHub (or GitLab).
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com).
3. Click **Create a project** → Connect to Git → select your repo.
4. Configure the build:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `TheUsefulPages`
5. Click **Save and Deploy**.
6. Add your custom domain (`theusefulpages.com`) under **Custom Domains**.

The `_redirects` file handles clean URL trailing-slash redirects automatically.

---

## Performance Notes

- **Tailwind CDN** (~300KB, cached globally by CDN) is used for simplicity. For production optimization, run the Tailwind CLI build to generate only the CSS classes used:
  ```bash
  npx tailwindcss -i ./css/input.css -o ./css/tailwind.min.css --minify
  ```
  Then replace the `<script src="https://cdn.tailwindcss.com">` tag with `<link rel="stylesheet" href="/css/tailwind.min.css">`.

- **Word Unscrambler** fetches a ~4.5MB dictionary on first use, cached in `localStorage` for 7 days. Subsequent loads are instant.

- **Inter font** is loaded from Google Fonts. For maximum performance, self-host it using [google-webfonts-helper](https://gwfh.mranftl.com).

---

## Future Tool Ideas

- **Base64 Encoder/Decoder** — encode and decode Base64 strings
- **URL Encoder/Decoder** — encode special characters for URLs
- **JSON Formatter** — pretty-print and validate JSON
- **Markdown Previewer** — live Markdown to HTML preview
- **QR Code Generator** — generate QR codes from any URL or text
- **Regex Tester** — test regular expressions with live match highlighting
- **Timestamp Converter** — Unix timestamps to human-readable dates
- **Diff Checker** — compare two blocks of text side by side
- **CSS Gradient Generator** — visual CSS gradient builder
- **Image Resizer** — client-side image resize and convert

---

## Branding

- **Site name:** The Useful Pages
- **Powered by:** [Sassy Pup Studios](https://sassypupstudios.com)
- **Color accent:** Indigo (`#4F46E5`) on homepage; each tool has its own accent color
- **Font:** Inter (Google Fonts)
- **Dark mode:** Supported, respects system preference, toggle persisted in `localStorage`
