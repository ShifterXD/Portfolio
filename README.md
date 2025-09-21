# Pavel Tagiev's Portfolio

A modern, interactive portfolio website built with Next.js 14, featuring a custom cursor, smooth animations, and a beautiful design system.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion + GSAP
- **Content:** MDX for blog posts
- **Fonts:** Inter (UI) + JetBrains Mono (code)

## Features

- ✨ Custom cursor with GSAP animations
- 🎨 Modern design with accent gradients
- 📱 Responsive layout with 3 breakpoints
- ♿ WCAG AAA contrast & reduced motion support
- 🚀 SSR-ready routes
- 📝 MDX blog with code highlighting
- 🎮 Interactive elements (3D card flips, magnetic buttons)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── (routes)/       # Page routes
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Additional styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

The site is configured for deployment on Vercel. Simply connect your repository and deploy:

```bash
npm run build
```

## License

MIT License - feel free to use this code for your own portfolio! 