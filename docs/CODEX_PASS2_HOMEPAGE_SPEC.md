# CODEX_PASS2_HOMEPAGE_SPEC.md

## Task Summary

Update the homepage content only.

Primary file:

- `index.html`


Do not edit:

- `work-single.html`
- CSS files
- JS files
- images
- fonts

Only edit CSS if the homepage visually breaks and the fix is small.

## Goal

Replace the remaining Nathan/template content with truthful Rober Toro portfolio content.

The homepage should feel like a portfolio for a UI/UX designer applying to product, e-commerce, and digital design roles — not a generic freelancer sales page.

## Target Homepage Structure

Keep the template structure but change the content:

1. Header
2. Hero
3. Marquee strip
4. About
5. Working Strengths / Skills
6. Capabilities
7. Impact Snapshot
8. Selected Work
9. Contact / Let's Talk
10. Footer

Remove or replace all visible template leftovers.

## 1. Page Title and Metadata

Change:

```html
<title>Nathan Website Designer</title>
```

To:

```html
<title>Rober Toro — UX/UI Designer</title>
```

Add or update meta description:

```html
<meta name="description" content="E-commerce-focused UX/UI Designer based in Osaka, Japan, working across Shopify, CMS, frontend implementation, localization, visual systems, and cross-cultural digital product support.">
```

## 2. Header

Replace logo text:

```text
Nathan
```

With:

```text
Rober Toro
```

Logo link:

```text
#section-intro
```

Navigation should be:

- Home → `#section-intro`
- Work → `#my_works`
- About → `#who_i_am`
- Capabilities → `#what_i_do`
- Contact → `#hire_me`

Header button:

```text
Download CV → assets/docs/rober-toro-cv.pdf
```

Do not use visible "Hire Me" language.

If the CV file does not exist yet, keep the link and add:

```html
<!-- TODO: Add CV file at assets/docs/rober-toro-cv.pdf -->
```

## 3. Hero

Replace the current hero headline with:

```text
E-commerce-focused UX/UI Designer bridging design, content, frontend implementation, and cross-cultural product communication.
```

Replace the current subheadline / h4 with:

```text
I’m Rober Toro, a Lead UI/UX Designer based in Osaka, Japan. I work across e-commerce UX, product screens, Shopify/CMS implementation, localization, and visual systems — helping teams turn messy requirements into clear digital experiences across markets.
```

Add or keep a short capability line:

```text
E-commerce UX · UI Design · Shopify · Frontend · Content · Localization
```

Primary CTA:

```text
View Work → #my_works
```

Secondary CTA:

```text
Download CV → assets/docs/rober-toro-cv.pdf
```

Keep current image path for now:

```text
images/misc/5.webp
```

Update image alt:

```text
Portrait or visual placeholder for Rober Toro portfolio
```

## 4. Marquee Strip

Replace every service item in both marquee strips with:

- E-commerce UX
- UI Design
- Shopify
- CMS
- Frontend Implementation
- Design Validation
- SEO / Content
- Localization
- Cross-cultural Design
- Visual Systems
- Product Support

Remove:

- Back-end Development
- Generic Social Media Integration

## 5. About Section

Change section title:

```text
About
```

Replace template paragraphs with:

Paragraph 1:

```text
I’m a hands-on UX/UI designer with a background that sits between product design, e-commerce, frontend implementation, and visual communication.
```

Paragraph 2:

```text
In my current role, I work across Shopify storefronts, CMS content, UI improvements, performance checks, localization, campaign visuals, and design-to-dev communication. I’m strongest when a project needs both design judgment and practical execution.
```

Paragraph 3:

```text
Because I come from the West, lived in China, and now design in Japan, I pay close attention to how culture affects digital products — from visual priorities and workflow expectations to communication style and decision-making. I often help bridge those gaps between clients, users, and international teams.
```

Tone should be confident, honest, and not inflated.

## 6. Working Strengths / Skill Bars

Current template skills are:

- HTML
- CSS
- Bootstrap
- JavaScript
- PHP
- React

Replace them with:

- UI Design — 90%
- E-commerce UX — 85%
- Shopify / CMS — 85%
- HTML / CSS — 80%
- Localization — 85%
- Design-to-dev Handoff — 80%

Remove:

- PHP
- React
- Backend-heavy language

If there is a heading or nearby label, use:

```text
Working Strengths
```

or:

```text
Toolbox
```

## 7. Capabilities Section

Change title:

```text
Capabilities
```

Replace the ten template service cards with these six cards.

### Card 1

Title:

```text
E-commerce UX
```

Body:

```text
Improving product pages, mobile shopping flows, navigation, content structure, and storefront usability.
```

### Card 2

Title:

```text
UI & Visual Design
```

Body:

```text
Creating polished interfaces, campaign visuals, product graphics, 3D mockups, and brand-aligned digital assets.
```

### Card 3

Title:

```text
Shopify / CMS Implementation
```

Body:

```text
Building and adjusting storefront templates, CMS sections, product content, and responsive page layouts.
```

### Card 4

Title:

```text
Frontend Support
```

Body:

```text
Using HTML, CSS, JavaScript, and Shopify Liquid to bridge design intent with real implementation constraints.
```

### Card 5

Title:

```text
Localization & Cross-cultural Communication
```

Body:

```text
Adapting product language, UX writing, SEO content, and design communication across teams, markets, and cultural expectations.
```

### Card 6

Title:

```text
Design Validation & Handoff
```

Body:

```text
Checking design-to-development output, documenting decisions, preparing specs, and coordinating with developers and stakeholders.
```

Remove:

- Back-end Development
- Generic Website Audits if not needed
- Generic Social Media Integration
- Generic freelancer-style "Custom Website Design" wording

## 8. Fake Counters → Impact Snapshot

Replace fake counters:

- 8240 Hours of Works
- 315 Projects Done
- 250 Satisfied Customers
- 32 Awards Winning

With four real impact cards.

### Card 1

Headline:

```text
3.2s → 1.8s
```

Body:

```text
Improved LCP performance for Yogibo Singapore.
```

### Card 2

Headline:

```text
+15–22%
```

Body:

```text
Order uplift contribution through Shopify UX and performance improvements.
```

### Card 3

Headline:

```text
+25–35%
```

Body:

```text
Organic click growth through localization and SEO support.
```

### Card 4

Headline:

```text
Global teams
```

Body:

```text
Collaborated across Japan, Singapore, China, India, New Zealand, and London/UK team contexts.
```

Use “contribution” and “support” where appropriate. Do not imply that Rober alone caused every metric.

## 9. Selected Work

Change section title:

```text
Selected Work
```

Replace the six fake project cards with four real project cards.

All links can temporarily point to:

```text
work-single.html
```

Do not create new pages in this pass.

### Project 1

Title:

```text
Yogibo Singapore
```

Category:

```text
E-commerce UX · Shopify · Digital Growth
```

Year:

```text
2023–Present
```

Image:

```text
images/works/1.webp
```

Alt:

```text
Yogibo Singapore e-commerce UX case study
```

### Project 2

Title:

```text
ROBODACHI / Planet of Robots
```

Category:

```text
Product Concept · Mobile UI · Visual System
```

Year:

```text
2023–2024
```

Image:

```text
images/works/2.webp
```

Alt:

```text
ROBODACHI mobile product concept and visual system
```

### Project 3

Title:

```text
Futureverse JP Localization
```

Category:

```text
Localization · Onboarding · GTM
```

Year:

```text
2024–2025
```

Image:

```text
images/works/3.webp
```

Alt:

```text
Futureverse Japanese localization and onboarding work
```

### Project 4

Title:

```text
Supporting Product Work
```

Category:

```text
PoC · Service Design · Branding
```

Year:

```text
2020–2025
```

Image:

```text
images/works/4.webp
```

Alt:

```text
Supporting product, service, and visual design work
```

Remove the remaining two cards.

Remove visible template project names:

- Adidas
- WWF
- Honda
- Uniqlo
- Playstation
- Wilson

## 10. Contact Section

The section id can remain:

```text
#hire_me
```

This avoids breaking existing template anchors.

But visible text must not say “Hire Me.”

Visible section title:

```text
Let’s Talk
```

Copy:

```text
Have a role, project, or product challenge where my background could help? I’m open to UI/UX, product design, e-commerce, localization, and digital product roles in Japan.
```

Buttons:

- Email Me → `mailto:rober24.95@gmail.com`
- LinkedIn → `https://www.linkedin.com/in/rober-toro-802953189/`
- Download CV → `assets/docs/rober-toro-cv.pdf`

Do not add:

- GitHub link
- Contact form
- Phone number
- Birth date
- reCAPTCHA
- form.js

## 11. Footer

Footer links:

- Email → `mailto:rober24.95@gmail.com`
- LinkedIn → `https://www.linkedin.com/in/rober-toro-802953189/`

Footer text:

```text
© 2026 Rober Toro. Portfolio built with a customized static HTML template.
```

If template license requires credit, add discreet text:

```text
Template base by Designesia.
```

Do not include:

- GitHub
- Facebook
- Twitter
- Instagram

## 12. Cleanup Checks

After editing, verify:

- No visible “Nathan” remains
- No visible “Adidas” remains
- No visible “WWF” remains
- No visible “Honda” remains
- No visible “Uniqlo” remains on homepage
- No visible “Playstation” remains
- No visible “Wilson” remains
- No visible “Back-end Development” remains
- No visible “PHP” remains
- No visible “React” remains
- No visible “Hire Me” remains
- No visible public GitHub link remains
- No fake counters remain
- No blog section exists
- No reCAPTCHA script is referenced
- No form.js script is referenced
- Header links work
- Contact links work
- LinkedIn link works
- Email link works
- The page still loads with css/, js/, images/, fonts/

## Report Required

After completing the pass, report:

1. Files changed
2. Sections changed
3. Missing assets or broken links
4. Anything that needs Rober’s review
