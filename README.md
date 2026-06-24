# Lucas Lemos — Portfolio Webpage

Personal portfolio webpage with an animated 3D background, navigation menu, resume, and skills section.

Live at: [on0n0k1.github.io](https://on0n0k1.github.io)


## Tech Stack

- **React 19** with TypeScript
- **Three.js** — 3D animated background (floating cubes, birds, cube animation)
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility styling
- **react-transition-group** — menu and content transitions


## Getting Started

```bash
npm i             # Install dependencies
npm run dev       # Start dev server with hot reload
npm run build     # Build for production into docs/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```


## Directory Structure

```
.
├── docs/         # Production build output (served by GitHub Pages)
├── public/       # Static assets: models, textures, logos, favicon
└── src/
    ├── background/       # Three.js animated background
    │   ├── BirdAnimation/
    │   ├── CubeAnimation/
    │   ├── FloatingAnimation/
    │   ├── FrameCounter/
    │   └── systems/      # Renderer, camera, controls helpers
    ├── Content/          # Resume and skills sections
    │   └── codingSkills/
    ├── Menu/             # Navigation menu and dropdown
    ├── Icons/            # SVG icon components
    ├── hooks/            # Custom React hooks
    ├── other_functions/  # Shared utilities
    ├── styles/           # Global CSS and z-index variables
    ├── App.tsx
    └── main.tsx
```


## GitHub Pages

The `docs/` folder is the build output and is served directly by GitHub Pages from the `main` branch. After building, commit the updated `docs/` to deploy.


## License

MIT — see [LICENSE](LICENSE).