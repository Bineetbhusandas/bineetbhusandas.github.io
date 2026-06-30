# Portfolio Website — Deploy & Use Guide

A fast, modern, recruiter-optimized single-page portfolio (pure HTML/CSS/JS — no build step, no cost).

## Files
- `index.html` — the page (content + SEO meta tags)
- `style.css` — styling (dark, professional, responsive)
- `script.js` — small interactions (mobile menu, scroll animations)
- `assets/Bineetbhusan_Das_Resume.pdf` — the downloadable resume (auto-copied from the Product resume)

---

## A) Preview locally (optional)
Just double-click `index.html` — it opens in your browser. No server needed.

---

## B) Host it FREE on GitHub Pages (15 minutes)

> Your live URL will be: **https://bineetbhusandas.github.io** (because your username is `Bineetbhusandas`).

### Step 1 — Create the special repo
1. Go to github.com → **New repository**.
2. Repository name **must be exactly**: `bineetbhusandas.github.io` (all lowercase, your username + `.github.io`).
3. Set **Public**. Don't add a README (we'll push our own). Create repository.

### Step 2 — Push the portfolio files
Open a terminal in the `portfolio` folder and run:
```powershell
cd "C:\PSABDP\SMART_NAV_REPO\Career-Transition-Agent\portfolio"
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/Bineetbhusandas/bineetbhusandas.github.io.git
git push -u origin main
```
> If git asks you to sign in, use your GitHub login / a Personal Access Token.

### Step 3 — Turn on Pages
1. In the repo → **Settings** → **Pages**.
2. Under "Build and deployment", Source = **Deploy from a branch**; Branch = **main** / **/ (root)** → Save.
3. Wait ~1–2 minutes. Refresh — your site is live at **https://bineetbhusandas.github.io**.

### Step 4 — (Recommended) Custom domain later
A `bineetdas.dev` or `.com` (~₹800–1,200/yr) looks even more premium. Optional — the `.github.io` URL is perfectly fine to start.

---

## C) Update the site later
Edit any file, then:
```powershell
cd "C:\PSABDP\SMART_NAV_REPO\Career-Transition-Agent\portfolio"
git add .
git commit -m "Update content"
git push
```
Changes go live in ~1 minute.

---

## D) HOW THIS HELPS YOU GET HIRED

A portfolio is a **credibility multiplier** — it turns "claims on a resume" into "proof a recruiter can see in 20 seconds."

**1. It makes you look senior and serious.** Most candidates only send a PDF. A clean live site signals
ownership, communication skill, and that you care about your craft — exactly what senior roles want.

**2. It improves your Google footprint.** The SEO meta tags mean recruiters searching *"Bineetbhusan Das
Java"* find YOU, on YOUR terms — not a random profile.

**3. It's your single link everywhere.** One URL that contains your pitch, skills, projects, and resume
download. Put it in:
- LinkedIn **headline/Featured/Contact info** and the **Website** field.
- Naukri & Instahyre profile (Online Profile/links).
- The top of your **resume** (add `Portfolio: bineetbhusandas.github.io`).
- Your **email signature** and cold outreach messages.

**4. It controls the narrative.** Recruiters see your strongest framing first: millions of events/day,
reusable frameworks, Module/Tech Lead, zero critical defects.

---

## E) HOW TO USE IT TO ATTRACT RECRUITERS (action list)

1. **Add the link to your resume header** and regenerate the PDFs (one line: `Portfolio: bineetbhusandas.github.io`).
2. **Put it in your LinkedIn** "Featured" section + the Website/Contact field. Pin it.
3. **Cold-DM recruiters** with it:
   > *"Hi [Name], I'm a Java backend engineer (4.5+ yrs, Spring Boot + AWS + microservices). Quick snapshot of my work: bineetbhusandas.github.io. Open to Senior SE roles — would love to connect."*
4. **Comment/post on LinkedIn** with a link back to a project — drives profile + portfolio visits.
5. **Use it in applications** wherever there's a "Portfolio/Website" field — many ATS forms have one.
6. **Keep it current** — update the projects as you ship new things; recency signals an active engineer.

> Pro tip: When a recruiter calls, say *"I've also put a short portfolio together at
> bineetbhusandas.github.io if it's useful."* It almost always impresses and differentiates you.

---

## F) Privacy note
The site intentionally shows **email + LinkedIn + GitHub only** — no phone number or DOB (good practice for
a public page). Recruiters reach you via email/LinkedIn, then you share your number directly.
