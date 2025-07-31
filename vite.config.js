import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const redirectPlugin = {
  name: 'redirect-trailing-slash',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (
        req.url === '/portfolio' ||
        req.url.startsWith('/portfolio?')
      ) {
        res.writeHead(301, { Location: '/portfolio/' });
        res.end();
        return;
      }
      next();
    });
  },
};

export default defineConfig({
  build: {
    outDir: "docs", // 👈 GitHub Pages requires /docs or / (root)
  },
  plugins: [react(), redirectPlugin],
  base: '/portfolio/',
  server: {
    port: 5173,
    open: true,
  },
})
