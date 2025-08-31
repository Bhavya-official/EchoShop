# EchoShop

A modern, animated e‑commerce UI built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Features

- Animated hero, navbar, and product cards with Framer Motion
- App Router with pages: Home, Product detail, Cart
- Global cart state via Context + localStorage persistence
- Tailwind CSS styling with custom brand palette
- Remote images from Unsplash configured in `next.config.js`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Project Structure

- `app/` — App Router pages and layout
  - `layout.js` — Wraps UI with `CartProvider`, `Navbar`, `Footer`
  - `page.js` — Home with `Hero` and `ProductGrid`
  - `cart/page.js` — Cart page
  - `product/[slug]/page.js` — Product details
- `components/` — UI components (Navbar, Hero, ProductCard, ProductGrid, Footer)
- `context/CartContext.jsx` — Cart state and helpers
- `data/products.js` — Mock product data
- `lib/format.js` — Utilities
- `tailwind.config.js`, `postcss.config.js` — Styling config

## Notes

- This is a frontend demo (no backend). Hook up a real API or CMS as needed.
- Replace mock product images/data with your own.
