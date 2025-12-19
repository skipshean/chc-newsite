# CSS Animations Documentation

This document details all CSS animations and transitions used throughout the website, including the CSS code, JavaScript triggers, and explanations of how each animation works.

---

## 1. Homepage Animated Lines

**Location:** Homepage hero section (left side of main heading)

**Description:** Three horizontal lines that animate from left to right with a staggered delay, creating a sequential reveal effect.

### CSS

```css
.index_lines__B1s1U .index_line__oI6av {
  position: relative;
  height: 0.1rem;
  margin-bottom: 1.4rem;
}

.index_lines__B1s1U .index_line__oI6av:last-child {
  margin-bottom: 0;
}

.index_lines__B1s1U .index_line__oI6av:after,
.index_lines__B1s1U .index_line__oI6av:before {
  transform-origin: left center;
  transition: transform 0.8s calc(var(--index) * 0.05s) cubic-bezier(0.77, 0, 0.175, 1);
  content: "";
  position: absolute;
  height: 1px;
  background: #000;
  left: 0;
  width: 100%;
  bottom: 0;
}

.index_lines__B1s1U .index_line__oI6av:before {
  background-color: #acc4cf;
}

.index_lines__B1s1U .index_line__oI6av:after {
  transition-delay: calc(var(--index) * 0.05s + 0.2s);
}

.index_lines__B1s1U .index_line__oI6av:after,
.index_lines__B1s1U .index_line__oI6av:before {
  transform: scaleX(0) translateZ(0);
}

.index_line__oI6av.index_isActive__r_HdT:after,
.index_lines__B1s1U .index_line__oI6av.index_isActive__r_HdT:before {
  transform: scaleX(1) translateZ(0);
}
```

### JavaScript

```typescript
// File: app/page.tsx
'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [linesActive, setLinesActive] = useState(false)

  useEffect(() => {
    // Trigger line animation after component mounts
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setLinesActive(true)
        }, 100)
      })
    })
  }, [])

  return (
    <div className="index_lines__B1s1U">
      <div 
        className={`index_line__oI6av ${linesActive ? 'index_isActive__r_HdT' : ''}`} 
        style={{ '--index': '0' } as React.CSSProperties & { '--index': string }}
      ></div>
      <div 
        className={`index_line__oI6av ${linesActive ? 'index_isActive__r_HdT' : ''}`} 
        style={{ '--index': '1' } as React.CSSProperties & { '--index': string }}
      ></div>
      <div 
        className={`index_line__oI6av ${linesActive ? 'index_isActive__r_HdT' : ''}`} 
        style={{ '--index': '2' } as React.CSSProperties & { '--index': string }}
      ></div>
    </div>
  )
}
```

### Explanation

- **Structure**: Each line uses `::before` and `::after` pseudo-elements to create two overlapping lines (one light blue `#acc4cf`, one black `#000`).
- **Initial State**: Both pseudo-elements start at `scaleX(0)`, making them invisible (collapsed to 0 width).
- **Animation Trigger**: When `index_isActive__r_HdT` class is added via JavaScript, both pseudo-elements scale to `scaleX(1)`, revealing the lines.
- **Staggered Delay**: The `--index` CSS custom property (0, 1, 2) creates a delay: `calc(var(--index) * 0.05s)` for the `::before` element, and an additional 0.2s delay for the `::after` element.
- **Timing**: Uses `cubic-bezier(0.77, 0, 0.175, 1)` for a smooth easing effect.
- **JavaScript Logic**: `useState` tracks animation state, `useEffect` triggers after mount using `requestAnimationFrame` for smooth timing, with a 100ms delay to ensure DOM is ready.

---

## 2. Number Label Underline Animation

**Location:** Homepage statistics section (numbers like "1972", "50", "500+", etc.)

**Description:** A horizontal line that animates from left to right beneath each number when the page loads.

### CSS

```css
.index_numberLabelItem__DGbgf .index_number__vuYtx {
  position: relative;
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;
}

.index_numberLabelItem__DGbgf .index_number__vuYtx:after {
  transform: scaleX(0) translateZ(0);
  transform-origin: left center;
  content: "";
  position: absolute;
  height: 1px;
  background: #000;
  left: 0;
  width: 100%;
  bottom: 0;
}

.index_numberLabelItem__DGbgf .index_number__vuYtx.isActive:after {
  transform: scaleX(1) translateZ(0);
  transition: 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0.2s;
}
```

### JavaScript

```typescript
// File: app/page.tsx
// The "isActive" class is applied directly in the HTML:
<div className="index_number__vuYtx isActive">
  <span className="hd-2">1972</span>
</div>
```

### Explanation

- **Structure**: Uses an `::after` pseudo-element to create a horizontal line beneath each number.
- **Initial State**: The line starts at `scaleX(0)`, making it invisible.
- **Animation**: When the `isActive` class is present, the line scales to `scaleX(1)`, revealing it from left to right.
- **Timing**: 0.6s transition with a 0.2s delay, using the same easing function as the line animation.
- **Note**: Unlike the animated lines, this uses a static `isActive` class applied directly in the HTML (not controlled by React state).

---

## 3. Header Slide-In Animation

**Location:** Site header (top of page)

**Description:** The header slides down from above the viewport when the page loads.

### CSS

```css
.header_header__w2BOs {
  position: fixed;
  z-index: 10;
  top: 3.125rem;
  left: 0;
  width: 100%;
  transform: translate3d(0, calc(-5rem - 100%), 0);
  transition: transform 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
  pointer-events: none;
}

.header_header__w2BOs.header_isActive__GGYWZ {
  transform: translateZ(0);
  transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
}
```

### JavaScript

```typescript
// File: components/Header/Header.tsx
'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <header className={`${styles.header} ${isActive ? styles.isActive : ''}`}>
      {/* Header content */}
    </header>
  )
}
```

### Explanation

- **Initial Position**: The header starts at `translate3d(0, calc(-5rem - 100%), 0)`, which positions it completely above the viewport (100% of its height plus 5rem).
- **Final Position**: When `header_isActive__GGYWZ` is added, the transform changes to `translateZ(0)`, bringing it to its natural position.
- **Transition**: Uses a smooth easing curve `cubic-bezier(0.16, 1.08, 0.38, 0.98)` for a natural deceleration effect.
- **JavaScript**: `useEffect` immediately sets `isActive` to `true` on mount, triggering the animation.

---

## 4. Header Opacity Fade-In

**Location:** Header wrapper (controls visibility of header content)

**Description:** The header content fades in after the header slides into position.

### CSS

```css
.header_wrapper__R1zF_.header_isBlack__qlH7u,
.header_wrapper__R1zF_.header_isSpecial__uyRoZ,
.header_wrapper__R1zF_.header_isWhite__URyK8 {
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s;
}

.header_wrapper__R1zF_.header_isBlack__qlH7u.header_isActive__GGYWZ,
.header_wrapper__R1zF_.header_isSpecial__uyRoZ.header_isActive__GGYWZ,
.header_wrapper__R1zF_.header_isWhite__URyK8.header_isActive__GGYWZ {
  z-index: 2;
  opacity: 1;
}
```

### JavaScript

```typescript
// File: components/Header/Header.tsx
// Same component as above - uses the same isActive state
<div className={`${styles.wrapper} ${styles.isBlack} ${isActive ? styles.isActive : ''}`}>
  {/* Header content */}
</div>
```

### Explanation

- **Initial State**: Header wrapper starts with `opacity: 0`, making it invisible.
- **Animation**: When `header_isActive__GGYWZ` is added, opacity transitions to `1`, creating a fade-in effect.
- **Timing**: 0.5s transition, which happens simultaneously with the slide-in animation.
- **Purpose**: Creates a layered animation effect - header slides in, then content fades in.

---

## 5. Hamburger Menu Button Animation

**Location:** Top-left of header

**Description:** The hamburger icon transforms into an "X" when clicked, with the three lines animating out and two diagonal lines rotating in.

### CSS

```css
.header_burger__5M9TH {
  position: relative;
  width: 2.4rem;
  height: 10px;
  flex-direction: column;
  justify-content: space-between !important;
  box-sizing: initial;
  border-top: 6px solid rgba(0, 0, 0, 0);
  border-bottom: 6px solid rgba(0, 0, 0, 0);
  transition: transform 0.7s cubic-bezier(0.16, 1.08, 0.38, 0.98),
    opacity 0.7s cubic-bezier(0.26, 1.04, 0.54, 1), visibility 0.7s;
  background: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
}

.header_burger__5M9TH:after,
.header_burger__5M9TH:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 2px;
  visibility: hidden;
  background-color: #000;
  transform: translate3d(-50%, -50%, 0);
  transition: visibility 0.3s, transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}

.header_burger__5M9TH.header_isMenuOpen__7ao2e:after,
.header_burger__5M9TH.header_isMenuOpen__7ao2e:before {
  visibility: visible;
  transition-duration: 0s, 0.3s;
}

.header_burger__5M9TH.header_isMenuOpen__7ao2e:before {
  transform: translate3d(-50%, -50%, 0) rotate(-45deg);
}

.header_burger__5M9TH.header_isMenuOpen__7ao2e:after {
  transform: translate3d(-50%, -50%, 0) rotate(45deg);
}

.header_burger__5M9TH.header_isMenuOpen__7ao2e .header_line__ZCWZm {
  opacity: 0;
}

.header_burger__5M9TH.header_isMenuOpen__7ao2e .header_line__ZCWZm:first-child {
  transform: translate3d(0, -250%, 0);
}

.header_burger__5M9TH.header_isMenuOpen__7ao2e .header_line__ZCWZm:last-child {
  transform: translate3d(0, 250%, 0);
}

.header_burger__5M9TH .header_line__ZCWZm {
  width: 100%;
  height: 2px;
  background-color: currentcolor;
  transition: opacity 0.3s, transform 0.3s cubic-bezier(0.16, 1.08, 0.38, 0.98);
}
```

### JavaScript

```typescript
// File: components/Header/Header.tsx
const [isMenuOpen, setIsMenuOpen] = useState(false)

return (
  <button
    className={`${styles.burger} ${isMenuOpen ? styles.isMenuOpen : ''}`}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-label="Toggle menu"
  >
    <span className={styles.line}></span>
    <span className={styles.line}></span>
    <span className={styles.line}></span>
  </button>
)
```

### Explanation

- **Structure**: The button contains three `<span>` elements (`.header_line__ZCWZm`) representing the hamburger lines, plus `::before` and `::after` pseudo-elements for the X lines.
- **Initial State**: The three lines are visible; the `::before` and `::after` pseudo-elements are hidden (`visibility: hidden`).
- **Open State**: When `header_isMenuOpen__7ao2e` is added:
  - The three lines fade out (`opacity: 0`) and move away (first line moves up 250%, last line moves down 250%).
  - The `::before` and `::after` pseudo-elements become visible and rotate to form an X (`-45deg` and `45deg`).
- **Timing**: 0.3s transition for the rotation and line movement.
- **JavaScript**: `isMenuOpen` state toggles on button click, controlling the animation class.

---

## 6. Menu Overlay Slide-Up Animation

**Location:** Full-screen menu overlay

**Description:** The menu slides up from the bottom of the screen when the hamburger button is clicked.

### CSS

```css
.menu_menu__S6D2g {
  display: flex;
  position: fixed;
  z-index: 8;
  inset: -1px 0 0;
  overflow: hidden;
  flex-direction: column;
  padding: 0 3.125rem 3.125rem;
  visibility: hidden;
  background-color: #fff;
  border-top: 1px solid #000;
  transform: translate3d(0, 100%, 0);
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), visibility 0.8s;
}

.menu_menu__S6D2g.menu_isActive__dASu_ {
  visibility: inherit;
  transform: translateZ(0);
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
}
```

### JavaScript

```typescript
// File: components/Header/Header.tsx
// Uses the same isMenuOpen state as the hamburger button
<nav className={`menu_menu__S6D2g ${isMenuOpen ? 'menu_isActive__dASu_' : ''}`}>
  {/* Menu links */}
</nav>
```

### Explanation

- **Initial State**: Menu starts at `translate3d(0, 100%, 0)`, positioning it completely below the viewport, and `visibility: hidden`.
- **Active State**: When `menu_isActive__dASu_` is added, the menu moves to `translateZ(0)` (its natural position) and becomes visible.
- **Animation**: Slides up from the bottom with a smooth easing curve.
- **Timing**: 1s transition duration when opening, 0.8s when closing.
- **JavaScript**: Controlled by the same `isMenuOpen` state that controls the hamburger button.

---

## 7. Button Hover/Active States

**Location:** All buttons throughout the site (e.g., "Submit a project", form buttons)

**Description:** Buttons change background color and text color on hover and active states with smooth transitions.

### CSS

```css
.button_btn__Lt_MH.button_rounded__9DsZf.button_black__K32K3 {
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
  fill: #fff;
}

.button_btn__Lt_MH.button_rounded__9DsZf.button_black__K32K3:active,
.button_btn__Lt_MH.button_rounded__9DsZf.button_black__K32K3:focus-visible {
  background-color: rgba(0, 0, 0, 0);
  color: #000;
  transition-duration: 0.2s;
  fill: #000;
}

.button_btn__Lt_MH.button_rounded__9DsZf {
  border-radius: 2.5em;
  font-size: 1.4rem;
  font-size: max(1.4rem, 11px);
  line-height: 1.45;
  transition: opacity, fill, color, background-color;
  transition-duration: 1.2s;
  transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
}

@media (hover: hover) {
  .button_btn__Lt_MH.button_rounded__9DsZf.button_black__K32K3:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #000;
    transition-duration: 0.2s;
    fill: #000;
  }
}
```

### JavaScript

No JavaScript required - pure CSS transitions.

### Explanation

- **Default State**: Black buttons have a black background (`#000`) with white text.
- **Hover/Active State**: Background becomes transparent (`rgba(0, 0, 0, 0)`), text changes to black, creating an "outline" effect.
- **Transition**: 1.2s transition for normal state changes, but speeds up to 0.2s on hover/active for a snappier feel.
- **Easing**: Uses `cubic-bezier(0.16, 1.08, 0.38, 0.98)` for smooth animation.
- **Note**: The same pattern applies to white buttons (`.button_white__03Hkt`) with inverted colors.

---

## 8. Button Loading State

**Location:** Form submit buttons

**Description:** When a button is in a loading state, the button text fades out and moves up while a spinner fades in and centers.

### CSS

```css
.button_btn__Lt_MH .button_spinner__f5O6r {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate3d(-50%, calc(-50% + 1.8rem), 0);
}

.button_btn__Lt_MH .button_children__CgLrr,
.button_btn__Lt_MH .button_spinner__f5O6r {
  transition: border 1s cubic-bezier(0.16, 1.08, 0.38, 0.98),
    transform 0.9s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.9s cubic-bezier(0.77, 0, 0.175, 1);
}

.button_btn__Lt_MH.button_isLoading__XVMOR {
  pointer-events: none;
}

.button_btn__Lt_MH.button_isLoading__XVMOR .button_children__CgLrr {
  opacity: 0;
  transform: translate3d(0, -1.8rem, 0);
}

.button_btn__Lt_MH.button_isLoading__XVMOR .button_spinner__f5O6r {
  opacity: 1;
  transform: translate3d(-50%, -50%, 0);
}
```

### JavaScript

```typescript
// Example usage (not currently implemented in the codebase):
const [isLoading, setIsLoading] = useState(false)

<button 
  className={`button_btn__Lt_MH button_rounded__9DsZf button_black__K32K3 ${isLoading ? 'button_isLoading__XVMOR' : ''}`}
  onClick={handleSubmit}
>
  <span className="button_children__CgLrr">Submit</span>
  <span className="button_spinner__f5O6r">Loading...</span>
</button>
```

### Explanation

- **Structure**: Button contains both the text content (`.button_children__CgLrr`) and a spinner element (`.button_spinner__f5O6r`).
- **Initial State**: Spinner is hidden (`opacity: 0`) and positioned slightly below center. Text is visible.
- **Loading State**: When `button_isLoading__XVMOR` is added:
  - Text fades out and moves up (`opacity: 0`, `transform: translate3d(0, -1.8rem, 0)`).
  - Spinner fades in and centers (`opacity: 1`, `transform: translate3d(-50%, -50%, 0)`).
- **Timing**: 0.9s transition for smooth crossfade effect.
- **Note**: The spinner itself uses a separate keyframe animation (see Spinner Animation below).

---

## 9. Spinner Loading Animation

**Location:** Button loading states

**Description:** A rotating circular spinner that appears during button loading states.

### CSS

```css
@keyframes spinner_load8__snUTq {
  0% {
    transform: rotate(0deg) translateZ(0);
  }
  to {
    transform: rotate(1turn) translateZ(0);
  }
}

.spinner_spinner__Mw8BT {
  display: block;
  width: 10em;
  height: 10em;
  font-size: 0.4rem;
  pointer-events: none;
}

.spinner_spinner__Mw8BT:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: initial;
  margin: -1.5em 0 0 -1.5em;
  border: 1.5em solid rgba(0, 0, 0, 0.2);
  border-left-color: #000;
  border-radius: 50%;
  transform: translateZ(0);
  animation: spinner_load8__snUTq 0.7s linear infinite;
  text-indent: -9999em;
}
```

### JavaScript

No JavaScript required - pure CSS animation.

### Explanation

- **Structure**: Uses a `::before` pseudo-element to create a circular border.
- **Visual Effect**: The border is mostly transparent (`rgba(0, 0, 0, 0.2)`) except for the left side (`border-left-color: #000`), creating a partial circle.
- **Animation**: The `@keyframes` rotates the element from `0deg` to `360deg` (1 turn) continuously.
- **Timing**: 0.7s per rotation, `linear` timing (constant speed), `infinite` repetition.
- **Performance**: Uses `translateZ(0)` to enable hardware acceleration.

---

## 10. Article Suggestions Hover Line

**Location:** News/article cards on homepage

**Description:** A horizontal line at the top of each article card that expands vertically on hover/active/focus.

### CSS

```css
.articleSuggestions_item__FNI6u {
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;
  padding-top: 3rem;
  will-change: transform;
}

.articleSuggestions_item__FNI6u:before {
  transform-origin: top center;
  transition: transform 0.6s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  content: "";
  position: absolute;
  height: 1px;
  background: #000;
  left: 0;
  width: 100%;
  top: 0;
}

.articleSuggestions_item__FNI6u:active:before,
.articleSuggestions_item__FNI6u:focus-visible:before {
  transform: scaleY(10) translateZ(0);
  transition-duration: 0.3s;
}

@media (hover: hover) {
  .articleSuggestions_item__FNI6u:hover:before {
    transform: scaleY(10) translateZ(0);
    transition-duration: 0.3s;
  }
}
```

### JavaScript

No JavaScript required - pure CSS transitions.

### Explanation

- **Structure**: Uses a `::before` pseudo-element to create a 1px horizontal line at the top of each article card.
- **Initial State**: The line is 1px tall (`height: 1px`).
- **Hover/Active State**: The line scales vertically to `scaleY(10)`, making it 10px tall, creating a bold underline effect.
- **Timing**: 0.6s transition normally, but speeds up to 0.3s on hover/active for responsiveness.
- **Transform Origin**: `top center` ensures the line expands downward from the top edge.

---

## 11. Footer Link Underline Animation

**Location:** Footer navigation links

**Description:** A white underline that expands vertically on hover/focus, creating a bold highlight effect.

### CSS

```css
.footer_link__VR8Bk {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.2rem;
}

.footer_link__VR8Bk:after {
  transform-origin: bottom center;
  transition: transform 0.6s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  content: "";
  position: absolute;
  height: 1px;
  background: #fff;
  left: 0;
  width: 100%;
  bottom: 0;
}

.footer_link__VR8Bk:focus-visible:after,
.footer_link__VR8Bk:hover:after {
  transform: scaleY(10) translateZ(0);
  transition-duration: 0.3s;
}
```

### JavaScript

No JavaScript required - pure CSS transitions.

### Explanation

- **Structure**: Uses an `::after` pseudo-element to create a white underline beneath each footer link.
- **Initial State**: The line is 1px tall.
- **Hover/Focus State**: The line scales vertically to `scaleY(10)`, making it 10px tall.
- **Timing**: 0.6s transition normally, 0.3s on hover/focus.
- **Transform Origin**: `bottom center` ensures the line expands upward from the bottom edge.
- **Note**: Also includes arrow animation on hover (see Arrow Animation below).

---

## 12. Arrow Icon Animation

**Location:** Footer links, various interactive elements

**Description:** An arrow icon that transforms into an "X" when active, with the arrow lines rotating and the horizontal line sliding out.

### CSS

```css
.arrow_arrow__TRPcj {
  display: inline-block;
  position: relative;
  width: 0.6em;
  height: 0.6em;
}

.arrow_arrow__TRPcj:after,
.arrow_arrow__TRPcj:before {
  content: "";
  position: absolute;
  background: currentcolor;
  transition: transform 0.6s cubic-bezier(0.26, 1.04, 0.54, 1);
  left: 50%;
  width: 0.1em;
  height: 50%;
  transform: translateX(-50%);
}

.arrow_arrow__TRPcj:before {
  top: 0;
  transform-origin: top center;
}

.arrow_arrow__TRPcj:after {
  bottom: 0;
  transform-origin: bottom center;
}

.arrow_arrow__TRPcj .arrow_line__WQ3uF {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.1em;
  overflow: hidden;
  transform: translateY(-50%);
}

.arrow_arrow__TRPcj .arrow_line__WQ3uF:after,
.arrow_arrow__TRPcj .arrow_line__WQ3uF:before {
  top: 0;
  width: 100%;
  height: 100%;
}

.arrow_arrow__TRPcj .arrow_line__WQ3uF:before {
  left: 0;
}

.arrow_arrow__TRPcj .arrow_line__WQ3uF:after {
  right: 0;
  transform: translateX(calc(100% + 0.2em));
}

.arrow_arrow__TRPcj.arrow_isActive__4dNy6:before {
  transform: translate3d(-50%, 0, 0) rotate(-45deg) scaleY(1.57);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);
}

.arrow_arrow__TRPcj.arrow_isActive__4dNy6:after {
  transform: translate3d(-50%, 0, 0) rotate(45deg) scaleY(1.57);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);
}

.arrow_arrow__TRPcj.arrow_isActive__4dNy6 > span:before {
  transform: translate3d(calc(-100% - 0.2em), 0, 0);
}
```

### JavaScript

```typescript
// Example usage (not currently implemented in the codebase):
const [isActive, setIsActive] = useState(false)

<div className={`arrow_arrow__TRPcj ${isActive ? 'arrow_isActive__4dNy6' : ''}`}>
  <span className="arrow_line__WQ3uF"></span>
</div>
```

### Explanation

- **Structure**: Uses `::before` and `::after` pseudo-elements for the vertical arrow lines, and a `.arrow_line__WQ3uF` element for the horizontal line.
- **Initial State**: The `::before` and `::after` form a vertical arrow pointing right. The horizontal line is visible.
- **Active State**: When `arrow_isActive__4dNy6` is added:
  - The vertical lines rotate (`-45deg` and `45deg`) and scale (`scaleY(1.57)`) to form an X.
  - The horizontal line slides out to the left (`translateX(calc(-100% - 0.2em))`).
- **Timing**: 0.6s transition normally, 0.3s when active for a snappier feel.
- **Easing**: Uses different easing functions for different states.

---

## 13. Fund Slides Title Underline

**Location:** "Our Funds" section on homepage

**Description:** A vertical line that appears beneath fund title words on hover/active/focus, creating an underline effect.

### CSS

```css
.fundSlides_title__AYYrI {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 6.5rem;
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.04em;
  pointer-events: all;
}

.fundSlides_title__AYYrI span {
  position: relative;
}

.fundSlides_title__AYYrI span:before {
  content: "";
  position: absolute;
  bottom: -0.05rem;
  left: 0;
  width: 100%;
  height: 1rem;
  background: currentcolor;
  transform: scaleY(0) translateZ(0);
  transform-origin: center bottom;
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.fundSlides_title__AYYrI:active span:before,
.fundSlides_title__AYYrI:focus-visible span:before,
.fundSlides_title__AYYrI:hover span:before {
  transform: scaleY(1) translateZ(0) !important;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
}
```

### JavaScript

No JavaScript required - pure CSS transitions.

### Explanation

- **Structure**: Each word in the title is wrapped in a `<span>`, and each span has a `::before` pseudo-element for the underline.
- **Initial State**: The underline starts at `scaleY(0)`, making it invisible.
- **Hover/Active State**: The underline scales to `scaleY(1)`, revealing a 1rem tall underline beneath each word.
- **Timing**: 0.6s transition normally, 0.3s on hover/active.
- **Transform Origin**: `center bottom` ensures the line expands upward from the bottom.

---

## 14. Cookie Banner Slide-Up Animation

**Location:** Cookie consent banner (bottom of page)

**Description:** The cookie banner slides up from the bottom of the screen with a delay.

### CSS

```css
@keyframes show-in {
  0% {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
  to {
    visibility: visible;
    transform: translateZ(0);
  }
}

#hs-eu-cookie-confirmation {
  position: fixed;
  z-index: 15;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3.125rem;
  background-color: #000 !important;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  animation: show-in 0.8s cubic-bezier(0.9, 0, 0.1, 1) 1s backwards;
}
```

### JavaScript

No JavaScript required - pure CSS animation triggered automatically.

### Explanation

- **Keyframes**: The `@keyframes show-in` defines the animation from hidden and translated down 100% to visible and in position.
- **Animation Properties**: 
  - Duration: 0.8s
  - Easing: `cubic-bezier(0.9, 0, 0.1, 1)`
  - Delay: 1s (banner appears 1 second after page load)
  - `backwards` fill mode ensures the initial state is applied before the delay
- **Effect**: Banner slides up from below the viewport after a 1-second delay.

---

## 15. Image Fade-In Animation

**Location:** Images throughout the site

**Description:** Images fade in when they finish loading.

### CSS

```css
.image_image__VjCRd {
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
}

.image_image__VjCRd.image_isLoaded__Ncctg {
  opacity: 1;
}
```

### JavaScript

```typescript
// Example implementation (not currently in codebase):
const [isLoaded, setIsLoaded] = useState(false)

<img 
  className={`image_image__VjCRd ${isLoaded ? 'image_isLoaded__Ncctg' : ''}`}
  onLoad={() => setIsLoaded(true)}
  src="/path/to/image.jpg"
/>
```

### Explanation

- **Initial State**: Images start with `opacity: 0`, making them invisible.
- **Loaded State**: When `image_isLoaded__Ncctg` is added (typically via JavaScript when the image's `onLoad` event fires), opacity transitions to `1`.
- **Timing**: 0.5s transition for a smooth fade-in effect.
- **Purpose**: Prevents showing partially-loaded images and creates a polished loading experience.

---

## 16. Underlined Link Animation

**Location:** Links with `.a--underlined` class

**Description:** A horizontal line that animates from left to right beneath links on hover/active/focus.

### CSS

```css
.a--underlined {
  display: inline-block;
  position: relative;
}

.a--underlined:after {
  transform: scaleX(0) translateZ(0);
  transform-origin: left center;
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  pointer-events: none;
  content: "";
  position: absolute;
  height: 1px;
  background: currentColor;
  left: 0;
  width: 100%;
  bottom: 0;
}

.a--underlined.isActive:after,
.a--underlined:active:after,
.a--underlined:focus-visible:after,
.a--underlined:hover:after {
  transform: none;
  transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
}
```

### JavaScript

No JavaScript required - pure CSS transitions (though `.isActive` class can be added via JS if needed).

### Explanation

- **Structure**: Uses an `::after` pseudo-element to create the underline.
- **Initial State**: The line starts at `scaleX(0)`, making it invisible (collapsed to 0 width).
- **Hover/Active State**: The line scales to full width (`transform: none` resets to `scaleX(1)`).
- **Timing**: 0.6s transition with smooth easing.
- **Transform Origin**: `left center` ensures the line expands from left to right.

---

## Summary of Animation Techniques

### Common Patterns

1. **Scale Animations**: Many animations use `scaleX()` or `scaleY()` to create reveal effects (lines, underlines).
2. **Transform Animations**: `translate3d()` and `translateZ()` are used for slide-in/slide-out effects, with hardware acceleration.
3. **Opacity Transitions**: Fade-in/fade-out effects using `opacity` transitions.
4. **Pseudo-elements**: `::before` and `::after` are extensively used to create animated decorative elements without adding extra HTML.
5. **CSS Custom Properties**: The `--index` variable is used for staggered animations.
6. **Easing Functions**: Custom `cubic-bezier()` functions create smooth, natural-feeling animations.
7. **State Management**: React `useState` and `useEffect` control when animations trigger.

### Performance Considerations

- All transforms use `translateZ(0)` or `translate3d()` to enable hardware acceleration.
- `will-change: transform` is used on some elements to hint the browser about upcoming animations.
- Transitions are preferred over animations where possible for better performance.
- `requestAnimationFrame` is used in JavaScript to ensure smooth timing.

