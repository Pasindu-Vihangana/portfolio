# Pasindu Vihangana - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and interactive elements
- **Performance**: Optimized for fast loading and smooth performance
- **Accessible**: Built with accessibility in mind

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern CSS with animations and gradients
- **GitHub Pages** - Free hosting and deployment

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section with animated text
│   ├── About.jsx          # About section with timeline
│   ├── Skills.jsx         # Skills and technologies
│   ├── Projects.jsx       # Projects showcase with filtering
│   ├── Contact.jsx        # Contact form and information
│   ├── Footer.jsx         # Footer with links
│   └── *.css              # Component-specific styles
├── App.jsx                # Main app component
├── App.css               # Global styles
└── main.jsx              # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pasindu-vihangana/pasindu-vihangana.github.io.git
cd pasindu-vihangana.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Automatic Deployment

The project is set up to automatically deploy when you push to the main branch. The deployment process:

1. Builds the project using Vite
2. Deploys the `dist` folder to the `gh-pages` branch
3. GitHub Pages serves the content from the `gh-pages` branch

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Update name and description
- `src/components/About.jsx` - Update about content and experience
- `src/components/Skills.jsx` - Update skills and technologies
- `src/components/Projects.jsx` - Update projects
- `src/components/Contact.jsx` - Update contact information
- `src/components/Footer.jsx` - Update social links

### Styling

- Global styles are in `src/App.css`
- Component-specific styles are in their respective `.css` files
- Color scheme can be customized by updating CSS variables

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and building. Configuration is in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/pasindu-vihangana.github.io/', // GitHub Pages base path
})
```

### GitHub Pages

The project is configured for GitHub Pages deployment with:
- Base path set to repository name
- Build output in `dist` folder
- Automatic deployment via `gh-pages` package

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: pasindu@example.com
- **LinkedIn**: [Pasindu Vihangana](https://linkedin.com/in/pasindu-vihangana)
- **GitHub**: [@pasindu-vihangana](https://github.com/pasindu-vihangana)

---

Built with ❤️ using React and Vite
