# CODEX_PASS2_5_VISUAL_QA.md

## Purpose

Pass 2 updated the homepage content, but the rendered page now looks less publishable because some text is too long for the original Nathan template layout.

This pass is **Visual QA / Layout Diagnosis first**.

Do not immediately rewrite the page. First use the Browser plugin to inspect the rendered homepage and produce a short visual diagnosis.

## Required Browser Workflow

Use the Browser plugin / @Browser.

Open the local rendered homepage, preferably through a local server:

- `http://localhost:3000/index.html`
- or the local preview URL provided by VS Code Live Server
- or a file-backed preview if available

If no local server is running, ask Rober to run one from the repo root, for example:

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000/index.html
```

## Important

Do not judge only from source code. Inspect the rendered page.

Use the browser to:
- view the page
- scroll section by section
- inspect desktop layout
- inspect mobile or narrow viewport if available
- run read-only inspection JavaScript if useful
- detect overflow, awkward wrapping, spacing issues, and visual hierarchy problems

## Diagnosis First — No Edits Yet

Before editing, produce a report with:

1. Hero layout diagnosis
   - Is the headline too long?
   - Does it push the layout too far down?
   - Does it compete with the image?
   - Does it wrap awkwardly?

2. About section diagnosis
   - Is the 3-column text readable?
   - Is the cross-cultural story valuable but too dense?
   - Should it stay in About or become a smaller separate note?

3. Working Strengths diagnosis
   - Do the labels fit?
   - Do the percentage tags look credible?
   - Does the section feel useful or too artificial?

4. Capabilities diagnosis
   - Which cards overflow or feel broken?
   - Are titles too long?
   - Are body texts too long?
   - Should the fix be copy shortening, layout adjustment, or CSS?

5. Impact Snapshot diagnosis
   - Are the headline numbers understandable?
   - Are they too large for the meaning?
   - Do labels need context like “LCP,” “Orders,” or “Clicks”?
   - Is “Global Teams” visually working?

6. Overall layout diagnosis
   - What currently feels unpublishable?
   - What is acceptable for v1?
   - What should be fixed before moving to case pages?

7. Recommended fix strategy
   - Content-only fixes
   - Small HTML structure fixes
   - Small CSS fixes, limited to `css/09_custom.css` if needed

## Visual Fit Principles

Preserve the value of the content, but fit the template.

This template favors short, punchy text.

Use these guidelines:

### Hero

Hero headline should be short and memorable.

Preferred direction:

```text
E-commerce UX/UI Designer
```

Possible subcopy:

```text
I bridge design, content, Shopify/CMS implementation, and cross-cultural product communication for digital teams in Japan and abroad.
```

The cross-cultural story should not be forced into the giant headline.

### Cross-cultural Story

The story is valuable:

- Rober is Venezuelan-born
- lived in China
- uses and understands Chinese app/product ecosystems
- now designs in Japan
- has worked with teams across Japan, Singapore, China, India, New Zealand, and London/UK contexts

But this should be placed where it reads naturally:
- About section
- a short “Cross-cultural perspective” note
- or a capability card

Do not remove this idea entirely.

### Capability Cards

Titles should be short.

Preferred titles:

- E-commerce UX
- Visual Design
- Shopify / CMS
- Frontend Support
- Localization
- Design Handoff

Bodies should be concise and fit the card.

### Impact Snapshot

Impact headlines should be self-explanatory:

Preferred:

```text
LCP 1.8s
From 3.2s after performance improvements.
```

```text
Orders +15–22%
Contribution through UX and Shopify improvements.
```

```text
Clicks +25–35%
Organic growth from SEO/localization support.
```

```text
Global Teams
Japan, SG, CN, India, NZ, and UK collaboration.
```

## After the Diagnosis

Only after the diagnosis, ask whether to proceed with implementation.

If Rober says yes, implement the smallest safe changes needed to make the homepage publishable.

## Implementation Boundaries

If implementation is approved:

Allowed:
- Shorten copy
- Adjust section-level HTML inside affected homepage sections
- Make small CSS changes only in `css/09_custom.css`
- Preserve current visual identity
- Preserve approved positioning

Not allowed:
- Redesign the entire site
- Create case pages
- Edit `work-single.html`
- Add new frameworks
- Reintroduce GitHub public link
- Reintroduce “Hire Me” wording
- Reintroduce contact forms, PHP, reCAPTCHA, or `form.js`
- Invent metrics or claims

## Required Final Report

If edits are made, report:

1. Files changed
2. Visual issues fixed
3. Copy shortened or moved
4. CSS changes made
5. Remaining risks
6. Whether the homepage is now acceptable for v1
