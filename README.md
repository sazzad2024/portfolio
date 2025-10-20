## Deploy to Vercel

1. Install Vercel CLI (one time):

```bash
npm i -g vercel
```

2. From this folder, run login and deploy:

```bash
vercel login
vercel --prod
```

This project uses `@vercel/static-build` with `dist` as the output directory. The build command is `vite build` (also exposed as `vercel-build`).


