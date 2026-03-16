# derekengles.com

Personal brand and portfolio website for Derek Engles, founder of [Informative Media](https://www.informativemedia.com).

[derekengles.com](https://www.derekengles.com)

---

## Tech Stack

- HTML5 (semantic, static, no build step)
- CSS3 (vanilla, CSS custom properties, no frameworks)
- JavaScript (vanilla, minimal interactions)
- Fonts: Playfair Display (headings), Open Sans (body) via Google Fonts
- Deployment: Vercel
- DNS: GoDaddy
- Sitemap: manually maintained (`sitemap.xml`)

---

## Project Structure

```
derekengles.com/
├── css/
│   ├── styles.css          # Main stylesheet (variables, reset, all homepage sections, responsive)
│   └── about.css           # About page specific styles
├── images/
│   ├── founder_image.png   # Founder photo (hero + about sidebar)
│   ├── beverage_website.png
│   ├── bfyi-website.png
│   ├── rs-website.png
│   ├── st-website.png
│   ├── tech-stack.png
│   ├── tbc-book.png
│   ├── rs-book.png
│   ├── wf-book.png
│   ├── new-favicon.png
│   ├── new-social-card.png
│   ├── social-icon-1-ig.svg
│   ├── social-icon-2-tt.svg
│   ├── social-icon-3-li.svg
│   └── social-icon-4-git.svg
├── js/
│   └── main.js             # Smooth scroll, header scroll effect, utilities
├── index.html              # Homepage
├── about.html              # About page
├── robots.txt              # Crawl rules and sitemap reference
├── sitemap.xml             # Sitemap for search engines
├── vercel.json             # Vercel deployment configuration
└── README.md
```

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.html` | Hero, premier project, portfolio grid, full-stack section, books, CTA |
| `/about` | `about.html` | Bio, skills, quick facts sidebar, values grid |

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | #030901 | Header, footer, primary buttons, heading text |
| `--color-white` | #FFFFFF | Text on dark backgrounds |
| `--color-bg-main` | #fafafa | Page background |
| `--color-gray-light` | #f5f5f5 | Section backgrounds, cards |
| `--color-gray-medium` | #e8e8e8 | Borders, dividers |
| `--color-blue` | #004aad | Full-stack section, accent links |

### Typography

| Role | Font | Weights |
|------|------|---------|
| Headings | Playfair Display | 400, 700 |
| Body | Open Sans | 400, 600, 700 |

### Breakpoints

| Label | Range | Approach |
|-------|-------|----------|
| Mobile | below 768px | Default layout for most sections |
| Tablet | 768px to 1024px | Grid adjustments, column reductions |
| Desktop | 1025px and above | Full multi-column layouts |

Note: The hero section uses mobile-first (`min-width`) media queries while the remaining sections use desktop-first (`max-width`) queries.

---

## JavaScript

`main.js` initializes on `DOMContentLoaded` and runs three active modules:

1. Smooth scroll for anchor links (offset by sticky header height)
2. Header scroll effect (box shadow on scroll)
3. Dynamic copyright year update in footer

Scroll animations and lazy loading are defined but currently commented out.

---

## Contact

Derek Engles: derek@informativemedia.com

---

All content and code copyright 2026 Derek Engles. All rights reserved.