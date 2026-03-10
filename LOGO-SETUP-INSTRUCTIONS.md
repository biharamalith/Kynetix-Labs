# 🎨 Logo Setup Instructions for Kynetix Labs

## ✅ What I've Updated in the Code

I've updated the following files to use your new logo:

1. **Navbar** ([src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx))
   - Logo now displays as an image instead of the "K" letter

2. **Footer** ([src/components/layout/Footer.tsx](src/components/layout/Footer.tsx))
   - Logo now displays as an image instead of the "K" letter

3. **HTML Head** ([index.html](index.html))
   - Added favicon references
   - Added Apple touch icon for iOS devices

---

## 📋 What You Need to Do: Save the Logo Files

### Required Files:

#### 1. Main Logo
- **Source:** The logo image you shared (shield with K design)
- **Filename:** `logo.png`
- **Location:** `public/logo.png`
- **Recommended size:** 512 x 512 pixels
- **Format:** PNG with transparency

#### 2. Favicon (Browser Tab Icon)
- **Source:** Create from the same logo
- **Filename:** `favicon.png`
- **Location:** `public/favicon.png`
- **Size:** 120 x 120 pixels or 180 x 180 pixels
- **Format:** PNG

#### 3. Alternative Favicon Formats (Optional)
- **`public/favicon.ico`** - 32x32 or 16x16 ICO format
- **`public/favicon.svg`** - Vector SVG format

---

## 🛠️ How to Prepare the Files

### Option 1: Using Image Editor (Photoshop, Figma, etc.)

1. **For logo.png:**
   - Export the logo at 512x512 pixels
   - Ensure PNG format with transparency
   - Save as `logo.png`

2. **For favicon.png:**
   - Resize logo to 180x180 pixels (or 120x120)
   - Ensure PNG format with transparency
   - Save as `favicon.png`

3. **Place both files in the `public/` folder**

### Option 2: Online Tools

**Resize the logo:**
- Use: https://squoosh.app or https://resizeimage.net
- Upload your logo
- Resize to 512x512 for logo.png
- Resize to 180x180 for favicon.png
- Download and place in `public/` folder

**Convert to ICO (optional):**
- Use: https://www.favicon-generator.org
- Upload your logo
- Download the generated favicon.ico
- Place in `public/` folder

---

## 📂 Final File Structure

After saving the files, your `public/` folder should look like this:

```
public/
  ├── logo.png          ← Main logo (512x512) ✅ REQUIRED
  ├── favicon.png       ← Favicon (180x180) ✅ REQUIRED
  ├── favicon.svg       ← SVG version (optional)
  ├── favicon.ico       ← ICO version (optional)
  ├── og-image.jpg      ← Social media image (from previous SEO setup)
  ├── robots.txt
  └── sitemap.xml
```

---

## 🧪 Testing After Adding Logo

1. **Save the logo files** to the `public/` folder

2. **Clear browser cache** (important!)
   - Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Or open in Incognito/Private window

3. **Restart dev server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   # Or if using bun:
   bun run dev
   ```

4. **Check the logo appears:**
   - In the navbar (top left)
   - In the footer (bottom left)
   - In the browser tab (favicon)

5. **Verify on mobile:**
   - Logo should be clearly visible
   - Touch-icon should work on iOS Safari

---

## 🎨 Logo Display Settings

The code is set up to display your logo:

**In Navbar & Footer:**
- Height: 40px (2.5rem)
- Width: Auto (maintains aspect ratio)
- Object-fit: contain (prevents distortion)

If you need to adjust the size, edit these files:
- [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx) - Line with `className="h-10 w-10"`
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) - Line with `className="h-10 w-10"`

Change `h-10 w-10` to:
- `h-12 w-12` (larger)
- `h-8 w-8` (smaller)
- Or use specific heights like `h-14 w-auto` for rectangular logos

---

## 🌐 For Production Deployment

Before deploying, create additional social media images:

### Open Graph Image (for social sharing)
- **Filename:** `og-image.jpg` (already referenced in SEO)
- **Size:** 1200 x 630 pixels
- **Content:** Include your logo + company info
- **Location:** `public/og-image.jpg`

### Apple Touch Icon
- Already configured to use `logo.png`
- iOS will use this when users add your site to home screen

---

## ✅ Checklist

- [ ] Save logo.png (512x512) to `public/` folder
- [ ] Save favicon.png (180x180) to `public/` folder
- [ ] Clear browser cache
- [ ] Restart dev server
- [ ] Verify logo appears in navbar
- [ ] Verify logo appears in footer
- [ ] Check favicon in browser tab
- [ ] Test on mobile device
- [ ] Deploy to production

---

## 🆘 Troubleshooting

### Logo not showing?
1. Check file path: Must be exactly `public/logo.png`
2. Check file name: Case-sensitive on some systems
3. Clear browser cache
4. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Logo looks pixelated?
- Increase the image resolution (use 1024x1024 instead of 512x512)
- Ensure PNG format with high quality

### Favicon not updating?
- Favicons are heavily cached by browsers
- Try in Incognito/Private mode
- Clear all browser cache
- Some browsers may take 5-10 minutes to update

---

## 🎉 Done!

Once you save the logo files, your beautiful shield logo with the "K" design will appear throughout your website, replacing the simple letter placeholders.

The logo perfectly represents your tech-focused, modern brand! 🚀
