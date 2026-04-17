# Portfolio Font Structure Guide

## Font Families (CSS Variables)

```css
--font-h:   'Syne', sans-serif;              /* Headings & Bold Text */
--font-sub: 'Space Mono', monospace;          /* Subheadings & Subtitles */
--font-b:   'Inter', sans-serif;              /* Body Text & Default */
--font-ui:  'Space Mono', monospace;          /* UI Elements & Labels */
--font-num: 'Orbitron', sans-serif;           /* Numbers & Numeric Data */
--font-q:   'Playfair Display', serif;        /* Quotes & Display Text */
```

---

## Heading Sizes

| Element | Font Family | Size | Weight | Weight Value | Line Height | Usage |
|---------|-----------|------|--------|-------------|------------|-------|
| **h1** | `--font-h` (Syne) | clamp(3rem, 7vw, 4rem) | 800 | Bold | 1.2 | Main page heading |
| **h2** | `--font-h` (Syne) | clamp(2rem, 4.2vw, 2.25rem) | 700 | Bold | 1.3 | Section headings |
| **h3** | `--font-h` (Syne) | clamp(1.5rem, 3.2vw, 1.75rem) | 600 | Semibold | 1.4 | Subsection headings |
| **h4-h6** | `--font-h` (Syne) | 1.25rem, 1.125rem, 1rem | 600 | Semibold | 1.5 | Small headings |

---

## Body Text

| Element | Font Family | Size | Weight | Weight Value | Line Height | Letter Spacing | Usage |
|---------|-----------|------|--------|-------------|------------|-----------------|-------|
| **p, li** | `--font-b` (Inter) | 1rem (16px) | 400 | Regular | 1.7 | 0 | Standard paragraph text |
| **p strong** | `--font-b` (Inter) | 1rem | 600 | Semibold | 1.7 | 0 | Bold text within paragraphs |
| **a** | `--font-b` (Inter) | 1rem | 400 | Regular | 1.7 | 0 | Links |
| **code** | `--font-num` (Orbitron) | 0.9rem | 400 | Regular | 1.5 | 0 | Inline code |
| **pre** | `--font-num` (Orbitron) | 0.85rem | 400 | Regular | 1.6 | 0 | Code blocks |

---

## Hero Section Text

| Element | Font Family | Size | Weight | Weight Value | Letter Spacing | Text Transform | Usage |
|---------|-----------|------|--------|-------------|-----------------|-----------------|-------|
| **.hero-greeting** | `--font-b` (Inter) | 11px | 700 | Bold | 0.12em | uppercase | Greeting badge |
| **.hero-name** | `--font-h` (Syne) | clamp(3rem, 7vw, 4rem) | 800 | Bold | 0.08em | uppercase | Main name display |
| **.hero-role-line** | `--font-b` (Inter) | 1.2rem | 400 | Regular | 0 | none | Role/job title |
| **.hero-role-line strong** | `--font-sub` (Space Mono) | clamp(1.5rem, 3vw, 2rem) | 700 | Bold | 0 | none | Highlighted role |
| **.hero-tagline** | `--font-b` (Inter) | 15px | 400 | Regular | 0 | none | Tagline text |

---

## Navigation & UI Elements

| Element | Font Family | Size | Weight | Weight Value | Letter Spacing | Text Transform | Usage |
|---------|-----------|------|--------|-------------|-----------------|-----------------|-------|
| **#nav-logo** | `--font-ui` (Space Mono) | 20px | 700 | Bold | 0 | none | Navigation logo |
| **.nav-links a** | `--font-ui` (Space Mono) | 0.74rem (11.84px) | 600 | Semibold | 0.12em | uppercase | Navigation links |
| **.nav-btn** | `--font-ui` (Space Mono) | 0.875rem (14px) | 600 | Semibold | 0.08em | uppercase | Navigation buttons |
| **.btn** | `--font-ui` (Space Mono) | 0.875rem (14px) | 600 | Semibold | 0.08em | uppercase | Call-to-action buttons |
| **.btn-save** | `--font-h` (Syne) | 14px | 700 | Bold | 0 | none | Save/action buttons |

---

## Form & Admin Elements

| Element | Font Family | Size | Weight | Weight Value | Color | Usage |
|---------|-----------|------|--------|-------------|-------|-------|
| **label** | `--font-b` (Inter) | 13px | 500 | Medium | var(--text2) | Form labels |
| **input, select** | `--font-b` (Inter) | 14px | 400 | Regular | var(--text) | Input fields |
| **.form-group label** | `--font-b` (Inter) | 13px | 500 | Medium | var(--text2) | Form section labels |
| **.fs input, .fs select** | `--font-b` (Inter) | 13px | 400 | Regular | var(--text) | Styled form inputs |

---

## Photo Editor Text

| Element | Font Family | Size | Weight | Weight Value | Letter Spacing | Text Transform | Usage |
|---------|-----------|------|--------|-------------|-----------------|-----------------|-------|
| **.photo-editor-hd** | `--font-ui` (Space Mono) | 14px | 700 | Bold | 0.08em | uppercase | Photo editor header |
| **.photo-editor-row label** | `--font-b` (Inter) | 12px | 400 | Regular | 0 | none | Control labels |
| **.photo-note** | `--font-b` (Inter) | 12px | 400 | Regular | 0 | none | Help text |

---

## Modal & Dialog Text

| Element | Font Family | Size | Weight | Weight Value | Letter Spacing | Text Transform | Usage |
|---------|-----------|------|--------|-------------|-----------------|-----------------|-------|
| **.modal-hd** | `--font-ui` (Space Mono) | 18px | 700 | Bold | 0.06em | uppercase | Modal header |
| **.modal-close-btn** | `--font-b` (Inter) | 22px | 400 | Regular | 0 | none | Close button |

---

## Special Text Elements

| Element | Font Family | Size | Weight | Weight Value | Letter Spacing | Usage |
|---------|-----------|------|--------|-------------|-----------------|-------|
| **.section-title** | `--font-h` (Syne) | clamp(2rem, 4.2vw, 2.25rem) | 700 | Bold | 0 | Section headers |
| **.maint-logo** | `--font-h` (Syne) | 32px | 800 | Bold | 0 | Maintenance logo |
| **.maint-title** | `--font-h` (Syne) | 36px | 800 | Bold | 0 | Maintenance title |
| **.maint-msg** | `--font-b` (Inter) | 16px | 400 | Regular | 0 | Maintenance message |
| **.maint-contact** | `--font-b` (Inter) | 14px | 400 | Regular | 0 | Maintenance contact |

---

## Font Weight Reference

| Weight Name | Value | Hex | Usage |
|------------|-------|-----|-------|
| Regular | 400 | 0x190 | Body text, default |
| Medium | 500 | 0x1F4 | Form labels, semi-bold text |
| Semibold | 600 | 0x258 | Emphasized text, nav |
| Bold | 700 | 0x2BC | Headings, buttons, emphasis |
| Extrabold | 800 | 0x320 | Large headings, hero text |

---

## Responsive Font Sizes (Clamp)

The portfolio uses CSS `clamp()` for fluid typography:

```css
clamp(minimum, ideal, maximum)
```

### Responsive Breakpoints:
- **h1**: clamp(3rem, 7vw, 4rem) → 48px to 64px
- **h2**: clamp(2rem, 4.2vw, 2.25rem) → 32px to 36px
- **h3**: clamp(1.5rem, 3.2vw, 1.75rem) → 24px to 28px
- **hero-name**: clamp(3rem, 7vw, 4rem) → 48px to 64px
- **hero-role strong**: clamp(1.5rem, 3vw, 2rem) → 24px to 32px

---

## Color + Font Combinations

| Use Case | Font Family | Size | Weight | Color | Example |
|----------|-----------|------|--------|-------|---------|
| Primary Heading | `--font-h` | 3-4rem | 800 | Cyan gradient | Hero name |
| Section Header | `--font-h` | 2-2.25rem | 700 | var(--text) | Section titles |
| Button Text | `--font-ui` | 14px | 600 | See button class | Call-to-action |
| Body Content | `--font-b` | 16px | 400 | var(--text) | Paragraphs |
| Labels | `--font-b` | 13px | 500 | var(--text2) | Form labels |
| Help Text | `--font-b` | 12px | 400 | var(--text3) | Hints, notes |
| Code | `--font-num` | 13-15px | 400 | Cyan/monospace | Code snippets |

---

## CSS Custom Properties for Typography

```css
:root {
  --font-h:   'Syne', sans-serif;
  --font-sub: 'Space Mono', monospace;
  --font-b:   'Inter', sans-serif;
  --font-ui:  'Space Mono', monospace;
  --font-num: 'Orbitron', sans-serif;
  --font-q:   'Playfair Display', serif;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 68px;
  font-size: 16px;  /* Base font size: 16px = 1rem */
}

body {
  font-family: var(--font-b);
  color: var(--text);
  line-height: 1.6;
}
```

---

## Common Size Conversions

| Rem | Pixels | Usage |
|-----|--------|-------|
| 0.75rem | 12px | Small labels, help text |
| 0.875rem | 14px | UI buttons, nav |
| 1rem | 16px | Body text, standard |
| 1.125rem | 18px | Modal headers |
| 1.2rem | 19.2px | Hero role line |
| 1.25rem | 20px | Nav logo |
| 1.5rem | 24px | h3, small headings |
| 2rem | 32px | h2, section headers |
| 2.25rem | 36px | h2 max size |
| 3rem | 48px | h1 min size |
| 4rem | 64px | h1 max size |

---

## Font Application Guide

### For Headings:
```css
font-family: var(--font-h);    /* Syne */
font-weight: 700-800;          /* Bold or Extrabold */
letter-spacing: 0.05-0.08em;   /* Increased spacing */
text-transform: uppercase;      /* Optional: for nav, buttons */
```

### For Body Text:
```css
font-family: var(--font-b);    /* Inter */
font-weight: 400;              /* Regular */
font-size: 1rem;               /* 16px */
line-height: 1.7;              /* Spacious for readability */
```

### For UI/Buttons:
```css
font-family: var(--font-ui);   /* Space Mono */
font-weight: 600-700;          /* Semibold or Bold */
font-size: 0.875rem;           /* 14px */
letter-spacing: 0.08em;        /* Uppercase spacing */
text-transform: uppercase;
```

### For Code/Numbers:
```css
font-family: var(--font-num);  /* Orbitron */
font-weight: 400;              /* Regular */
font-size: 0.9rem;             /* Slightly smaller */
letter-spacing: 0.02em;        /* Subtle spacing */
```

---

## Best Practices

1. **Hierarchy**: Use `--font-h` (Syne) for major headings, `--font-b` (Inter) for body
2. **Spacing**: Increase letter-spacing for uppercase text (0.08em+)
3. **Line Height**: Keep 1.5-1.7 for body text, 1.2-1.3 for headings
4. **Responsive**: Use clamp() for headings to scale fluidly
5. **Contrast**: Pair bold weights (700-800) with large sizes; use weight 400 for small text
6. **Monospace**: Use `--font-ui` (Space Mono) for technical/UI elements, `--font-num` (Orbitron) for numeric data
7. **Emphasis**: Bold text at 700+ weight; use color gradients for visual interest

---

## Photo Editor Specific Sizes

| Control | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| Header "Adjust Photo" | Space Mono | 14px | 700 | Modal title |
| "Zoom" / "Rotate" label | Inter | 12px | 400 | Control labels |
| Zoom/Rotation value (105%) | Inter | 12px | 400 | Display values |
| "Shape" / "Sticker" labels | Inter | 12px | 400 | Dropdown labels |
| Button "Save" / "Reset" | Syne | 14px | 700 | Action buttons |
| Help text "Drag to move..." | Inter | 12px | 400 | Instructions |

---

## Implementation Example

```html
<!-- Heading -->
<h1 style="font-family: var(--font-h); font-size: clamp(3rem, 7vw, 4rem); font-weight: 800;">
  Your Title
</h1>

<!-- Body -->
<p style="font-family: var(--font-b); font-size: 1rem; font-weight: 400; line-height: 1.7;">
  Your paragraph text goes here.
</p>

<!-- Button -->
<button style="font-family: var(--font-ui); font-size: 0.875rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">
  Click Me
</button>

<!-- Label -->
<label style="font-family: var(--font-b); font-size: 13px; font-weight: 500; color: var(--text2);">
  Form Label
</label>
```

---

**Last Updated**: April 17, 2026  
**Portfolio Version**: Latest  
**Font System Version**: 2.0
