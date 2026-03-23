# Project: d’Market

## Product Vision
A high-integrity, mobile-first marketplace connecting Sub-Saharan informal traders with buyers. d'Market transforms local commerce into scalable digital trade through real-time discovery and intelligent matching.

## The "Trust Gap" Mission
The primary challenge is bridging two worlds:
1. **The Vibrant Market:** Must feel accessible, high-utility, and "human" for traders in Africa.
2. **The Institutional UK Investor:** Must feel professional, secure, and commercially rigorous to counter "regional risk" perceptions.

## Design & Brand DNA
- **Aesthetic:** "Institutional Vibrancy." Clean, spacious UK-style corporate layouts (think Stripe/Monzo) paired with high-quality imagery of real African commerce.
- **Typography:** Professional sans-serifs (Inter, Plus Jakarta Sans, or Cabinet Grotesk). Use strong weight hierarchy to establish authority.
- **Color Palette:** Trust-based primary colors (Deep Navy or Forest Green) with vibrant, energetic accents (Terracotta, Gold, or Teal) that reflect local markets.
- **Anti-Pattern:** Avoid "crypto-scam" aesthetics: no heavy gradients, no aggressive "Get Rich" copy, and no generic stock photos of people in suits.

## Tech Stack (Nuxt 4 / Vue 3)
- **Framework:** Nuxt 4 (Composition API, Script Setup).
- **Styling:** Tailwind CSS (Utility-first, no arbitrary values where theme variables exist).
- **Performance:** Mobile-first. Use `nuxt-img` for aggressive image optimization. Aim for 95+ Lighthouse scores.
- **Architecture:** - `components/base`: Atomic UI elements (Buttons, Inputs).
    - `components/landing`: Domain-specific sections (Hero, TrustStrip, ImpactCards).
    - `pages/index.vue`: Clean, high-level composition of components.

## Development Standards
- **Zero-Waste Code:** Minimize third-party library bloat. Use native Web APIs or Nuxt built-ins where possible.
- **Form Integrity:** All forms must have client-side validation, accessible labels (ARIA), and clear success/error states.
- **Copywriting Tone:** Premium, credible, and human. Commercially driven (social impact is a result of the business, not a charity project).
- **Asset Handling:** Always use descriptive alt-text and placeholders that specify the *vibe* of the required image (e.g., "High-res photo of a Lagos market trader using a smartphone, soft natural lighting").

## Quality Bar
"Does this look like a company with a £5m valuation?" If the answer is "maybe," the spacing is too tight, the font is too small, or the copy is too wordy.