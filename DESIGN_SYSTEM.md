# 🎨 CHASSEUR DE TÊTE — Design System & Figma Guide

## 📋 Table des matières
1. [Wireframes requis](#wireframes-requis)
2. [Design System](#design-system)
3. [Export Figma → CSS](#export-figma--css)
4. [Implémentation](#implémentation)

---

## Wireframes requis

### 🔴 PRIORITÉ 1 (Essentiels)

#### 1. Homepage (index.html)
**Sections:**
- Navbar (sticky, 60px height)
- Hero (80px padding top, full-width background)
- Features/Services (grid)
- CTA secondaire
- Footer

**Wireframe Flow:**
```
┌─────────────────────────┐
│       NAVBAR (60px)     │ ← Sticky
├─────────────────────────┤
│                         │
│    HERO Section         │ ← 80px top padding
│  [Logo] [Headline]      │
│  [Buttons] [Stats]      │
│                         │
├─────────────────────────┤
│   FEATURES (3 cols)     │ ← Grid
├─────────────────────────┤
│   CTA SECTION           │
├─────────────────────────┤
│    FOOTER               │
└─────────────────────────┘
```

#### 2. Page Offres (offres.html)
**Layout:**
```
┌─────────────────────────────────┐
│        NAVBAR                   │
├──────────┬──────────────────────┤
│ SIDEBAR  │  GRID (3 cols)       │
│ FILTERS  │  [Offre Card]        │
│          │  [Offre Card]        │
│          │  [Offre Card]        │
│          │  [Offre Card]        │
│          │  [Pagination]        │
└──────────┴──────────────────────┘
```

**Sidebar Filters:**
- Keywords input
- Location input
- Contract type select
- Min salary input
- Buttons: Rechercher, Réinitialiser

**Card Elements:**
- Company logo (optional)
- Job title
- Company name
- Location
- Contract type (tag)
- Salary
- Apply button

#### 3. Login/Register
**Two-column layout:**
```
┌─────────────────────────┐
│  Background image       │
│  (overlay 45% black)    │
│  ┌─────────────────┐   │
│  │ Form Card       │   │ ← Center, 430px max
│  │ [Fields]        │   │
│  │ [Buttons]       │   │
│  │ [Link]          │   │
│  └─────────────────┘   │
└─────────────────────────┘
```

### 🟠 PRIORITÉ 2 (Important)

#### 4. Dashboard Recruteur
**Layout:**
```
┌────────────┬──────────────────────┐
│ SIDEBAR    │  Main Content        │
│ (300px)    │                      │
│ [Nav]      │ [Overview Cards]     │
│            │ [Stats Grid]         │
│            │ [Pipeline Kanban]    │
│            │ [Recent Offres]      │
└────────────┴──────────────────────┘
```

**Key Components:**
- Navigation items (Accueil, Pipeline, Messagerie, Déconnexion)
- Stats cards (Offres, Candidatures, Entretiens)
- Kanban pipeline (4 colonnes)
- Offres table/cards

#### 5. Dashboard Candidat
**Similar structure to Recruiter:**
- Profile progress bar
- Recommended jobs
- Applications history
- Profile completeness

### 🟡 PRIORITÉ 3 (Nice-to-have)

#### 6. Page Profil
- User info section
- Skills editor
- Experience timeline
- CV uploader

#### 7. Messagerie
- Conversation list (sidebar)
- Chat window
- Message input
- User avatars

#### 8. Dashboard Admin/Entreprise
- Similar dashboard structure
- Different data/metrics
- Management tables

---

## Design System

### Palette Couleurs

**Primary Colors (Actions)**
```css
--blue-600: #185FA5   /* Main CTA, Links */
--blue-800: #0C447C   /* Headlines, Hover */
--teal-600: #14b10e   /* Accents, Highlights */
```

**Neutrals**
```css
--gray-900: #000000   /* Text primary */
--gray-600: #4B5563   /* Text secondary */
--gray-400: #9CA3AF   /* Placeholder, captions */
--gray-200: #E5E7EB   /* Borders */
--gray-100: #F3F4F6   /* Light backgrounds */
--gray-50:  #f9fafb   /* Section alternates */
--white:    #FFFFFF
```

**States**
```css
--green-700: #27500A  /* Success */
--red-600:   #6b0202  /* Error */
--amber-600: #382102  /* Warning */
```

**Light Tints**
```css
--blue-50:  #E6F1FB
--green-50: #EAF3DE
--red-50:   #FCEBEB
--amber-50: #FAEEDA
--teal-50:  #E1F5EE
```

### Typographie

**Font Stack:** `'Inter', system-ui, -apple-system, sans-serif`

| Element | Size | Weight | Line-height | Letter-spacing |
|---------|------|--------|-------------|----------------|
| H1 | 45px | 650 | 1.15 | -0.8px |
| H2 | 32px | 700 | 1.3 | 0 |
| H3 | 16px | 600 | 1.5 | 0 |
| H4/Label | 14px | 500 | 1.5 | 0 |
| Body | 15px | 400 | 1.6 | 0 |
| Small | 13px | 400 | 1.5 | 0 |
| Caption | 12px | 400 | 1.4 | 0 |

### Espacements (Spacing Scale)

```
8px    = --space-xs
12px   = --space-sm
16px   = --space-md
24px   = --space-lg
32px   = --space-xl
48px   = --space-2xl
64px   = --space-3xl
80px   = --space-4xl
```

**Common Gaps:**
- Between nav items: 6px
- Card padding: 20px
- Container padding: 24px
- Section padding: 80px

### Border Radius

```
6px   = --radius-sm    (Buttons, small elements)
10px  = --radius-md    (Cards, inputs, modals)
14px  = --radius-lg    (Large cards)
50%   = --radius-full  (Avatars, badges)
```

### Shadows

```css
--shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08);
```

### Transitions

```css
--transition: 0.15s ease;
/* Applied to: background, color, box-shadow, border-color */
```

---

## Export Figma → CSS

### Step 1: Setup Figma File

**Structure:**
```
CHASSEUR_DE_TÊTE (Team/Workspace)
  └─ Design System
      ├─ Page "Colors" (swatches)
      ├─ Page "Typography" (examples)
      ├─ Page "Components" (reusable)
      └─ Page "Icons" (exported SVGs)
  └─ Wireframes
      ├─ Page "Public Pages" (Homepage, Login, Register)
      ├─ Page "Job Listing"
      ├─ Page "Dashboards"
      └─ Page "Other Pages"
  └─ Mockups
      ├─ Page "High-Fidelity UI"
      └─ Page "Prototypes"
```

### Step 2: Export Colors

**From Figma:**
1. Create rectangle shapes for each color
2. Label them: `--blue-600`, `--gray-900`, etc.
3. Right-click → Copy as CSS

**Export as CSS:**
```css
:root {
  --blue-50:  #E6F1FB;
  --blue-400: #378ADD;
  --blue-600: #185FA5;
  --blue-800: #0C447C;
  --teal-50:  #E1F5EE;
  --teal-600: #14b10e;
  --amber-50: #FAEEDA;
  --amber-600: #382102;
  --gray-50:  #f9fafb;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-400: #9CA3AF;
  --gray-600: #4B5563;
  --gray-900: #000000;
  --green-50: #EAF3DE;
  --green-700: #27500A;
  --red-50:   #FCEBEB;
  --red-600:  #6b0202;
  --white:    #FFFFFF;
}
```

### Step 3: Export Typography

**Figma Approach:**
1. Create text examples for each style (H1, H2, Body, etc)
2. Note the properties in Inspector panel
3. Convert to CSS classes

**CSS Output:**
```css
.h1 { font-size: 45px; font-weight: 650; line-height: 1.15; letter-spacing: -0.8px; }
.h2 { font-size: 32px; font-weight: 700; line-height: 1.3; }
.h3 { font-size: 16px; font-weight: 600; line-height: 1.5; }
.body-sm { font-size: 13px; line-height: 1.6; }
.caption { font-size: 12px; color: var(--gray-400); }
```

### Step 4: Export Components

**For each Figma Component (Button, Card, etc):**

**Figma:**
- Create component with all states (default, hover, disabled)
- Document properties in description

**CSS:**
```css
/* Example: Button Component */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--transition);
}

.btn-primary {
  background: var(--blue-600);
  color: var(--white);
  border-color: var(--blue-600);
}

.btn-primary:hover {
  background: var(--blue-800);
  border-color: var(--blue-800);
}

.btn-outline {
  background: transparent;
  color: var(--gray-900);
  border-color: var(--gray-200);
}

.btn-outline:hover {
  background: var(--gray-100);
}
```

### Step 5: Export Assets

**Icons:**
1. Export each icon as SVG from Figma
2. Save to `/icons/` folder
3. Use as `<img>` or inline SVG

**Example:**
```html
<svg class="icon icon-search" viewBox="0 0 24 24">
  <!-- SVG content -->
</svg>
```

```css
.icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
}
```

### Step 6: Create Specs Document

**Export as PDF/PNG:**
- Screenshots of each component
- With measurements overlaid
- Color values
- Text properties

---

## Implémentation

### 1. Update HTML Structure

Based on wireframes, update your HTML to match:

```html
<!-- Example: Offre Card from Figma -->
<div class="offre-card">
  <div class="offre-top">
    <div>
      <h3 class="offre-titre">Senior Developer</h3>
      <p class="offre-meta">Tech Startup • Paris</p>
    </div>
    <span class="tag tag-blue">CDI</span>
  </div>
  
  <p class="offre-desc">
    Rejoignez notre équipe de 50+ devs...
  </p>
  
  <div class="offre-footer">
    <span class="salary">35k - 50k MGA</span>
    <button class="btn btn-primary btn-sm">Postuler</button>
  </div>
</div>
```

### 2. Add CSS from Figma

Add exported CSS to `style.css`:

```css
/* ════════ COLORS ════════ */
:root { /* ... from Figma export ... */ }

/* ════════ TYPOGRAPHY ════════ */
.h1, .h2, .h3 { /* ... */ }

/* ════════ COMPONENTS ════════ */
.btn { /* ... */ }
.offre-card { /* ... */ }
.tag { /* ... */ }
```

### 3. Test Responsive Breakpoints

In Figma, create frames at:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

Then add media queries:

```css
@media (max-width: 768px) {
  .offres-grid { grid-template-columns: 1fr; }
  .sidebar { position: fixed; transform: translateX(-100%); }
  .hamburger { display: flex; }
}
```

### 4. Create Component Library (HTML)

Create reusable components as HTML includes:

```html
<!-- components/button.html -->
<button class="btn {{class}}">{{label}}</button>

<!-- components/card.html -->
<div class="offre-card">
  <div class="offre-top">
    <div>
      <h3 class="offre-titre">{{title}}</h3>
      <p class="offre-meta">{{meta}}</p>
    </div>
    <span class="tag {{tagClass}}">{{tag}}</span>
  </div>
  <!-- ... -->
</div>
```

### 5. Iterate & Refine

- Compare live site with Figma mockups
- Adjust spacing, colors, sizing
- Test on real devices
- Get feedback and update Figma
- Re-export and update CSS

---

## Checklist Complet

### Figma Setup
- [ ] Account créé
- [ ] Workspace "CHASSEUR_DE_TÊTE" créé
- [ ] Design System file avec colors/typography
- [ ] Components créés (Button, Card, Badge, Avatar)
- [ ] Wireframes dessinés (priorité 1-2)
- [ ] Mockups UI appliqués

### CSS Export
- [ ] Colors exported as CSS variables
- [ ] Typography classes créées
- [ ] Components CSS exporté
- [ ] Icons SVGs exported
- [ ] Media queries pour responsive

### Implementation
- [ ] HTML mis à jour avec bonnes classes
- [ ] CSS appliqué et testé
- [ ] Responsive designs testés
- [ ] Components réutilisables en place
- [ ] Dashboards stylisés

### QA
- [ ] Color consistency
- [ ] Typography hierarchy
- [ ] Spacing consistency
- [ ] Mobile responsive
- [ ] Accessibility (contrast ratios)

---

## Ressources Figma Utiles

- **Font:** Inter (disponible dans Figma)
- **Icons:** Feather Icons, Heroicons
- **Color Tools:** Figma's color picker with contrast checker
- **Responsive:** Auto Layout feature
- **Components:** Create/edit master components
- **Prototypes:** Link frames for user testing

---

**Document créé:** 23/04/2026
**Projet:** CHASSEUR DE TÊTE
**Status:** À implémenter
