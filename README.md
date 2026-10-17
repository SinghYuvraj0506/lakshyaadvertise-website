# Lakshya Advertise website

Portfolio site for Lakshya Advertise (offset and digital printing, Okhla, Delhi). React 18 + Vite.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Deploy on Vercel

Import the repo in Vercel. The Vite preset is detected automatically (build command `npm run build`, output directory `dist`).

## Editing content

- Text, services, plans and contact details: `src/App.jsx` (constants at the top, e.g. `PHONE_DISPLAY`, `WHATSAPP`, `SERVICES`, `PLANS`).
- Styling and animations: `src/styles.css`. The accent colour is `--accent` in `:root`.
- Photos: `public/images/`.
- Portfolio tiles are drawn illustrations (`WorkArt` in `src/App.jsx`). Replace them with real job photos when available.
- Placeholders still to fill: street address and opening hours in the contact section.
- The quote form opens WhatsApp with the details pre-filled.
