---
name: Simple User Form
description: Utilitarian developer workbench for full-stack user registration and database status verification
colors:
  primary: "#2563eb"
  secondary: "#4b5563"
  telemetry-emerald: "#047857"
  telemetry-emerald-bg: "#ecfdf5"
  signal-crimson: "#b91c1c"
  signal-crimson-bg: "#fef2f2"
  neutral-ground: "#f3f4f6"
  neutral-surface: "#ffffff"
  neutral-text: "#1f2937"
  neutral-border: "#d1d5db"
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "12px"
spacing:
  xs: "6px"
  sm: "11px"
  md: "16px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.sm}"
    padding: "11px 16px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.sm}"
    padding: "11px 16px"
  card-container:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "11px"
  status-pill:
    backgroundColor: "{colors.neutral-ground}"
    rounded: "{rounded.sm}"
    padding: "12px"
---

# Design System: Simple User Form

## Overview

**Creative North Star: "The Developer Workbench"**

The Developer Workbench is a clean, utilitarian design system built for functional clarity, predictable feedback, and technical reliability. It prioritizes rapid task completion, unambiguous system health communication, and ergonomic form interactions over decorative excess.

Every element exists with explicit purpose: system state is rendered with high-contrast, universally understood color indicators, inputs maintain crisp tactile boundaries, and the focal content lives on a softly elevated canvas against a calm neutral ground.

**Key Characteristics:**
- Utilitarian clarity with zero ornamental distraction
- High-signal color channels for verified system states (emerald connected, crimson disconnected, cobalt primary)
- Softly floating structural surfaces with flat, tactile interactive controls
- Dual typography hierarchy pairing clean system sans-serif with monospace telemetry

## Colors

The palette is restrained and purposeful: a calm neutral foundation punctuated by authoritative cobalt for primary user actions, balanced with functional emerald and crimson telemetry signals.

### Primary
- **Cobalt Blueprint** (#2563eb): Primary interactive action color used for primary CTA submission buttons and active input focus indicators.

### Secondary
- **Slate Neutral** (#4b5563): Secondary action and utility button color for ancillary actions such as list refreshes and secondary operations.

### Tertiary
- **Telemetry Emerald** (#047857): Active system health status indicator, denoting verified Supabase connection and successful record persistence. Paired with Mint Wash (#ecfdf5) background tint.
- **Signal Crimson** (#b91c1c): System warning and alert indicator, denoting database disconnections, failed queries, or validation errors. Paired with Rose Wash (#fef2f2) background tint.

### Neutral
- **Soft Canvas Gray** (#f3f4f6): The overall page ground, providing subtle ambient contrast behind cards and unselected status blocks.
- **Pure White Surface** (#ffffff): Main workbench card container ground, giving high-contrast legibility to form fields and user records.
- **Graphite Charcoal** (#1f2937): High-contrast primary text color for headlines, labels, and readable body content.
- **Subtle Hairline Gray** (#d1d5db): Boundary stroke color for form inputs and subtle UI separators.

### Named Rules
**The Transparent State Rule.** System connection, sync, and submission states must always be immediately legible with dedicated color channels (emerald = verified connected, crimson = error/disconnected, cobalt = actionable).

## Typography

**Display Font:** system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
**Body Font:** system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace

**Character:** A dual hierarchy where human-readable narrative and forms rely on the native system UI font stack for zero-latency rendering, while technical metadata, queue numbers, and status telemetry employ monospace for technical precision.

### Hierarchy
- **Display** (700, 2rem / 32px, 1.25): Page title and primary workbench header.
- **Headline** (600, 1.5rem / 24px, 1.3): Section subheadings such as "Saved users".
- **Title** (600, 1.125rem / 18px, 1.4): Card group headers and modal prompts.
- **Body** (400, 1rem / 16px, 1.5): Standard descriptive guidance and list items (max length 65ch).
- **Label** (600, 0.875rem / 14px, 1.4): Form input labels, button text, and field headers.
- **Mono** (500, 0.875rem / 14px, 1.4): Telemetry status pills, database badges, code snippets, and queue counters.

### Named Rules
**The Legible State Rule.** Human-facing content uses system sans-serif for friction-free reading, while telemetry tags, queue counters, and system metrics employ monospace for precise alignment.

## Layout

The spatial model centers on a focused single-column workbench layout constrained to a maximum width of 680px with 48px vertical padding (`spacing.xl`) and 20px horizontal margin on viewport edges.

Form controls and field labels arrange in a vertical grid rhythm with 16px gap (`spacing.md`), ensuring clean vertical scanning and natural thumb targets on mobile devices.

## Elevation & Depth

Surfaces are predominantly flat and crisp. Depth is conveyed through a single softly diffused ambient drop shadow beneath the main workbench container, creating a distinct visual plane without heavy borders or multi-layered skeuomorphism.

### Shadow Vocabulary
- **Card Ambient** (`box-shadow: 0 8px 30px #00000012`): Ambient diffused elevation applied strictly to the primary white workbench card container.

### Named Rules
**The Flat Rest Rule.** Interactive controls (buttons, inputs) remain flat at rest; depth belongs solely to structural surfaces or active elevations.

## Shapes

The form language uses consistent, measured radii to balance approachable softness with engineering rigor:
- **Small Controls (6px, `rounded.sm`):** Buttons, form input fields, and status feedback pills.
- **Medium Containers (12px, `rounded.md`):** Main workbench card container.
- **Borders:** Crisp 1px solid hairline (`#d1d5db`) on inputs; cards rely on ambient shadow rather than heavy border strokes.

## Components

### Buttons
- **Shape:** Gently rounded corners (6px radius).
- **Primary:** Solid Cobalt Blueprint (#2563eb) background, pure white text, 11px 16px padding. Transitions to darker cobalt (#1d4ed8) on hover.
- **Secondary:** Slate Neutral (#4b5563) background, pure white text, 11px 16px padding. Transitions to darker slate (#374151) on hover.
- **Disabled State:** Opacity 0.6 with `cursor: wait` during network flight.

### Inputs / Fields
- **Style:** Pure white background, 1px solid hairline border (#d1d5db), 6px radius, 11px padding.
- **Focus:** Crisp focus boundary shifting to primary cobalt (#2563eb) with a subtle 3px focus ring wash (`rgba(37, 99, 235, 0.15)`).

### Cards / Containers
- **Corner Style:** 12px radius (`rounded.md`).
- **Background:** Pure white (#ffffff).
- **Shadow Strategy:** 0 8px 30px #00000012.
- **Internal Padding:** 32px (`spacing.lg`).

### Status Pills
- **Style:** Compact pill container, 6px radius, 12px padding.
- **Connected Variant:** Mint Wash background (#ecfdf5) with Telemetry Emerald text (#047857).
- **Disconnected Variant:** Rose Wash background (#fef2f2) with Signal Crimson text (#b91c1c).

## Do's and Don'ts

### Do:
- **Do** use 6px corner radius (`rounded.sm`) for buttons, text inputs, and status badges.
- **Do** pair status text colors (`#047857`, `#b91c1c`) with matching tinted background washes (`#ecfdf5`, `#fef2f2`) for high contrast and legibility.
- **Do** use `0 8px 30px #00000012` exclusively on primary structural cards.
- **Do** maintain a 680px centered max-width constraint for focused single-task flows.

### Don't:
- **Don't** introduce arbitrary saturated colors outside the defined cobalt, emerald, and crimson functional channels.
- **Don't** apply heavy drop shadows or glow effects to form inputs or buttons at rest.
- **Don't** obscure database connection health or form validation feedback.
- **Don't** use generic placeholders when descriptive label text is available.
