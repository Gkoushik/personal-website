# Personal Website

A modern, responsive personal website built with React.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Contact form
- Project showcase
- Social media links
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The website will be available at `http://localhost:3000`.

## Deployment

This website is configured for deployment on GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json` to your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/personal-website"
```

2. Install gh-pages:
```bash
npm install --save gh-pages
# or
yarn add gh-pages
```

3. Add the following scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
# or
yarn deploy
```

## Customization

1. Update personal information in the respective components:
   - `src/components/About.js`
   - `src/components/Projects.js`
   - `src/components/Contact.js`

2. Update social media links in `src/components/Contact.js`

3. Add your own projects in `src/components/Projects.js`

4. Customize colors and styles in the CSS files located in `src/styles/`

## License

This project is licensed under the MIT License - see the LICENSE file for details. 