# Proverba

Proverba is a static landing page hosted at `https://proverba.buildwizai.com` that invites early adopters to join the app’s founding circle. The site highlights the product story, showcases social proof, and captures email sign-ups through Netlify Forms.

## Project Layout
- `landing.html` – primary marketing page with inline CSS, logo hero, and Netlify form.
- `thank-you.html` – confirmation screen shown after successful submissions.
- `assets/` – brand visuals including `proverba-logo.svg`, `favicon.svg`, and social preview artwork.
- `prd.md` – product requirements document outlining vision and feature roadmap.
- `AGENTS.md` – contributor guidelines for coding style, testing, and Netlify workflow.
- `netlify-email-collection-plan.md` – reference notes for the Netlify form setup.
- `privacy-policy.html` – GDPR-aligned privacy notice and consent recordkeeping details.

## Local Preview
```bash
python3 -m http.server 8000
```
Visit `http://localhost:8000/landing.html` (and `/thank-you.html`) to verify layout changes.

## Form Handling
Netlify scans `landing.html` for the `subscribe` form (`data-netlify="true"`). Deploying the site via Netlify automatically enables email capture and redirects visitors to `thank-you.html` after submission.

The form includes two required checkboxes (`consent_privacy`, `consent_marketing`) to document user approval for data processing under EU GDPR and for marketing communications.

To test the integration locally with Netlify CLI:
```bash
netlify dev
```
Submissions appear under the **Forms → subscribe** section in the Netlify dashboard.

## Deployment Notes
- No build step is required; publish the repository root.
- Add Open Graph/Twitter metadata values by hosting `assets/proverba-social-card.svg` at the default path or updating the meta tags if you move assets.
- Configure notifications or downstream automations (Zapier, Make, Airtable) in Netlify to route new sign-ups.
- DNS currently points `proverba.buildwizai.com` to the live site; inbound privacy and support requests go to `buildwizai@gmail.com`.

## License
This codebase is proprietary and not open source. Copyright © 2024 Proverba.
