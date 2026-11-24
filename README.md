# Yusuf Vhora — Portfolio

A React + Tailwind CSS portfolio for a Full Stack Web Developer (Laravel & PHP), built with dark/light mode, scroll-reveal animations, animated stats, a typing hero, a filterable project grid, and a git-log-styled experience timeline.

## Tech stack
- React 19 + Vite
- Tailwind CSS v4
- CSS + IntersectionObserver-based scroll reveal (no heavy animation library)
- react-icons

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed. Check with:
```bash
node -v
```

Then, inside the `portfolio` folder:
```bash
npm install
npm run dev
```
Open the URL it prints (usually `http://localhost:5173`).

## 2. Edit your content

Everything text-based — your name, bio, skills, projects, experience, education, certificates, and contact info — lives in one file:
```
src/data/content.js
```
Edit the values there; every section updates automatically. No need to touch component files unless you want to change layout or styling.

To change your photo, replace:
```
src/assets/profile.jpg
```
(keep the same filename, or update the import in `src/components/Hero.jsx`).

To replace the résumé that the "Resume" button downloads, replace:
```
public/resume.pdf
```
A simple placeholder résumé matching your content is already included — swap in your real one.

## 3. Build for production
```bash
npm run build
```
This outputs a static site into `dist/`. Preview the production build with:
```bash
npm run preview
```

## 4. Push to GitHub

From inside the `portfolio` folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Yusufvhora2308/YOUR_REPO_NAME.git
git push -u origin main
```
(Create the empty repo on GitHub first, then copy its URL into the `git remote add` command above.)

## 5. Deploy for free (recommended: Vercel or Netlify)

**Vercel**
1. Go to vercel.com → New Project → Import your GitHub repo.
2. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. Deploy — you'll get a live URL to put on your resume and LinkedIn.

**Netlify**
1. Go to netlify.com → Add new site → Import from GitHub.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Deploy.

**GitHub Pages** (already configured in this project)
```bash
npm run deploy
```
This builds the site and pushes it to a `gh-pages` branch automatically. Then in your GitHub repo → Settings → Pages, set Source to "Deploy from a branch" → `gh-pages` → `/ (root)`.

Note: `vite.config.js` already has `base: '/Portfolio/'` set for this repo name. If you rename the repo, update that value to match.

## Project structure
```
src/
  assets/           → profile photo
  components/       → one file per section (Hero, About, Skills, Projects, ...)
  data/content.js   → all editable content in one place
  hooks/            → theme toggle + scroll-reveal logic
  App.jsx           → wires all sections together
public/
  resume.pdf        → downloadable résumé (replace with your real one)
```

## Notes
- The contact form opens a pre-filled email to you — no backend needed. If you'd rather receive submissions directly, wire it up to a service like Formspree or EmailJS inside `src/components/Contact.jsx`.
- Project cards link to your GitHub profile by default — update each project's `github` field in `content.js` once you have individual repo links.
