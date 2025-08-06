# Images Folder Structure

This folder contains all images used throughout the Colin Mark website.

## Folder Organization

### `/portraits/`
- Personal headshots and professional photos
- Profile pictures for about page
- Team photos if applicable

### `/projects/`
- Project screenshots and mockups
- Portfolio item images
- Before/after project comparisons
- App screenshots and demos

### `/logos/`
- Company logos and client logos
- Brand assets and icons
- Third-party service logos

### `/icons/`
- Custom icons and graphics
- UI elements and decorative images
- Social media icons

## Usage Examples

```jsx
// Profile picture
<img src="/images/portraits/colin-headshot.jpg" alt="Colin Alcorn" />

// Project image
<img src="/images/projects/app-screenshot.png" alt="Mobile App Screenshot" />

// Client logo
<img src="/images/logos/client-logo.svg" alt="Client Company" />

// Custom icon
<img src="/images/icons/custom-icon.svg" alt="Feature Icon" />
```

## Best Practices

1. **File Naming**: Use lowercase with hyphens (kebab-case)
   - ✅ `colin-headshot.jpg`
   - ❌ `Colin_Headshot.JPG`

2. **File Formats**:
   - Photos: `.jpg` or `.webp` for best compression
   - Graphics/Icons: `.svg` for scalability
   - Screenshots: `.png` for crisp details

3. **File Sizes**: Optimize images for web
   - Profile photos: Keep under 500KB
   - Project images: Keep under 1MB
   - Icons: Use SVG when possible

4. **Alt Text**: Always include descriptive alt text for accessibility