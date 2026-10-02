# Dastresi Next.js interface study

A responsive recreation of the Dastresi storefront, built by Yasamin Soraghi with Next.js, React, Tailwind CSS and Swiper. The interface is an educational frontend study and is not the official Dastresi website.

[Open the live demo](https://yasamin-e84.github.io/Dastresi-NextJS/)

## Highlights

- Responsive desktop and mobile headers, navigation and drawer
- Data-driven hero, categories, offers, product carousels, brands and articles
- Reusable React components for product and editorial sections
- RTL Persian layout with accessible image text and touch-friendly controls
- Static export configured for GitHub Pages

The page content is loaded at build time from `public/db.json`. This keeps the UI components independent from the sample catalog data and allows the deployed static site to work without a separate API server.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To verify the production export, run:

```bash
npm run build
```

The generated site is written to `out/`. `npm run deploy` publishes that directory to the `gh-pages` branch.

## Attribution

Product names, trademarks and source imagery belong to their respective owners. This repository is presented as a personal educational interface reconstruction, not as commissioned work or an official store implementation.
