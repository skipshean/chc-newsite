# Font Rendering Issues and Fixes

## Issues Identified

1. **Text Truncation**: Text appears truncated in Chrome ("Our Fund" instead of "Our Funds", "Contact U" instead of "Contact Us", etc.)
2. **Fonts Not Rendering**: Custom fonts (SuisseIntl, Manrope) are not rendering - generic sans-serif fonts are being used instead
3. **Manrope Font Declaration**: Manrope is incorrectly defined as part of SuisseIntl font-family with font-weight:600

## Root Cause

The fonts are loading (HTTP 200), but they're not being applied correctly. This is likely because:
- The CSS is minified into one line, which may cause Next.js processing issues
- Font-display:swap may be causing timing issues
- The font-family declarations may not be matching correctly

## Fixes Needed

1. **Fix Manrope Font Declaration**: Manrope should be a separate font-family, not part of SuisseIntl
2. **Ensure Fonts Load Before Rendering**: Use font-display:block or ensure fonts are preloaded
3. **Verify Font Paths**: Ensure font paths are correct in @font-face declarations
4. **Check CSS Processing**: Ensure Next.js is processing the minified CSS correctly

## Next Steps

1. Fix the Manrope font declaration
2. Test font rendering in Chrome
3. Verify all text displays correctly without truncation
4. Ensure fonts are applied to all elements

