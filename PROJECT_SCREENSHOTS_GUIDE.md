# Adding Project Screenshots

Your portfolio now supports **actual project footage/screenshots**! Follow these steps to add them.

## Setup

1. Create a `projects` folder in the `public/` directory:
   ```bash
   mkdir public/projects
   ```

2. Add your project screenshots to this folder. Recommended image formats:
   - PNG (best quality)
   - JPG (smaller file size)
   - WebP (modern format)

## Current Project Images Expected

The portfolio is configured for 3 projects:

### Featured Projects (Large Cards)

1. **School Management Production System**
   - File: `public/projects/school-management.png`
   - Recommended size: 1200×800px (or similar 3:2 aspect ratio)
   - Shows the main dashboard/interface of your school management system

2. **Gantt Chart Project Management**
   - File: `public/projects/gantt-chart.png`
   - Recommended size: 1200×800px (or similar 3:2 aspect ratio)
   - Shows the Gantt chart visualization feature

### Grid Projects (Smaller Cards)

3. **Documentation & Planning Tool**
   - File: `public/projects/documentation-tool.png` (optional)
   - Recommended size: 800×600px
   - Shows the documentation interface

## Adding Images to the Component

The images are referenced in `src/component/Projects.tsx`. Currently they have placeholder paths:

```typescript
image: "/projects/school-management.png"
image: "/projects/gantt-chart.png"
```

Just add your actual image files to the `public/projects/` folder and they'll automatically display!

## Image Optimization Tips

- **Keep file sizes small** (ideally under 500KB per image)
- **Use compression** for faster loading
- **Maintain consistent aspect ratios** for a polished look
- **Show key features** - capture the most impressive part of each project

## If You Don't Have Screenshots Yet

The portfolio will gracefully fallback to a placeholder UI showing:
- Browser chrome (address bar, traffic lights)
- Message: "Add screenshot to public/"

This lets you deploy now and add actual screenshots later!

## Updating Image Paths

If you want to organize images differently, just update the paths in `src/component/Projects.tsx`:

```typescript
const featuredProjects: Project[] = [
  {
    title: "School Management Production System",
    // ... other fields
    image: "/projects/school-management.png", // Change this path
  },
  // ...
];
```

## Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive on Linux/Mac)
- Verify files are in `public/projects/` directory
- Try rebuilding: `npm run build`
- Check browser console for 404 errors

**Images look blurry?**
- Use original/high-resolution screenshots
- Avoid scaling up small images
- Use PNG for text-heavy UI, JPG for photos

---

Happy portfolio building! 🚀
