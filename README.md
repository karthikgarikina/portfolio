# Karthik Garikina — Portfolio

Personal portfolio site: hero, skills narrative, projects, experience, education, tech stack grid, contact form, and footer.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 6
- [AOS](https://michalsnik.github.io/aos/) (scroll animations)
- Plain CSS (existing design preserved)
- [Font Awesome](https://fontawesome.com/) (CDN)
- [Google Fonts](https://fonts.google.com/) (CDN)

## Live site

Add your deployed URL here after you publish (for example Vercel or Netlify).

## Local setup

1. **Node.js** — Use a current LTS version (18+).

2. **Images** — Keep a `dataset` folder at the project root with the same files as before (for example `my-img.png`, `karthik web copy.jpg`, project screenshots, `iship.jpg`, etc.). Vite picks these up when you build; paths in CSS are `/dataset/...`.

3. Install and run:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

**Production build:**

```bash
npm run build
npm run preview
```

## Project layout

- `src/App.jsx` — Root layout and AOS init
- `src/components/` — Section components
- `src/index.css` — Global styles (same look as the original static site)
- `index.html` — Vite HTML shell, fonts, Font Awesome
- `dataset/` — Local images used by CSS and the favicon
