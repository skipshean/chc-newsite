# Website Customization Guide

This guide will help you adapt this website template for your own business. The site is built with Next.js, TypeScript, and uses CSS modules with global styles.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Branding & Content](#branding--content)
3. [Styling & Design](#styling--design)
4. [Pages & Navigation](#pages--navigation)
5. [Fonts](#fonts)
6. [Images & Assets](#images--assets)
7. [Deployment](#deployment)

---

## Project Structure

```
chc-newsite/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (header, footer, fonts)
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── news/              # News page
│   ├── portfolio/         # Portfolio page
│   ├── strategies/        # Strategies page
│   └── team/              # Team page
├── components/            # React components
│   ├── Header/            # Site header component
│   └── Footer/            # Site footer component
├── public/               # Static assets
│   ├── fonts/            # Custom font files
│   └── images/           # Image assets
├── styles/               # Global CSS
│   └── globals.css       # All global styles and animations
└── package.json          # Dependencies and scripts
```

---

## Branding & Content

### 1. Update Site Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Company Name',  // Change this
  description: 'Your company description',  // Change this
}
```

### 2. Update Logo

**File:** `components/Header/Header.tsx`

Replace the SVG logo (lines 30-32) with your own logo:

```tsx
<Link href="/" className={styles.logo}>
  {/* Replace this SVG with your logo */}
  <svg>...</svg>
</Link>
```

**Option 1:** Use an image instead:
```tsx
<Link href="/" className={styles.logo}>
  <img src="/images/your-logo.svg" alt="Your Company Name" />
</Link>
```

**Option 2:** Use text:
```tsx
<Link href="/" className={styles.logo}>
  Your Company Name
</Link>
```

### 3. Update Footer Copyright

**File:** `components/Footer/Footer.tsx`

```tsx
<p>© 2025 Your Company Name</p>  // Change this
```

### 4. Update "Submit a project" Button

**File:** `components/Header/Header.tsx`

Change the button text and link:

```tsx
<Link href="/your-action-page" className="button_btn__Lt_MH button_rounded__9DsZf button_black__K32K3 header_submit__2k2zB">
  Your Button Text
</Link>
```

---

## Styling & Design

### 1. Color Scheme

The site uses a black and white color scheme. To change colors:

**File:** `styles/globals.css`

Search for color values and replace:
- `#000` (black) → Your primary color
- `#fff` (white) → Your background/secondary color
- `rgba(0,0,0,0)` (transparent) → Adjust as needed

**Key areas to update:**
- Button colors: Search for `.button_black__K32K3` and `.button_white__03Hkt`
- Footer background: Search for `.footer_footer__mQF6i` (currently `background:#000`)
- Header colors: Search for `.header_wrapper__R1zF_`

### 2. Typography

**File:** `styles/globals.css`

The site uses custom fonts (SuisseIntl, Manrope). To change fonts:

1. **Replace font files:**
   - Place new font files in `public/fonts/`
   - Update `@font-face` declarations in `styles/globals.css`

2. **Update font-family:**
   - Search for `font-family: SuisseIntl` and replace with your font name
   - Update all instances throughout the CSS

**Example:**
```css
@font-face {
  font-family: YourFont;
  src: url(/fonts/YourFont-Regular.woff2) format("woff2");
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: YourFont, Helvetica Neue, helvetica, arial, sans-serif;
}
```

### 3. Spacing & Layout

**File:** `styles/globals.css`

Key spacing values (in rem units):
- `3.125rem` = 50px (common padding)
- `6rem` = 96px (desktop padding)
- `12rem` = 192px (large spacing)

Search for these values and adjust as needed.

---

## Pages & Navigation

### 1. Update Navigation Links

**File:** `components/Footer/Footer.tsx`

Update the footer navigation:

```tsx
<div className={styles.links}>
  <Link href="/about" className={styles.link}>About</Link>
  <Link href="/your-page-1" className={styles.link}>Your Page 1</Link>
  <Link href="/your-page-2" className={styles.link}>Your Page 2</Link>
  {/* Add or remove links as needed */}
</div>
```

### 2. Create New Pages

To create a new page:

1. Create a new folder in `app/`:
   ```
   app/your-page/
   └── page.tsx
   ```

2. Create the page component:
   ```tsx
   // app/your-page/page.tsx
   export default function YourPage() {
     return (
       <div className="container padding">
         <header className="pageHeader_pageHeader__2gWcy pageHeader_black__YsD2J">
           <div className="pageHeader_wrapper__DlXI6">
             <h1 className="hm-2 hd-1">Your Page Title</h1>
           </div>
         </header>
         
         <section>
           <p className="pm-m">Your content here</p>
         </section>
       </div>
     )
   }
   ```

3. Add navigation link in `components/Footer/Footer.tsx`

### 3. Update Homepage Content

**File:** `app/page.tsx`

Update the hero section:

```tsx
<h1 className="hd-1">Your Main Heading</h1>
<div className="index_text__mMRT2">
  <p className="pm-m">Your first paragraph</p>
  <p className="pm-m">Your second paragraph</p>
  {/* Add or remove paragraphs */}
</div>
```

Update statistics section:

```tsx
<section className="index_numberLabel__cJRAO">
  <div className="index_numberLabelItem__DGbgf">
    <div className="index_number__vuYtx isActive">
      <span className="hd-2">Your Number</span>
    </div>
    <p className="pm-s">Your Label</p>
  </div>
  {/* Add or remove statistic items */}
</section>
```

### 4. Update Page Content

Each page follows a similar structure. Update content in:
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/news/page.tsx`
- `app/portfolio/page.tsx`
- `app/strategies/page.tsx`
- `app/team/page.tsx`

---

## Fonts

### Adding Custom Fonts

1. **Add font files to `public/fonts/`**
   - Use `.woff2` format for best performance
   - Name files clearly (e.g., `YourFont-Regular.woff2`, `YourFont-Bold.woff2`)

2. **Add `@font-face` declarations in `styles/globals.css`**
   ```css
   @font-face {
     font-family: YourFont;
     src: url(/fonts/YourFont-Regular.woff2) format("woff2");
     font-style: normal;
     font-weight: 400;
     font-display: swap;
   }
   
   @font-face {
     font-family: YourFont;
     src: url(/fonts/YourFont-Bold.woff2) format("woff2");
     font-style: normal;
     font-weight: 700;
     font-display: swap;
   }
   ```

3. **Update font-family references**
   - Search for `font-family: SuisseIntl` in `styles/globals.css`
   - Replace with your font name

4. **Add font preloading in `app/layout.tsx`**
   ```tsx
   <link
     rel="preload"
     href="/fonts/YourFont-Regular.woff2"
     as="font"
     type="font/woff2"
     crossOrigin="anonymous"
   />
   ```

---

## Images & Assets

### Adding Images

1. **Place images in `public/images/`**

2. **Use Next.js Image component:**
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/images/your-image.jpg"
     alt="Description"
     width={800}
     height={600}
   />
   ```

3. **Or use regular img tag:**
   ```tsx
   <img src="/images/your-image.jpg" alt="Description" />
   ```

### Updating Background Patterns

The footer uses a pattern. To update:

1. Add your pattern image to `public/images/`
2. Update CSS in `components/Footer/Footer.module.css`:
   ```css
   .pattern {
     background-image: url(/images/your-pattern.svg);
     background-repeat: repeat;
     /* Add other background properties */
   }
   ```

---

## CSS Classes Reference

### Typography Classes

- `.hd-1` - Extra large heading (19rem on desktop)
- `.hd-2` - Large heading (25rem on desktop)
- `.hm-1` through `.hm-6` - Medium headings (various sizes)
- `.pm-m` - Medium paragraph text
- `.pm-s` - Small paragraph text
- `.pm-xs` - Extra small text

### Button Classes

- `.button_btn__Lt_MH` - Base button class
- `.button_rounded__9DsZf` - Rounded button
- `.button_black__K32K3` - Black button with white text
- `.button_white__03Hkt` - White button with black text

### Layout Classes

- `.container` - Max-width container (1680px)
- `.padding` - Standard padding (3.125rem mobile, 6rem desktop)

---

## Deployment

### Build for Production

```bash
npm run build
```

### Run Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

If you need environment variables, create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

Access in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## Common Customizations

### Change Button Colors

**File:** `styles/globals.css`

Search for `.button_black__K32K3` and update:
```css
.button_black__K32K3 {
  background-color: #your-color;
  border: 1px solid #your-color;
  color: #your-text-color;
}
```

### Adjust Spacing

**File:** `styles/globals.css` or component CSS modules

Common spacing values:
- `3.125rem` = 50px
- `6rem` = 96px
- `12rem` = 192px

### Update Breakpoints

The site uses `812px` as the main breakpoint. To change:

**File:** `styles/globals.css`

Search for `@media (min-width: 812px)` and update to your breakpoint.

---

## Troubleshooting

### Fonts Not Loading

1. Check font files are in `public/fonts/`
2. Verify `@font-face` paths are correct (`/fonts/...`)
3. Check browser console for 404 errors
4. Ensure `crossOrigin="anonymous"` in preload links

### Styles Not Applying

1. Clear `.next` folder: `rm -rf .next`
2. Restart dev server: `npm run dev`
3. Check CSS class names match exactly (they're minified)

### Images Not Showing

1. Verify images are in `public/` folder
2. Use absolute paths starting with `/` (e.g., `/images/photo.jpg`)
3. Check Next.js image optimization settings in `next.config.js`

---

## Next Steps

1. **Update all content** with your business information
2. **Replace logo and images** with your brand assets
3. **Customize colors** to match your brand
4. **Add/remove pages** as needed
5. **Test on multiple devices** and browsers
6. **Deploy** to your hosting platform

---

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Check React documentation: https://react.dev
- Review the original site structure for reference

---

**Note:** This template is based on the Sofinnova Partners website design. All content, branding, and business-specific elements should be replaced with your own.

