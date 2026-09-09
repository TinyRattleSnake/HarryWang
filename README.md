# Harry Wang — Software Developer

My personal portfolio, featuring web application development and generative AI research.

[Visit the portfolio](https://tinyrattlesnake.github.io/HarryWang/)

## Selected projects

### Heritage Fire Watch

A GIS web application for cultural heritage fire vulnerability in Albany, Western Australia. UWA team capstone, with my role as Project Manager & Tech Lead.

React, TypeScript, Leaflet, Flask and PostgreSQL.

[Live application](https://heritage-fire-watch.vercel.app/) · [Repository](https://github.com/TinyRattleSnake/Fire-Vulnerability-App)

The live application requires sign-in and administrator approval.

### CloudNet

A pipeline for style-controllable indoor scene generation using Stable Diffusion, ControlNet and a custom Style IP-Adapter. Includes model training, generation, evaluation and ablation workflows.

Python, PyTorch, Hugging Face Diffusers, Accelerate and Slurm.

[Repository and experiments](https://github.com/CloudWang-UWA/CloudNet)

## Portfolio stack

React 19, TypeScript, Vite, Sass and Framer Motion. Automated checks use ESLint, Vitest and Testing Library; GitHub Actions deploys to GitHub Pages.

## Run locally

Requires Node.js 22.12 or later.

```bash
cd frontend_react
npm ci
npm run dev
```

## Checks and production build

From the frontend directory:

```bash
npm run lint
npm run typecheck
npm run test
npm run build -- --base=/HarryWang/
```

## Content

Project descriptions, links, skills and education are defined in `frontend_react/src/data/portfolio.ts`. Project images are served from `frontend_react/public/projects/`. The main content is local and does not require the Sanity workspace.

## Contact

[Email](mailto:harry.shudong.wang@gmail.com) · [LinkedIn](https://www.linkedin.com/in/harry-wang-9a6a27376/) · [GitHub](https://github.com/TinyRattleSnake)
