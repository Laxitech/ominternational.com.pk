# OM International theme

Implemented with **Tailwind CSS v4.3.3** using the CSS-first `@theme` API in
`src/app/globals.css`. There is no `tailwind.config.ts` color theme.

- `--palette-*` variables hold each raw color once.
- `--role-*` variables hold semantic light-theme roles; a future `.dark`
  selector can override these without renaming component-facing tokens.
- `--color-*` variables expose the tokens to Tailwind utilities such as
  `bg-primary`, `text-body`, and `border-border`.

## Color tokens

### Primary scale

| Token | Hex | Use |
| --- | --- | --- |
| `primary-50` | `#EBF7FF` | Lightest royal-blue tint; same role as `primary-subtle` |
| `primary-100` | `#D7EDFF` | Soft tinted backgrounds and hover fills on pale surfaces |
| `primary-200` | `#B7DBFF` | Tinted borders, dividers, and disabled fills |
| `primary-300` | `#87BBFD` | Decorative accents and secondary chart marks |
| `primary-400` | `#4F91E2` | Illustrative accents and lighter primary icons |
| `primary-500` | `#0761BB` | Mid-scale accents; avoid for small body text on white |
| `primary-600` | `#02509D` | Source brand primary; default primary actions and key emphasis |
| `primary-700` | `#003E8F` | Hover state for primary actions and links on light surfaces |
| `primary-800` | `#002C6F` | Pressed state for primary actions |
| `primary-900` | `#001E54` | Deepest primary shade; dark accents and high-emphasis details |

All primary scale values except `primary-600` are **derived, adjustable**.

### Semantic colors

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#02509D` | Default primary actions, active navigation, key brand emphasis |
| `primary-hover` | `#003E8F` | Hover state for primary buttons and primary links |
| `primary-pressed` | `#002C6F` | Pressed/active state for primary buttons |
| `primary-subtle` | `#EBF7FF` | Subtle royal-blue tint backgrounds and selected states |
| `secondary` | `#EAF3FC` | Pale-blue course sections, info panels, alternating backgrounds |
| `accent` | `#167DAB` | Interactive accent: links, hover states, focus cues |
| `heading` | `#111827` | Headings and high-emphasis text |
| `body` | `#4B5563` | Default body copy and form values |
| `muted` | `#6B7280` | Secondary copy, captions, helper text, metadata |
| `border` | `#E5E7EB` | Default borders, dividers, table rules, input outlines |
| `border-strong` | `#D1D5DB` | Emphasized borders and stronger input outlines |
| `surface` | `#FFFFFF` | Page background and default cards/panels |
| `surface-alt` | `#EAF3FC` | Alternate section backgrounds; alias of `secondary` |
| `surface-dark` | `#030d22` | Footer and deep midnight dark navy surfaces; **derived, adjustable** |
| `success` | `#15803D` | Success text, icons, and status indicators |
| `success-50` | `#F0FDF4` | Success tint background; **derived, adjustable** |
| `warning` | `#B45309` | Warning text, icons, and status indicators |
| `warning-50` | `#FFFBEB` | Warning tint background; **derived, adjustable** |
| `danger` | `#B91C1C` | Error text, destructive actions, validation states |
| `danger-50` | `#FEF2F2` | Error tint background; **derived, adjustable** |
| `info` | `#167DAB` | Informational text and icons; alias of `accent` |
| `info-50` | `#EFF8FC` | Informational tint background; **derived, adjustable** |
| `focus-ring` | `#167DAB` | Focus outline color; alias of `accent` |

**Light theme only.** The token names are stable: dark-mode support will
override the `--role-*` variables under `.dark` in `globals.css`.

## Usage rules

- Components must use Tailwind token utilities, never raw hex values.
- Text: `text-heading`, `text-body`, `text-muted`, `text-accent`,
  `text-primary`.
- Surfaces: `bg-surface`, `bg-surface-alt`, `bg-secondary`,
  `bg-primary-subtle`, `bg-surface-dark`.
- Borders: `border-border`, `border-border-strong`.
- Primary actions: `bg-primary`, `hover:bg-primary-hover`,
  `active:bg-primary-pressed`.
- Semantic feedback: `text-success` / `bg-success-50`,
  `text-warning` / `bg-warning-50`, `text-danger` / `bg-danger-50`,
  `text-info` / `bg-info-50`.
- Focus: use `outline-focus-ring` with a 2px outline and 2px offset; the
  global base rule will apply this to interactive elements.
