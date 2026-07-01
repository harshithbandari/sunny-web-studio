# Sunny Web Studio — portfolio v2 (React + Vite + Tailwind)

## Run it on your computer
1. Install Node.js LTS from nodejs.org (one time).
2. Open this folder in VS Code.
3. Terminal -> New Terminal, then:
   npm install
   npm run dev
4. Open the local URL it prints (http://localhost:5173).

## Put your three demo sites inside
Copy your existing `irma/`, `rosys/`, `lalos/` folders (each with its index.html)
into the `public/` folder here. Vite ships everything in `public/` as-is, so the
"Learn more" links on the cards keep working at the same URLs.

## Deploy to GitHub Pages (automatic)
1. Push this folder to your `sunny-web-studio` repo (replace the old files).
2. On GitHub: Settings -> Pages -> Source: change to "GitHub Actions".
3. Every push to main now builds and publishes automatically
   (see .github/workflows/deploy.yml). First run takes ~2 minutes.
