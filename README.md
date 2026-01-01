# Ankit Kumar Srivastava - Portfolio

A modern, responsive portfolio website built with React and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 20.19+ or 22.12+)
- npm (comes with Node.js)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd ankit-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

#### Development Mode (Hot Reload)
```bash
npm run dev
```

This will start the development server. Open your browser and navigate to:
- **Local:** http://localhost:5173
- **Network:** The terminal will show the network URL if you want to test on other devices

The development server includes:
- ✅ Hot Module Replacement (HMR) - changes reflect instantly
- ✅ Fast refresh - React components update without losing state
- ✅ Error overlay - see errors directly in the browser

#### Production Build Preview
To test how the site will look when deployed:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

This will start a local server with the production build at http://localhost:4173

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (creates `dist` folder)
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## 🧪 Testing on Different Devices

### On Your Computer
1. Run `npm run dev`
2. Open http://localhost:5173 in your browser
3. Use browser DevTools (F12) to test responsive design:
   - Toggle device toolbar (Ctrl+Shift+M)
   - Select different device sizes

### On Mobile/Tablet (Same Network)
1. Run `npm run dev`
2. Find your local IP address:
   - **Windows:** `ipconfig` (look for IPv4 Address)
   - **Mac/Linux:** `ifconfig` or `ip addr`
3. Access from mobile: `http://YOUR_IP:5173`
   - Example: `http://192.168.1.100:5173`

### Using Browser DevTools
1. Open DevTools (F12 or Right-click → Inspect)
2. Click the device toolbar icon (or press Ctrl+Shift+M)
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

## 🎨 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling animations
- ✅ Mobile-friendly navigation
- ✅ Optimized images and assets
- ✅ Fast loading times
- ✅ SEO friendly

## 📱 Responsive Breakpoints

- **Mobile:** ≤ 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px - 992px
- **Large Desktop:** ≥ 993px

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## 📦 Project Structure

```
ankit-portfolio/
├── public/          # Static assets (images, resume)
├── src/
│   ├── components/  # React components
│   ├── data/        # Data files (experience, projects, skills)
│   ├── utils/       # Utility functions
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```

## 🔗 Links

- **Live Site:** https://lucifer7355.github.io/portfolio_react_vite/
- **GitHub Repo:** https://github.com/Lucifer7355/portfolio_react_vite

## 📄 License

© 2026 Ankit Kumar Srivastava. All rights reserved.

