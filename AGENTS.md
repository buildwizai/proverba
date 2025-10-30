# Repository Guidelines

## Project Structure & Module Organization
- `landing.html` holds the full landing page markup and embedded styles; keep hero copy, pricing note, and form logic here unless you introduce a build step.
- `prd.md` captures product narrative and positioning; update it first when you adjust messaging so visual copy stays aligned.
- `thank-you.html` serves as the Netlify post-submission confirmation page; edit copy here when the onboarding flow evolves.
- `privacy-policy.html` documents GDPR compliance and the legal basis for processing; refresh effective dates and processors whenever data handling changes.
- Place any future assets under `assets/` (create if missing) and reference them with relative paths from `landing.html` to keep the root tidy.

## Build, Test, and Development Commands
- Preview locally with `python3 -m http.server 8000` and browse to `http://localhost:8000/landing.html`; this mirrors static hosting.
- Run a quick HTML sanity check via `npx htmlhint landing.html` if Node tooling is available; fix reported accessibility or structural issues before opening a PR.
- To validate Netlify form parsing locally, use `netlify dev` (requires Netlify CLI) to emulate submissions before deploying.

## Coding Style & Naming Conventions
- Follow the existing two-space indentation and keep inline CSS grouped by component (hero, features, testimonials) to ease scanning.
- Use semantic sectioning (`header`, `section`, descriptive classnames) and keep class names in lowercase with hyphens, mirroring the current pattern (`feature-card`, `impact-quote`).
- When adding scripts, wrap them in a `<script>` block at the end of `body` and namespace custom functions under `proverba` to avoid collisions.
- Maintain the Netlify form markup: keep `data-netlify`, `netlify-honeypot`, and the hidden `form-name` input intact so deployments continue to register the form.
- Preserve both required consent checkboxes (`consent_privacy`, `consent_marketing`) so submissions always carry explicit approval.

## Testing Guidelines
- Perform manual QA in the latest Chrome and Safari, plus one mobile viewport using responsive devtools, validating layout, gradients, and form behavior.
- Run copy/link checks: ensure all CTA anchors resolve, the email input retains focus styles, and the form copy matches `prd.md`.
- For structural validation, paste the rendered markup into the W3C HTML Validator and resolve any errors before merging.
- Submit the hero form once after deploying and confirm the entry appears under Netlify Forms → `subscribe`; export data before destructive changes.

## Commit & Pull Request Guidelines
- Use imperative commit subjects around 60 characters (e.g., `Refine feature grid spacing`); group related HTML/CSS tweaks together.
- Reference any tracking issue in the body, outline visual changes, and attach updated screenshots or GIFs taken from the local preview.
- For PRs, include a short testing checklist (browsers checked, validators run) so reviewers can confirm coverage at a glance.

## Netlify Forms & Email Collection
- Production builds rely on Netlify Forms; do not remove the hero form name (`subscribe`) or the honeypot field.
- Redirects land on `thank-you.html`; adjust its messaging instead of changing the form `action` unless you replace Netlify Forms entirely.
- Set up notifications or integrations (Zapier, Make, Airtable) from the Netlify dashboard so new submissions reach the growth stack without manual exports.
