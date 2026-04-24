# 📦 ASSETS & RESSOURCES FIGMA

## 🎨 Icons & Graphics

### Feather Icons (Free & Open Source)

**Utilisation recommandée:**

```
Navbar:
├─ Menu/Hamburger icon
├─ User icon (profile)
└─ Settings icon

Sidebar Navigation:
├─ Home icon
├─ Briefcase icon (jobs/offres)
├─ MessageSquare icon (messagerie)
├─ User icon (profil)
└─ LogOut icon

Dashboard:
├─ TrendingUp icon (stats)
├─ Users icon
├─ Send icon (applications)
├─ Clock icon (recent)
└─ ChevronRight icon (arrow)

Filters:
├─ Search icon
├─ MapPin icon (location)
├─ DollarSign icon (salary)
└─ Briefcase icon (job type)

Forms:
├─ Mail icon (email)
├─ Lock icon (password)
├─ Eye icon (show password)
├─ CheckCircle icon (success)
└─ AlertCircle icon (error)

Cards:
├─ Star icon (rating)
├─ Heart icon (favorite)
├─ Share2 icon (share)
└─ MoreHorizontal icon (menu)
```

**How to add to Figma:**

1. Google "Feather Icons" → feathericons.com
2. Find icon you need
3. Right-click → "Copy SVG"
4. Figma → Paste (Cmd/Ctrl V)
5. Adjust size/color
6. Create component (right-click)
7. Name: "icon-[name]"

### Figma Icon Plugins

**Recommended:**

- **Feather** (built-in to Figma)
  - Right panel → Assets
  - Click "Feather Icons"
  
- **Material Design Icons**
  - Search "Material Design Icons" in Figma Community
  - Add to file
  - Drag icons to canvas

### DIY Icons (If needed)

**Simple shapes for custom icons:**

```
Home icon:
├─ Rectangle (frame, 24x24)
├─ Trapezoid shape (roof)
├─ Rectangle (door)
└─ Squares (windows)

Message icon:
├─ Rectangle (envelope)
├─ Triangle (flap)
└─ Line (text inside)

Settings icon:
├─ Circle (center)
├─ Circles (around center for gears)
└─ Lines (connecting)
```

---

## 📸 Images & Placeholders

### Background Images

**Current usage in your HTML:**

- `oz.png` — Hero section background
- `3.png` — Login/Register page background

**Recommended approach:**

1. **Use Unsplash.com** (free images):
   - Search: "office", "team", "recruitment"
   - Download 1920x1080px
   - Compress with TinyPNG.com
   - Save to `/assets/images/`

2. **In Figma:**
   - Drag image to canvas
   - Scale to 1440x500px (hero)
   - Add overlay rectangle (45% black opacity)
   - Name: "bg-hero"

### Avatar Placeholders

**For user avatars:**

1. Use initials (recommended):
   - Generate in Figma with text
   - Colored backgrounds
   - Component with variants
   
2. Or use placeholder service:
   - ui-avatars.com
   - `https://ui-avatars.com/api/?name=John+Doe`

**Example in Figma:**

```
Component: Avatar
├─ 40x40px circle
├─ Background: Color style
├─ Text: Initials (bold, centered)
├─ Variant: bg=blue
├─ Variant: bg=amber
└─ Variant: bg=gray
```

### Job Company Logos

**For job cards:**

Use placeholder logos:
- `https://via.placeholder.com/32x32?text=TC`
- Or simple colored rectangles with company initials
- Or use CSS to generate colored boxes

---

## 🎯 Design System Tokens (Ready to Use)

### Color Tokens

```css
/* Primary */
--blue-50: #E6F1FB;
--blue-400: #378ADD;
--blue-600: #185FA5;
--blue-800: #0C447C;

/* Secondary */
--teal-50: #E1F5EE;
--teal-600: #14b10e;

/* Neutrals */
--gray-50: #f9fafb;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-400: #9CA3AF;
--gray-600: #4B5563;
--gray-900: #000000;

/* States */
--green-50: #EAF3DE;
--green-700: #27500A;
--red-50: #FCEBEB;
--red-600: #6b0202;
--amber-50: #FAEEDA;
--amber-600: #382102;

/* White */
--white: #FFFFFF;
```

### Spacing Scale

```css
/* 8px base grid */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 48px;
--space-6: 64px;
--space-7: 80px;
```

### Border Radius

```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-full: 50%;
```

### Typography Sizes

```css
/* Font sizes */
--text-xs: 12px;
--text-sm: 13px;
--text-base: 14px;
--text-lg: 15px;
--text-xl: 16px;
--text-2xl: 20px;
--text-3xl: 28px;
--text-4xl: 32px;
--text-5xl: 45px;

/* Font weights */
--weight-400: 400; /* Regular */
--weight-500: 500; /* Medium */
--weight-600: 600; /* SemiBold */
--weight-700: 700; /* Bold */
--weight-800: 800; /* Extra Bold */
--weight-900: 900; /* Black */
```

### Shadows

```css
--shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08);
```

---

## 🔤 Typography Files

### Google Fonts Setup

**Already in your HTML:**

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
```

**Usage:**

```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### Font Weights Needed

```
400 Regular — Body text, small text
500 Medium — Labels, some UI text
600 SemiBold — H3, nav items
700 Bold — H2, button text
800 Extra Bold — Special highlights
900 Black — H1, logo
```

---

## 🎨 Figma Community Files (Free)

### Recommended to import:

1. **Feather Icons** (by Cole Bemis)
   - 500+ free icons
   - Search in Figma Community
   - Add to your file

2. **Inter Font** (by Rasmus Andersson)
   - Pre-installed in Figma
   - Available for download

3. **Material Design 3** (by Google)
   - Complete design system
   - 500+ components
   - Great reference

4. **UI Kit Template** (multiple options)
   - Pre-built components
   - Save setup time

### How to import:

```
1. Figma → File menu
2. "Libraries" → "Browse community"
3. Search component name
4. Click "Add to file"
5. Now available in Assets panel
```

---

## 📱 Device Mockup Templates

### Standard Frames to Create

**Desktop (1440px)**
```
Frame: 1440x900+
Used for: Homepage, Dashboard, Offres
Standard container width: 1120px
```

**Tablet (768px)**
```
Frame: 768x1024+
Used for: Testing responsive
Grid columns: 2
Container: 728px (768 - 40px padding)
```

**Mobile (375px)**
```
Frame: 375x812+
Used for: Mobile-first testing
Grid columns: 1
Container: 335px (375 - 40px padding)
```

### How to create in Figma:

```
1. Right-click → Create frame
2. Set name: "Desktop 1440"
3. Set dimensions: 1440 x 900
4. Or use preset:
   - Click "+ Frame" button
   - Search "1440"
   - Select template
```

---

## 🔗 External Resources

### Design Inspiration

- **Dribbble.com** — Find recruitment/HR UI designs
- **Behance.net** — Job board inspiration
- **Awwwards.com** — Best web design practices
- **GoodUI.org** — UI patterns and best practices

### Tools

- **Figma** (main design tool) — figma.com
- **Color Picker** — colorpicker.com
- **Contrast Checker** — webaim.org/resources/contrastchecker
- **Font Pairing** — fontpair.co
- **Layout Grids** — figma.com (built-in)

### Color Tools

- **Coolors.co** — Generate color palettes
- **Color Hunt** — Pre-made palettes
- **Material Design Colors** — Google's color system
- **Adobe Color** — Professional color tool

### Icon Resources

- **Feather Icons** — feathericons.com (40+ icons)
- **Heroicons** — heroicons.com (453+ icons)
- **Material Icons** — fonts.google.com/icons
- **Font Awesome** — fontawesome.com (free CDN)

---

## 📊 Data for Demo Content

### Sample Job Listings

```json
[
  {
    "id": 1,
    "title": "Senior Developer",
    "company": "Tech Startup",
    "location": "Paris",
    "type": "CDI",
    "salary": "35k-50k",
    "description": "Rejoignez notre équipe de 50+ devs..."
  },
  {
    "id": 2,
    "title": "Product Manager",
    "company": "Scale-up",
    "location": "Remote",
    "type": "CDI",
    "salary": "40k-60k",
    "description": "Pilotez la stratégie produit..."
  },
  {
    "id": 3,
    "title": "UI/UX Designer",
    "company": "Agency",
    "location": "Bordeaux",
    "type": "CDD 12 mois",
    "salary": "28k-35k",
    "description": "Créez des expériences user..."
  }
]
```

### Sample Users

```json
[
  {
    "name": "John Doe",
    "role": "Software Engineer",
    "initials": "JD",
    "avatar_color": "blue",
    "rating": 4.5
  },
  {
    "name": "Jane Smith",
    "role": "Product Designer",
    "initials": "JS",
    "avatar_color": "amber",
    "rating": 4.8
  }
]
```

---

## ✅ Before Finalizing Mockups

### Accessibility Checklist

- [ ] Contrast ratios WCAG AA minimum (4.5:1)
- [ ] Text sizes ≥ 14px for readability
- [ ] Interactive elements ≥ 44x44px (touch target)
- [ ] Color not only method of communication
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation possible

### Performance Checklist

- [ ] Images optimized (< 100KB each)
- [ ] SVG icons instead of PNG where possible
- [ ] CSS minified
- [ ] No unused fonts/weights
- [ ] Lazy loading for images
- [ ] Critical CSS inline

### Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Next: Integration Checklist

### After Figma Mockups Complete:

1. ✅ Export all colors as CSS variables
2. ✅ Export all typography as CSS classes
3. ✅ Export all components as CSS
4. ✅ Export all icons as SVG
5. ✅ Export all images (JPG/PNG)
6. ✅ Create style guide document
7. ✅ Update HTML with new classes
8. ✅ Test in browser
9. ✅ Iterate based on testing
10. ✅ Deploy to production

---

## 📝 File Organization

### Recommended folder structure:

```
projetv/
├─ assets/
│  ├─ icons/
│  │  ├─ home.svg
│  │  ├─ search.svg
│  │  └─ ... more icons
│  ├─ images/
│  │  ├─ bg-hero.jpg
│  │  ├─ bg-login.jpg
│  │  └─ ... more images
│  └─ fonts/
│     └─ inter.woff2
├─ css/
│  ├─ style.css (main)
│  ├─ variables.css (colors, spacing)
│  ├─ components.css
│  └─ responsive.css
├─ js/
│  └─ ... existing files
├─ FIGMA_MOCKUPS_COMPLET.md
├─ FIGMA_QUICK_START.md
├─ ASSETS_RESOURCES.md (this file)
└─ index.html
```

---

**Document créé:** 23/04/2026
**Projet:** CHASSEUR DE TÊTE
**Status:** Ready to use ✅

Utilisez ce fichier comme référence pour tous les assets et ressources! 🎨
