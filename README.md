# ArikDigital

A modern, single-page marketing website built with Angular 21 standalone components.

This project is focused on a polished landing-page experience with strong visual design, smooth section composition, and clear conversion paths.

## Tech Stack

- Angular 21 (standalone components)
- TypeScript 5.9
- Tailwind CSS 4 + custom global theme tokens
- Reactive Forms (contact form)
- npm (package manager)

## Features

- Modular section-based architecture
- Sticky navigation with smooth section scrolling
- Hero, clients, stats, services, process, pricing, team, contact, footer
- Dark visual theme with gradient accents
- Responsive layout for desktop and mobile

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

Open http://localhost:4200/

If port 4200 is already in use:

```bash
npm start -- --port 4201
```

## Available Scripts

- `npm start`: Run local dev server
- `npm run build`: Build production assets
- `npm run build -- --configuration development`: Build in development configuration
- `npm run watch`: Build in watch mode
- `npm test`: Run unit tests

## Project Structure

```text
src/
	app/
		app.ts
		app.html
		app.css
		components/
			navigation/
			hero/
			clients/
			stats/
			services/
			process/
			pricing/
			team/
			contact/
			footer/
	index.html
	styles.css
```

## Styling Notes

- Shared design tokens (colors, fonts, shadows) are defined in `src/styles.css`.
- Component-level styles live alongside each component.
- Tailwind utility classes are used heavily in templates for layout and spacing.

## Architecture

For a deeper architecture overview and conventions, see:

- `ARCHITECTURE.md`

## Build Output

Production/development builds are generated into:

- `dist/arik-digital`

## Contributing

1. Create a branch from `main`
2. Make your changes
3. Run build/tests locally
4. Open a pull request

## License

This project is private and maintained by RovitaTech.