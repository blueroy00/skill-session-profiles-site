# Design System

## Direction

A calm, product-led marketing site inspired by the clarity and whitespace of
OpenAI's public web presence without reproducing its branding. Real application
screenshots carry the visual story. The application icon and Command Blue
provide the distinct product identity.

## Theme

The site supports light and dark modes at the page root. The default follows
the operating system, and a manual toggle persists the visitor's choice.

## Color

Use semantic OKLCH tokens.

- Canvas: neutral off-white in light mode, near-black in dark mode.
- Surface: a subtle neutral step away from the canvas.
- Ink: high-contrast neutral.
- Muted ink: minimum WCAG AA contrast for body-size text.
- Command Blue: derived from the app's `#1f5f9d` brand color.
- Command Blue hover: a darker or lighter tonal step based on theme.
- Hairline: neutral border used only to organize real content.

The palette is restrained. Command Blue is the only accent.

## Typography

Use a system grotesk stack led by `Avenir Next` when available, then the
platform UI sans-serif. Use one family with committed scale and weight contrast.
Headlines use normal letter spacing and balanced wrapping. Body copy stays under
70 characters per line.

## Shape

- Buttons: 6px radius.
- Media frames: 8px radius.
- Inputs and interactive controls: 6px radius.
- Sections remain unframed and full width.

## Layout

- Maximum content width: 1440px.
- Desktop navigation height: 68px.
- Hero stays within the initial viewport and leaves the next section visible.
- Desktop compositions can be asymmetric.
- Layouts collapse to a strict single column below 768px.
- Section rhythm alternates between media-led, typographic, sequential, and
  interactive layouts.

## Imagery

Only use real Skill Session Profiles assets:

- The application icon and logo.
- Current Chinese and English application screenshots.
- Screenshot crops derived from those same source images.

Do not construct fake product UI.

## Motion

Motion intensity is restrained. Use one page-load reveal, subtle image
transitions, and direct hover or active feedback. All animation is disabled or
reduced under `prefers-reduced-motion`.

## Components

- Sticky navigation with language and theme controls.
- Full-bleed hero with real application screenshot.
- Product screenshot gallery with accessible tabs.
- Three-part workflow sequence.
- Native disclosure-based FAQ.
- Solid Command Blue final action section.

## Content

Chinese is the default locale, with complete English translations. Visible copy
uses plain sentences, concrete verbs, and no invented adoption metrics.
