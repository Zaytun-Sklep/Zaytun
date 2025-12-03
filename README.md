# ZAYTUN Halal Meat Shop

A production-ready e-commerce website for ZAYTUN Halal Meat Shop, built with Next.js and optimized for GitHub Pages.

## Features

- **Multilingual Support**: 13 languages supported (PL, EN, UK, RU, TR, AZ, TK, UZ, KK, KY, KA, FA, AR).
- **Theme System**: Automatic light/dark mode based on system preference + manual toggle.
- **Product Catalog**: Filterable product list with categories and search.
- **Shopping Cart**: Fully functional cart with simulated checkout.
- **Contact Page**: Integrated Google Maps and business information.
- **SEO Optimized**: Static export with semantic HTML and metadata.
- **Accessibility**: WCAG AA compliant contrast and structure.

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Actions -> GitHub Pages

## Getting Started

1. **Install Dependencies**:

    ```bash
    npm install
    ```

2. **Run Development Server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Build for Production**:

    ```bash
    npm run build
    ```

    The static output will be in the `out` directory.

4. **Run Lighthouse Audit**:

    Start the server first (`npm run start` or `npm run dev`), then:

    ```bash
    npm run lighthouse
    ```

## Translation

Translations are located in `src/i18n/locales/`.

- `pl.json` is the primary source.
- Other languages currently have placeholder content and require native speaker verification.
- Look for `REVIEW REQUIRED` comments in the JSON files.

## Deployment

This repository is configured to automatically deploy to GitHub Pages on push to the `main` branch via GitHub Actions.

1. Go to Repository Settings > Pages.
2. Select "GitHub Actions" as the source.
