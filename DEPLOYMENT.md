# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Repository**: Your repository should be named `username.github.io` (replace `username` with your GitHub username)
3. **Node.js**: Make sure you have Node.js installed (version 16 or higher)

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your repository is named correctly:
- If your GitHub username is `pasindu-vihangana`, your repository should be named `pasindu-vihangana.github.io`
- This naming convention is required for GitHub Pages to work properly

### 2. Update Configuration

The project is already configured for GitHub Pages deployment. The key configurations are:

**package.json**:
```json
{
  "homepage": "https://pasindu-vihangana.github.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/pasindu-vihangana.github.io/',
})
```

**Important**: Update the `homepage` URL and `base` path to match your GitHub username.

### 3. Install Dependencies

```bash
npm install
```

### 4. Test Locally

Before deploying, test your website locally:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see your website.

### 5. Build and Deploy

```bash
npm run deploy
```

This command will:
1. Build your project for production
2. Deploy the built files to the `gh-pages` branch
3. Make your website available at `https://username.github.io`

### 6. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 7. Wait for Deployment

GitHub Pages will automatically build and deploy your website. This usually takes a few minutes. You can check the deployment status in the "Actions" tab of your repository.

## Automatic Deployment

Once set up, your website will automatically deploy whenever you:

1. Push changes to the main branch
2. Run `npm run deploy`

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure your repository is named correctly (`username.github.io`)
2. **Build Errors**: Check the console for any build errors
3. **Styling Issues**: Make sure all CSS files are properly imported
4. **Routing Issues**: GitHub Pages doesn't support client-side routing by default

### Debugging

1. Check the GitHub Actions tab for build logs
2. Use browser developer tools to check for console errors
3. Verify that all assets are loading correctly

### Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your repository settings
2. Scroll to "Pages" section
3. Add your custom domain in the "Custom domain" field
4. Update your DNS settings to point to GitHub Pages
5. Update the `homepage` in `package.json` to your custom domain

## File Structure After Deployment

After deployment, your repository will have:

```
repository/
├── src/                    # Source code
├── dist/                   # Built files (local)
├── gh-pages/              # Deployed files (on gh-pages branch)
├── package.json
├── vite.config.js
└── README.md
```

## Performance Optimization

1. **Image Optimization**: Use optimized images (WebP format recommended)
2. **Code Splitting**: Vite automatically handles code splitting
3. **Caching**: GitHub Pages provides good caching by default
4. **CDN**: Consider using a CDN for better global performance

## Security

1. **HTTPS**: GitHub Pages automatically provides HTTPS
2. **No Sensitive Data**: Don't commit API keys or sensitive information
3. **Environment Variables**: Use environment variables for sensitive data

## Monitoring

1. **Analytics**: Consider adding Google Analytics or similar
2. **Performance**: Use tools like Lighthouse to monitor performance
3. **Uptime**: GitHub Pages has excellent uptime

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite documentation](https://vitejs.dev/)
3. Check the [gh-pages package documentation](https://github.com/tschaub/gh-pages)

---

Your portfolio website should now be live at `https://username.github.io`! 