# Logo Setup Guide

The website reads the main logo from:

```text
public/logo.png
```

The shared company logo path is stored in:

```text
src/lib/siteContent.ts -> company.logoPath
```

## Recommended files

| File | Purpose | Recommended size |
|---|---|---|
| `public/logo.png` | Navbar, footer, and hero loader mark | 512 x 512 PNG with transparency |
| `public/favicon.png` | Browser tab icon | 180 x 180 PNG |
| `public/og-image.jpg` | Social sharing image | 1200 x 630 JPG |

## Testing

1. Replace the files in `public/`.
2. Restart the dev server.
3. Hard refresh the browser.
4. Check navbar, footer, hero loader, browser tab, and social preview metadata.

## Rule

Do not hardcode logo paths inside new components. Use `company.logoPath` when the logo path needs to be shared.
