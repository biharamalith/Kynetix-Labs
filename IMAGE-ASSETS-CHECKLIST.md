# 🖼️ Required Images & Assets Checklist

To complete your SEO setup, you'll need to create and upload the following image assets:

## High Priority (Create Immediately)

### 1. OpenGraph Image (Social Media Sharing)
- **Filename:** `og-image.jpg`
- **Location:** `public/og-image.jpg`
- **Dimensions:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **File Size:** Under 500KB
- **Content Should Include:**
  - Kynetix Labs logo
  - Tagline: "Accelerating Intelligence"
  - Key services or value proposition
  - Professional, clean design matching brand colors

**Why:** This is the image that appears when someone shares your site on LinkedIn, Twitter, Facebook, etc. Currently referenced but missing!

---

### 2. Logo (High Resolution)
- **Filename:** `logo.png`
- **Location:** `public/logo.png`
- **Dimensions:** 512 x 512 pixels (square)
- **Format:** PNG with transparency
- **File Size:** Under 100KB
- **Requirements:**
  - Professional, scalable design
  - Works on both light and dark backgrounds
  - Clear at small sizes

**Why:** Used in schema.org structured data and may be shown in Google search results for brand queries.

---

### 3. Favicon Update
- **Current:** You have `favicon.svg` and `favicon.ico`
- **Action Required:** Ensure these actually exist and match your brand
- **Sizes Needed:**
  - favicon.ico (16x16, 32x32, 48x48 - multi-size ICO file)
  - favicon.svg (vector format)
  - apple-touch-icon.png (180x180 for iOS)

**Why:** Browser tab icon - critical for brand recognition.

---

## Medium Priority (Create Within 2 Weeks)

### 4. Service-Specific Images
Create unique images for each service page section:

**Mobile Development** (`/services#mobile`)
- **Filename:** `service-mobile.jpg`
- **Suggested Content:** Mobile devices with your app, code snippets, or abstract mobile UI

**Web & Cloud** (`/services#web`)
- **Filename:** `service-web.jpg`
- **Suggested Content:** Cloud infrastructure diagram, web browser mockups

**AI/ML Integration** (`/services#ai`)
- **Filename:** `service-ai.jpg`
- **Suggested Content:** Neural network visualization, AI abstract graphics

**Custom Software** (`/services#custom`)
- **Filename:** `service-custom.jpg`
- **Suggested Content:** Code editor, architecture diagrams

**All Images:**
- Dimensions: 1200 x 800 pixels
- Format: JPG or WebP
- File Size: Under 200KB each

---

### 5. Product/POS Platform Screenshots
For the Products page (`/products`):

- **Hero Image:** Mockup of the POS interface
- **Feature Screenshots:** 3-4 images showing key features
- **Dashboard View:** Analytics dashboard screenshot
- **Mobile View:** POS on tablet/mobile device

**Dimensions:** 1400 x 900 pixels
**Format:** PNG or JPG
**File Size:** Under 300KB each

---

### 6. Team/Founders Photos
For the About page:

- **Founder Headshots:** Professional photos of Bihara, Pasindu, Kushad
  - Dimensions: 400 x 400 pixels (square)
  - Format: JPG
  - Background: Clean, consistent across all photos

---

### 7. Blog Post Featured Images
For each blog article, create unique featured images:

- **Dimensions:** 1200 x 630 pixels
- **Format:** JPG or WebP
- **Content:** Related to article topic (AI, Flutter, Cloud, etc.)
- **Branding:** Include subtle Kynetix Labs logo in corner

---

## Image Optimization Best Practices

### Before Upload:
1. **Compress Images:**
   - Use TinyPNG, ImageOptim, or Squoosh
   - Target: 70-80% quality for JPGs
   - Remove EXIF data

2. **Use Modern Formats:**
   - WebP for web images (better compression)
   - SVG for logos and icons (scalable)
   - JPG for photos
   - PNG for images requiring transparency

3. **Responsive Images:**
   - Create multiple sizes: 320w, 640w, 1024w, 1920w
   - Use `srcset` attribute in HTML
   - Let browser choose appropriate size

4. **Add Alt Text:**
   - Descriptive, keyword-rich (but natural)
   - Example: "Flutter mobile app development on iOS and Android devices"

---

## Implementation After Creating Images

Once you have created the images, update these files:

### 1. Update `public/` folder:
```
public/
  og-image.jpg          ← Add
  logo.png              ← Add
  favicon.svg           ← Verify exists
  favicon.ico           ← Verify exists
  apple-touch-icon.png  ← Add
  service-mobile.jpg    ← Add
  service-web.jpg       ← Add
  service-ai.jpg        ← Add
  service-custom.jpg    ← Add
```

### 2. Update index.html (if needed):
Add additional favicon references:
```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

### 3. Verify in SEO Component:
The SEO component already references `og-image.jpg`, so once uploaded, it will work automatically!

---

## Design Tools Recommendations

**Free:**
- [Canva](https://canva.com) - Great for social images and graphics
- [Figma](https://figma.com) - Professional design tool (free tier)
- [Remove.bg](https://remove.bg) - Background removal
- [Unsplash](https://unsplash.com) - Free stock photos

**Paid:**
- Adobe Photoshop - Professional editing
- Adobe Illustrator - Vector graphics and logos

**Image Optimization:**
- [TinyPNG](https://tinypng.com) - Compress PNG/JPG
- [Squoosh](https://squoosh.app) - Google's image optimizer
- [ImageOptim](https://imageoptim.com) - Mac app for compression

---

## Template Suggestions for OG Image

### Design Elements to Include:
```
┌─────────────────────────────────────┐
│  [Kynetix Labs Logo]                │
│                                     │
│  Accelerating Intelligence          │
│                                     │
│  ✓ AI/ML Integration                │
│  ✓ Flutter Development              │
│  ✓ Cloud Architecture               │
│  ✓ Smart POS Platform               │
│                                     │
│  kynetixlabs.com                    │
└─────────────────────────────────────┘
```

**Color Scheme:**
- Use your brand colors (primary cyan/blue tones)
- Dark background with light text (or vice versa)
- Professional gradient or subtle pattern
- High contrast for readability

---

## Testing Your Images

After adding images, test them:

1. **OpenGraph Testing:**
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

2. **Image Performance:**
   - Run Google PageSpeed Insights
   - Check image sizes and load times
   - Verify images are properly compressed

3. **Visual Check:**
   - Test on different devices
   - Check in light/dark themes
   - Verify all images load correctly

---

## Priority Order

1. **Day 1:** OG image + Logo (critical for social sharing)
2. **Week 1:** Favicons complete set
3. **Week 2:** Service page images
4. **Week 3:** Product screenshots
5. **Week 4:** Team photos + blog images

---

Need design help? Consider:
- Hiring a designer on Fiverr/Upwork (budget-friendly)
- Using Canva templates (DIY option)
- AI image generators for abstract concepts
- Stock photo sites with proper licensing

**Remember:** Quality images improve user experience AND search rankings! Google considers visual content as part of the E-E-A-T signals. 📸
