# Terminal Portfolio Website

A modern, terminal-style portfolio website built with React.

## Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd PersonalWebsite
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

1. Start the development server:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

- `whoami` - Display name
- `cat role.txt` - Show current role
- `about` - Display about information
- `ls skills/` - List skills
- `cd ../projects/` - Show projects
- `cd interests/` - Show interests
- `ls commands/` - List all available commands

## Deployment

### Deploying to GitHub Pages

1. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

2. Add these scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Add homepage field to package.json:
```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```

4. Deploy:
```bash
npm run deploy
```

### Deploying to Netlify

1. Push your code to GitHub
2. Create a new site on Netlify
3. Connect to your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Deploy site

## Project Structure

```
src/
├── components/
│   ├── Content.js
│   ├── DotBackground.js
│   ├── InteractiveGraphic.js
│   └── Navbar.js
├── styles/
│   ├── Content.css
│   ├── DotBackground.css
│   ├── InteractiveGraphic.css
│   └── Navbar.css
└── App.js
```

## Technologies Used

- React
- CSS3
- JavaScript
- HTML5 