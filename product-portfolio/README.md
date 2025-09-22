# Rasmi Ranjan Patnaik - Product Manager Portfolio

A modern, responsive portfolio website built with React + TypeScript and Bootstrap, showcasing professional experience, projects, and case studies.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with React and optimized for speed
- 🎯 **SEO Optimized**: Meta tags and structured data for better search visibility
- 🧩 **Component-Based**: Modular architecture for easy maintenance
- 💼 **Professional Sections**:
  - Hero section with personal branding
  - About me with detailed background
  - Work portfolio with project showcases
  - Case studies with metrics and results
  - Professional footer with contact information

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The page will reload automatically when you make changes

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/           # React components
│   ├── Header/          # Navigation header
│   ├── Hero/            # Hero section with intro
│   ├── About/           # About me section
│   ├── Work/            # Portfolio/projects section
│   ├── CaseStudies/     # Case studies section
│   └── Footer/          # Footer with links
├── data/                # Static data and content
│   └── portfolio.ts     # Portfolio data (projects, case studies, etc.)
├── types/               # TypeScript type definitions
│   └── index.ts         # Type definitions for data structures
├── App.tsx              # Main app component
├── App.css              # Global styles
├── index.tsx            # App entry point
└── index.css            # Base styles
```

## Customization

### Adding Your Own Content

1. **Update Personal Information**
   - Edit `src/data/portfolio.ts` to add your projects, experience, and social links
   - Replace placeholder images in `public/images/`

2. **Modify Styling**
   - Update colors and themes in component CSS files
   - Modify global styles in `src/App.css` and `src/index.css`

3. **Add New Sections**
   - Create new components in `src/components/`
   - Import and add them to `src/App.tsx`

### Adding Images

1. Place your images in the `public/images/` directory
2. Reference them in your data files using `/images/filename.jpg`
3. Update the image paths in `src/data/portfolio.ts`

### Recommended Images

- **Hero Profile**: 400x400px professional headshot
- **About Workspace**: 500x400px workspace or lifestyle photo
- **Project Thumbnails**: 600x400px project screenshots
- **Case Study Images**: 400x300px case study visuals

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `npm run build` and deploy the build folder
- **Traditional Hosting**: Upload the `build` folder contents to your server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Rasmi Ranjan Patnaik - [rasmi@example.com](mailto:rasmi@example.com)

Project Link: [https://github.com/yourusername/product-portfolio](https://github.com/yourusername/product-portfolio)

---

Built with ❤️ using React + TypeScript + Bootstrap