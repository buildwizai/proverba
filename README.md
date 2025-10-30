# Proverba

[![Netlify Status](https://api.netlify.com/api/v1/badges/e73603a5-ab82-4434-8f0d-b2ec4a88d83a/deploy-status)](https://app.netlify.com/projects/proverba/deploys)

Proverba is a React single-page experience built with Vite, Tailwind CSS, and a Redux + Saga stack. It invites early adopters to join the app’s founding circle, surfaces the product story, and submits emails to Netlify Forms for onboarding.

## Project Layout
- `index.html` – Vite entry point and hidden Netlify form for static parsing.
- `src/App.jsx` – client-side routing for the landing, thank-you, and privacy policy pages.
- `src/pages/` – React pages (`Landing.jsx`, `ThankYou.jsx`, `PrivacyPolicy.jsx`) styled with Tailwind and utility helpers.
- `src/state/` – Redux reducer, saga, and store wiring for form submissions.
- `assets/` – static brand visuals (`proverba-logo.svg`, `favicon.svg`, social previews) copied during the Vite build.
- `netlify-email-collection-plan.md`, `prd.md`, `AGENTS.md` – existing product and workflow references.

## Getting Started
```bash
npm install
npm run dev
```
Visit `http://localhost:5173` to preview the SPA. Tailwind classes hot-reload via Vite.

## Form Handling
- The visible form lives in `src/pages/Landing.jsx`; in production we let the native POST reach Netlify Forms, while local dev (`npm run dev`) dispatches `submitFormRequest` to simulate success without a backend.
- `src/state/sagas.js` encodes the payload and would POST to Netlify (`/`) when running Netlify Dev or other integrations, keeping submissions registering under **Forms → subscribe**.
- A hidden static form in `index.html` keeps Netlify’s build-time parser aware of the `subscribe` schema (email + consent checkboxes + honeypot).

To emulate Netlify locally:
```bash
netlify dev
```
Confirm submissions in the Netlify dashboard and verify the Redux/Saga flow updates the thank-you route.

## Build & Deploy
```bash
npm run build
```
The command bundles to `dist/`. `netlify.toml` points Netlify at that output and configures an SPA redirect (`/* → /index.html`). Publish the repository root; Netlify installs dependencies, runs the Vite build, and serves `dist`.

## License
This codebase is proprietary and not open source. Copyright © 2024 Proverba.
