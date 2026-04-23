# 🗺️ ROADMAP COMPLET : Wireframes → Maquettes → CSS

## PHASE 1 : WIREFRAMES (Week 1)

### Objectif
Établir la structure et le layout sans considérer le design visuel.

### Tasks

#### 1.1 Setup Figma
- [ ] Créer account Figma (si nécessaire)
- [ ] Créer Team/Workspace "CHASSEUR_DE_TÊTE"
- [ ] Créer File "Wireframes_Maquettes"
- [ ] Activer grille (Shift + G) : 12 colonnes, gutter 20px

#### 1.2 Page : Homepage Wireframe
**Deliverable:** Frame 1440x900+ avec sections
```
┌──────────────────────────┐
│ NAVBAR (60px)            │ ← Sketch simple bar
├──────────────────────────┤
│ HERO (200px)             │
│ [Headline]               │
│ [2 Buttons]              │
│ [3 Stats]                │
├──────────────────────────┤
│ FEATURES (3 col grid)    │
│ [Box] [Box] [Box]        │
├──────────────────────────┤
│ CTA (100px)              │
│ [Centered Button]        │
├──────────────────────────┤
│ FOOTER                   │
└──────────────────────────┘
```

**Process:**
- [ ] Créer 5 rectangles pour les sections
- [ ] Ajouter du texte (lorem ipsum)
- [ ] Utiliser gris neutre (#CCCCCC)
- [ ] Dimensionner correctement (responsive breakpoints)
- [ ] Nommer les frames correctement

#### 1.3 Page : Offres Wireframe
```
┌─────────────────────────────┐
│ NAVBAR                      │
├──────────┬──────────────────┤
│ SIDEBAR  │ GRID (3 col)     │
│ 300px    │ [Card]           │
│[Filter]  │ [Card]           │
│[Filter]  │ [Card]           │
│[Filter]  │ [Card]           │
│[Button]  │ [Pagination]     │
│          │                  │
└──────────┴──────────────────┘
```

**Process:**
- [ ] Sidebar gauche (300px, fixed)
- [ ] Main content (flex, grows)
- [ ] 3 colonnes pour cartes
- [ ] Pagination en bas

#### 1.4 Page : Login Wireframe
```
┌──────────────────────────┐
│ BACKGROUND IMAGE         │
│   ┌──────────────────┐   │
│   │ FORM (430px)     │   │
│   │ [Title]          │   │
│   │ [3 Inputs]       │   │
│   │ [Button]         │   │
│   │ [Link]           │   │
│   └──────────────────┘   │
└──────────────────────────┘
```

#### 1.5 Page : Dashboard Recruteur Wireframe
```
┌─────────────┬──────────────────────┐
│ SIDEBAR     │ MAIN (flex)          │
│ 300px fixed │                      │
│ [Nav items] │ [Overview Cards 4x]  │
│             │ [Stats Grid]         │
│             │ [Kanban Pipeline]    │
│             │ [Recent Offres Table]│
└─────────────┴──────────────────────┘
```

#### 1.6 Pages Additionnelles (Basse priorité)
- [ ] Candidat Dashboard wireframe
- [ ] Admin Dashboard wireframe
- [ ] Messagerie wireframe
- [ ] Profil wireframe

**Total for Phase 1:** 5-6 wireframe pages
**Time Estimate:** 3-5 jours

---

## PHASE 2 : DESIGN SYSTEM (Week 2)

### Objectif
Définir et mettre en place les tokens de design (couleurs, typo, espacements).

### Tasks

#### 2.1 Colors Page in Figma
**Créer une page dédiée :**
```
┌────────────────────────┐
│ COLORS PALETTE         │
├────────────────────────┤
│ PRIMARY                │
│ [#185FA5 Blue-600]     │
│ [#0C447C Blue-800]     │
│ [#14b10e Teal-600]     │
│                        │
│ NEUTRALS               │
│ [#000000 Gray-900]     │
│ [#4B5563 Gray-600]     │
│ [#E5E7EB Gray-200]     │
│ [#FFFFFF White]        │
│                        │
│ STATES                 │
│ [#27500A Green-700]    │
│ [#6b0202 Red-600]      │
│ [#382102 Amber-600]    │
└────────────────────────┘
```

**Process:**
- [ ] Créer rectangles pour chaque couleur
- [ ] Appliquer la couleur comme fill
- [ ] Labeller : "Blue-600 #185FA5"
- [ ] Copier as CSS pour export
- [ ] Créer Figma variables (optional mais recommandé)

#### 2.2 Typography Page
**Exemples text styles:**
```
H1 — 45px Bold
"Capturez les Meilleurs Talents"

H2 — 32px Bold
"Nos Services"

H3 — 16px SemiBold
"Titre de Section"

Body — 15px Regular
"Texte standard avec bonne lisibilité"

Small — 13px Regular
"Texte secondaire pour metas"

Caption — 12px Regular
"Légende très petite"
```

**Process:**
- [ ] Créer un text element pour chaque style
- [ ] Noter les properties (size, weight, line-height)
- [ ] Exporter comme CSS classes

#### 2.3 Spacing Reference
**Créer visual guide:**
```
8px   (xs)
12px  (sm)
16px  (md) ← Most common
24px  (lg)
32px  (xl)
48px  (2xl)
64px  (3xl)
80px  (4xl) ← Section padding
```

**Process:**
- [ ] Créer rectangles avec height = spacing value
- [ ] Labeller chacun
- [ ] Référencer dans design system doc

#### 2.4 Radius & Shadows
**Create reference components:**
- 6px radius (buttons)
- 10px radius (cards)
- 14px radius (large cards)
- Shadow (default)
- Shadow-md (elevated)

**Time Estimate:** 2-3 jours

---

## PHASE 3 : COMPONENTS LIBRARY (Week 2-3)

### Objectif
Créer des composants réutilisables dans Figma.

### Components à créer

#### 3.1 Button Component
**Variants:**
- [ ] `btn-primary` (default, hover, active, disabled)
- [ ] `btn-outline` (default, hover, active, disabled)
- [ ] `btn-danger` (default, hover, disabled)
- [ ] `btn-success` (default, hover, disabled)
- [ ] Sizes: `sm`, `md` (default), `lg`

**Figma Process:**
1. Create component "Button"
2. Add states/variants
3. Publish to component library

#### 3.2 Card Component
**Variants:**
- [ ] `offre-card` (job listing card)
- [ ] `user-card` (profile/candidate card)
- [ ] `company-card` (company info card)

#### 3.3 Form Components
- [ ] Input (text, email, password)
- [ ] Select (dropdown)
- [ ] Checkbox
- [ ] Radio
- [ ] Textarea

#### 3.4 Navigation Components
- [ ] Navbar (sticky)
- [ ] Sidebar nav item
- [ ] Breadcrumb
- [ ] Pagination

#### 3.5 Badges & Tags
- [ ] Badge (blue, green, red, amber)
- [ ] Tag variants

#### 3.6 Avatar Component
- [ ] Avatar (with initials)
- [ ] Color variants

**Process for Each Component:**
1. Design in Figma on a dedicated page
2. Create main component
3. Create variants (states)
4. Add description with specs
5. Publish to library
6. Export screenshot

**Time Estimate:** 3-4 days

---

## PHASE 4 : HIGH-FIDELITY MOCKUPS (Week 3-4)

### Objectif
Appliquer le design system aux wireframes pour créer les maquettes UI finales.

### Tasks

#### 4.1 Homepage Maquette
**From Wireframe:**
```
BEFORE:                    AFTER:
[Gray boxes]       →       [Styled sections]
[Generic text]     →       [Typography hierarchy]
[Simple buttons]   →       [Styled buttons + states]
```

**Process:**
- [ ] Dupliquer homepage wireframe
- [ ] Renommer "Homepage - Mockup"
- [ ] Appliquer les colors
- [ ] Utiliser typography styles
- [ ] Ajouter shadows/effects
- [ ] Importer composants du library
- [ ] Ajouter images placeholders
- [ ] Itérer + feedback

#### 4.2 Offres Page Maquette
- [ ] Sidebar filters (form styling)
- [ ] Job cards (avec hover effects)
- [ ] Pagination styled
- [ ] Responsive layout

#### 4.3 Login/Register Maquettes
- [ ] Form styling
- [ ] Input states (focus, error)
- [ ] Button styling
- [ ] Validation messages

#### 4.4 Dashboard Recruteur Maquette
- [ ] Sidebar navigation (styled)
- [ ] Overview cards
- [ ] Stats visualization
- [ ] Pipeline columns
- [ ] Tables/lists

**Deliverables:**
- [ ] Desktop mockup (1440px)
- [ ] Tablet mockup (768px)
- [ ] Mobile mockup (375px)

**Time Estimate:** 5-7 days

---

## PHASE 5 : EXPORT & CSS (Week 4)

### Objectif
Exporter les specs Figma et générer le CSS.

### Tasks

#### 5.1 Export Colors
```
✅ From Figma:
   - Select all color swatches
   - Right-click → Copy as CSS
   - Paste into style.css :root
   
✅ Verify:
   - Tous les colors exportés
   - Variables nommées correctement
   - Pas de duplication
```

#### 5.2 Export Typography
```
✅ Create CSS classes:
.h1 { font-size: 45px; font-weight: 650; ... }
.h2 { font-size: 32px; font-weight: 700; ... }
.body { font-size: 15px; line-height: 1.6; ... }
...
```

#### 5.3 Export Components
**For each component:**
```
1. Take high-res screenshot
2. Copy all CSS properties
3. Create CSS class
4. Add variants
5. Add states (:hover, :active, :disabled)
6. Test in browser
```

**Components to Export:**
- [ ] Button (.btn, .btn-primary, etc)
- [ ] Card (.offre-card, etc)
- [ ] Form inputs (.form-input, etc)
- [ ] Tags/Badges (.tag, .tag-blue, etc)
- [ ] Navigation (.nav-item, .sidebar, etc)

#### 5.4 Export Icons
```
✅ From Figma:
   - Export each icon as SVG
   - Save to /icons/ folder
   - Optimize SVGs
   
✅ Create icon CSS:
.icon { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
```

#### 5.5 Responsive CSS
```
✅ Mobile breakpoints:
@media (max-width: 768px) {
  .offres-grid { grid-template-columns: 1fr; }
  .sidebar { display: none; }
  .hamburger { display: flex; }
  ...
}
```

**Time Estimate:** 3-4 days

---

## PHASE 6 : IMPLEMENTATION (Week 5)

### Objectif
Intégrer le CSS dans les fichiers HTML.

### Tasks

#### 6.1 Update HTML Structure
**For each page:**
```
1. Review wireframe
2. Ensure HTML matches structure
3. Add proper CSS classes
4. Remove inline styles
5. Use semantic HTML
```

#### 6.2 Apply CSS
```
1. Update style.css with exported CSS
2. Import/include all components
3. Test in browser (all pages)
4. Check for inconsistencies
```

#### 6.3 Test Responsiveness
```
✅ Desktop (1440px)
✅ Tablet (768px)
✅ Mobile (375px)

Test:
- [ ] Layout adjusts correctly
- [ ] Text readable
- [ ] Buttons clickable
- [ ] Forms usable
- [ ] Navigation works
```

#### 6.4 Compare with Figma
```
✅ Open side-by-side comparison
✅ Check:
  - Colors match
  - Spacing correct
  - Typography hierarchy
  - Button styles
  - Card styling
  - Form inputs
  - Hover effects
  - Mobile layout
```

#### 6.5 Performance Optimization
```
- [ ] Minify CSS
- [ ] Optimize images
- [ ] Remove unused CSS
- [ ] Check load time
```

**Time Estimate:** 4-5 days

---

## PHASE 7 : REFINEMENT & DEPLOYMENT (Week 5-6)

### Tasks

#### 7.1 Accessibility
```
✅ Color contrast ratios (WCAG AA)
✅ Keyboard navigation
✅ Screen reader support
✅ Form labels
✅ Alt text for images
```

#### 7.2 Browser Testing
```
✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
```

#### 7.3 Device Testing
```
✅ iPhone
✅ iPad
✅ Android Phone
✅ Android Tablet
```

#### 7.4 User Testing
```
- [ ] Ask 3-5 users for feedback
- [ ] Iterate based on feedback
- [ ] Update Figma if needed
- [ ] Re-export CSS if changed
```

#### 7.5 Documentation
```
- [ ] Create component library doc
- [ ] Document CSS classes
- [ ] Create usage examples
- [ ] Add screenshots
```

#### 7.6 Deploy
```
- [ ] Push to production
- [ ] Monitor for issues
- [ ] Collect metrics
- [ ] Plan iterations
```

---

## TIMELINE SUMMARY

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1: Wireframes | 3-5 days | 5-6 wireframe pages |
| 2: Design System | 2-3 days | Colors, Typography, Spacing |
| 3: Components | 3-4 days | 6-8 component library |
| 4: Mockups | 5-7 days | High-fidelity UI (mobile/tablet/desktop) |
| 5: Export & CSS | 3-4 days | CSS files, exported assets |
| 6: Implementation | 4-5 days | Updated HTML, integrated CSS |
| 7: Refinement | 3-4 days | Testing, optimization, documentation |
| **TOTAL** | **23-32 days** | **Complete design system + implementation** |

**≈ 4-6 weeks** (working full-time on design phase)

---

## RISK MITIGATION

### Risks & Mitigation

| Risk | Mitigation |
|------|-----------|
| **Scope creep** | Define wireframes first, freeze scope before design |
| **Rework** | Get feedback early (Week 1-2) |
| **Export errors** | Double-check CSS values against Figma |
| **Responsive issues** | Test early and often (Week 4+) |
| **Brand inconsistency** | Use design tokens consistently |
| **Developer overhead** | Document everything thoroughly |

---

## SUCCESS METRICS

✅ All wireframes validated
✅ Design system documented
✅ Component library published
✅ CSS matches mockups (>95%)
✅ Responsive on all devices
✅ Accessibility WCAG AA
✅ Performance optimized (<3s load)
✅ User testing positive feedback

---

## TOOLS NEEDED

- **Figma** (free tier or Pro)
- **VS Code** (code editor)
- **Chrome DevTools** (testing)
- **Figma to Code plugins** (optional)
  - `Figma to HTML`
  - `CSS Exporter`
- **Responsive tester** (BrowserStack optional)

---

**Document créé:** 23/04/2026
**Projet:** CHASSEUR DE TÊTE
**Version:** 1.0
