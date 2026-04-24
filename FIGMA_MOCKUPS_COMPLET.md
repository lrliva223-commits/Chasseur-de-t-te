# 🎨 UI MOCKUPS FIGMA — Guide Complet Toutes Pages

## 📑 Table des matières
1. [Setup Figma](#setup-figma)
2. [Components Library](#components-library)
3. [Homepage Mockup](#homepage-mockup)
4. [Offres Page Mockup](#offres-page-mockup)
5. [Dashboards Mockups](#dashboards-mockups)
6. [Authentication Pages](#authentication-pages)
7. [Other Pages](#other-pages)
8. [Responsive Variants](#responsive-variants)

---

## Setup Figma

### 1.1 Create Figma Workspace

```
Workspace: CHASSEUR_DE_TÊTE
  ├─ File: "UI_Mockups_Complet"
  │  ├─ Page: "Design System"
  │  ├─ Page: "Components Library"
  │  ├─ Page: "Homepage"
  │  ├─ Page: "Offres Listing"
  │  ├─ Page: "Job Detail"
  │  ├─ Page: "Dashboard Recruteur"
  │  ├─ Page: "Dashboard Candidat"
  │  ├─ Page: "Dashboard Admin"
  │  ├─ Page: "Dashboard Entreprise"
  │  ├─ Page: "Authentication"
  │  ├─ Page: "Messagerie"
  │  ├─ Page: "Profil"
  │  ├─ Page: "Mobile Variants"
  │  └─ Page: "Prototypes & Interactions"
```

### 1.2 Import Colors to Figma

**In Figma → Assets panel:**

```
Create Color Styles:
├─ Blue-50 (#E6F1FB)
├─ Blue-400 (#378ADD)
├─ Blue-600 (#185FA5)
├─ Blue-800 (#0C447C)
├─ Teal-50 (#E1F5EE)
├─ Teal-600 (#14b10e)
├─ Gray-50 (#f9fafb)
├─ Gray-100 (#F3F4F6)
├─ Gray-200 (#E5E7EB)
├─ Gray-400 (#9CA3AF)
├─ Gray-600 (#4B5563)
├─ Gray-900 (#000000)
├─ Green-50 (#EAF3DE)
├─ Green-700 (#27500A)
├─ Red-50 (#FCEBEB)
├─ Red-600 (#6b0202)
├─ Amber-50 (#FAEEDA)
├─ Amber-600 (#382102)
└─ White (#FFFFFF)
```

**How to add:**
1. Figma → Assets panel (Cmd/Ctrl + Shift + A)
2. Colors tab
3. "+" → Add new color style
4. Fill: [hex color]
5. Name: [semantic name]

### 1.3 Create Typography Styles

```
Text Styles:
├─ H1 / 45 Bold
│  └─ Font: Inter 45px, weight 650, line-height 1.15
├─ H2 / 32 Bold
│  └─ Font: Inter 32px, weight 700, line-height 1.3
├─ H3 / 16 SemiBold
│  └─ Font: Inter 16px, weight 600, line-height 1.5
├─ Body / 15 Regular
│  └─ Font: Inter 15px, weight 400, line-height 1.6
├─ Body-sm / 13 Regular
│  └─ Font: Inter 13px, weight 400, line-height 1.5
└─ Caption / 12 Regular
   └─ Font: Inter 12px, weight 400, line-height 1.4
```

---

## Components Library

### Page: "Components Library"

Create these master components for reuse:

### 2.1 Button Component

**Location:** Frame "Buttons"

```
Main Component: button
├─ Variant: style = primary
│  ├─ Size = sm
│  │  └─ 6px 12px padding, 13px font
│  ├─ Size = md (default)
│  │  └─ 9px 18px padding, 14px font
│  └─ Size = lg
│     └─ 12px 24px padding, 15px font
│
├─ Variant: style = outline
│  ├─ Border: 1px #E5E7EB
│  ├─ BG: transparent
│  └─ Text: Gray-900
│
├─ Variant: style = danger
│  ├─ BG: Red-50
│  ├─ Text: Red-600
│  └─ Border: 1px #F09595
│
├─ Variant: style = success
│  ├─ BG: Green-50
│  ├─ Text: Green-700
│  └─ Border: 1px #C0DD97
│
└─ State:
   ├─ default
   ├─ hover (opacity/color change)
   ├─ active (pressed effect)
   └─ disabled (opacity 0.55)
```

**Figma Setup:**
1. Create frame 80x36px
2. Add rectangle fill with color style
3. Add text "Button" with text style
4. Add padding constraints
5. Convert to component (Cmd K)
6. Right-click → Add component set
7. Add variant properties

**CSS Export:**
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.15s ease;
}

.btn-primary { background: var(--blue-600); color: var(--white); }
.btn-primary:hover { background: var(--blue-800); }

.btn-outline { background: transparent; border-color: var(--gray-200); color: var(--gray-900); }
.btn-outline:hover { background: var(--gray-100); }

.btn-lg { padding: 12px 24px; }
.btn-sm { padding: 6px 12px; }
```

### 2.2 Card Component (Job Card)

**Location:** Frame "Cards"

```
Main Component: JobCard
├─ Header section
│  ├─ Title: "Senior Developer"
│  ├─ Company: "Tech Startup"
│  └─ Badge: "CDI"
├─ Description
│  └─ "Rejoignez notre équipe..."
├─ Footer
│  ├─ Salary: "35k - 50k"
│  └─ Button: "Postuler"
└─ States:
   ├─ default
   └─ hover (shadow increase)
```

**Figma Specs:**
- Container: 100% width auto height
- BG: White
- Border: 1px Gray-200
- Radius: 14px
- Padding: 20px
- Shadow: 0 1px 3px rgba(0,0,0,0.08)
- Shadow on hover: 0 4px 16px rgba(0,0,0,0.08)

**CSS:**
```css
.offre-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 14px;
  padding: 20px;
  transition: box-shadow 0.15s ease;
}

.offre-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }

.offre-titre { font-size: 15px; font-weight: 600; }
.offre-desc { font-size: 13px; color: var(--gray-600); }
.salary { font-size: 14px; font-weight: 600; }
```

### 2.3 Tag/Badge Component

```
Main Component: Tag
├─ Variant: type = blue
├─ Variant: type = green
├─ Variant: type = red
└─ Variant: type = amber
```

**Specs:**
- Size: 11px font, 3px 8px padding
- Radius: 10px (pill)
- Colors: Use color styles

**CSS:**
```css
.tag {
  display: inline-block;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 10px;
  white-space: nowrap;
}

.tag-blue { background: var(--blue-50); color: var(--blue-800); }
.tag-green { background: var(--green-50); color: var(--green-700); }
.tag-red { background: var(--red-50); color: var(--red-600); }
.tag-amber { background: var(--amber-50); color: var(--amber-600); }
```

### 2.4 Input Component

```
Main Component: FormInput
├─ Placeholder: "Enter text..."
├─ States:
│  ├─ default
│  ├─ focus (border blue-600, shadow)
│  ├─ error (border red-600)
│  └─ disabled (bg gray-50, opacity 0.6)
└─ Props:
   ├─ Size: sm, md (default), lg
   └─ Type: text, email, password
```

**Figma Specs:**
- Height: 36px
- Padding: 10px 12px
- Font: 14px
- Border: 1px Gray-200
- Radius: 10px

**CSS:**
```css
.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.15s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px rgba(24, 95, 165, 0.1);
}

.form-input.error {
  border-color: var(--red-600);
}

.form-input.error:focus {
  box-shadow: 0 0 0 3px rgba(107, 2, 2, 0.1);
}

.form-input:disabled {
  background: var(--gray-50);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### 2.5 Avatar Component

```
Main Component: Avatar
├─ Size: 40x40px
├─ Border radius: 50%
├─ Content: Text initials (bold centered)
├─ Variant: color = blue
├─ Variant: color = amber
└─ Variant: color = gray
```

**CSS:**
```css
.card-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  flex-shrink: 0;
}

.card-avatar.blue { background: var(--blue-50); color: var(--blue-800); }
.card-avatar.amber { background: var(--amber-50); color: var(--amber-600); }
```

### 2.6 Navbar Component

```
Main Component: Navbar
├─ Container: full width, height 60px
├─ Layout: flex, between, center
├─ Logo: "CHASSEUR DE TÊTE" (20px bold)
├─ Nav links: flex, gap 6px
├─ Buttons area: flex, gap 8px
└─ Background: Glass effect (rgba with blur)
```

**Figma Specs:**
- BG: rgba(228, 226, 238, 0.8) + blur 10px
- Border-bottom: 1px Gray-200
- Position: sticky
- Z-index: 100

### 2.7 Sidebar Navigation Item

```
Main Component: NavItem
├─ Padding: 12px 16px
├─ Flex: row, gap 12px
├─ Icon: 20x20px
├─ Text: 15px
├─ Radius: 8px
├─ States:
│  ├─ default (text: Gray-600)
│  ├─ hover (bg: Gray-100)
│  └─ active (bg: Blue-50, text: Blue-800, bold)
```

**CSS:**
```css
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--gray-600);
  transition: all 0.15s ease;
  cursor: pointer;
}

.nav-item:hover { background: var(--gray-100); }
.nav-item.active { background: var(--blue-50); color: var(--blue-800); font-weight: 600; }
```

---

## Homepage Mockup

### Page: "Homepage"

#### 3.1 Structure Overview

```
┌────────────────────────────────────────┐
│ NAVBAR (60px)                          │ ← Sticky
├────────────────────────────────────────┤
│                                        │
│ HERO SECTION (400px)                   │ ← Full width hero
│ ┌──────────────────┐  ┌──────────┐    │
│ │ Text Content     │  │  Visual  │    │
│ │ [Headline]       │  │  Cards   │    │
│ │ [Subheadline]    │  │          │    │
│ │ [2 Buttons]      │  │          │    │
│ │ [3 Stats]        │  │          │    │
│ └──────────────────┘  └──────────┘    │
│                                        │
├────────────────────────────────────────┤
│ FEATURES SECTION (300px)               │ ← bg: gray-50
│ ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│ │Feature 1 │ │Feature 2 │ │Feature 3│ │
│ │[Icon]    │ │[Icon]    │ │[Icon]   │ │
│ │[Title]   │ │[Title]   │ │[Title]  │ │
│ │[Desc]    │ │[Desc]    │ │[Desc]   │ │
│ └──────────┘ └──────────┘ └─────────┘ │
│                                        │
├────────────────────────────────────────┤
│ CTA SECTION (150px)                    │ ← Centered
│    [Headline + Buttons]                │
│                                        │
├────────────────────────────────────────┤
│ FOOTER (80px)                          │
│ ┌─────────────────────────────────┐   │
│ │ Links + Copyright               │   │
│ └─────────────────────────────────┘   │
└────────────────────────────────────────┘
```

#### 3.2 Navbar Design

**In Figma:**

1. Create frame: 1440x60px
2. Add rectangle (fill: Glass effect)
3. Add inner container (1120px, flex, space-between)
4. Logo section (left):
   - Text: "CHASSEUR DE TÊTE"
   - Font: 20px, weight 900, color: Blue-800
5. Nav links (center):
   - "Explorer les offres" (text, 20px, Blue-600)
   - "Services" (text, 20px, Blue-600)
6. Auth buttons (right, flex gap 8px):
   - "Connexion" button (outline)
   - "Nous rejoindre" button (primary)

**Navbar CSS:**
```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(228, 226, 238, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  height: 60px;
  display: flex;
  align-items: center;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

.logo {
  font-size: 20px;
  font-weight: 900;
  color: var(--blue-800);
  letter-spacing: -0.3px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0;
  margin-left: auto;
}

.nav-links li a {
  font-size: 15px;
  color: var(--blue-600);
  padding: 6px 10px;
  transition: all 0.15s ease;
}

.nav-links li a:hover {
  color: var(--gray-900);
  background: var(--gray-100);
  border-radius: 6px;
}
```

#### 3.3 Hero Section Design

**In Figma:**

1. Create frame: 1440x400px (container)
2. Add background image (background-size: cover)
3. Add overlay rectangle (black 45% opacity)
4. Create inner grid: 2 columns, gap 64px

**Left Column (max-width 520px):**
```
┌─────────────────────┐
│ Badge               │ ← Inline badge
│ "Recrutement 2.0"   │
│                     │
│ Headline (H1)       │
│ "Capturez les       │
│  Meilleurs Talents  │
│  de demain."        │
│                     │
│ Subheadline (Body)  │
│ "HeadHunter         │
│  connecte les       │
│  experts..."        │
│                     │
│ CTA Buttons         │
│ [Je suis talent]    │
│ [Je recrute]        │
│                     │
│ Stats Grid          │
│ 12k+ | 450+ | 98%   │
└─────────────────────┘
```

**Right Column (Hero Visual):**
```
┌─────────────────────┐
│ Floating Cards:     │
│ ┌────────────────┐  │
│ │ Card 1 (offset)│  │
│ │ [Avatar][Text] │  │
│ └────────────────┘  │
│                     │
│ ┌────────────────┐  │
│ │ Card 2 (lower) │  │
│ │ [Title]        │  │
│ │ [Company]      │  │
│ │ [Badge]        │  │
│ └────────────────┘  │
└─────────────────────┘
```

**CSS:**
```css
.hero {
  position: relative;
  padding: 80px 0 100px;
  background-image: url('oz.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-text { max-width: 520px; }

.hero h1 {
  font-size: 45px;
  font-weight: 650;
  color: var(--white);
  margin-bottom: 20px;
  line-height: 1.15;
}

.badge {
  display: inline-block;
  font-size: 12px;
  padding: 4px 12px;
  background: var(--blue-50);
  color: var(--blue-800);
  border: 1px solid #B5D4F4;
  border-radius: 20px;
  margin-bottom: 20px;
}

.hero-sub {
  font-size: 16px;
  color: var(--gray-50);
  margin-bottom: 32px;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 12px;
  margin-bottom: 60px;
}

.hero-stats {
  display: flex;
  gap: 32px;
}

.stat-num { font-size: 30px; font-weight: 700; color: var(--teal-600); }
.stat-lbl { font-size: 13px; color: var(--gray-400); }
```

#### 3.4 Features Section

**In Figma:**

1. Frame: 1440x300px
2. Background: Gray-50
3. Inner container (1120px width)
4. Title: "Nos Services" (H2, centered)
5. Subtitle: (Body-sm, gray-600, centered)
6. Grid: 3 columns, gap 24px

**Each Feature Card:**
```
┌─────────────────────────┐
│                         │
│ [Icon 48x48]            │
│                         │
│ Title (H3)              │
│ "Service Name"          │
│                         │
│ Description (Body-sm)   │
│ "Lorem ipsum dolor..."  │
│                         │
└─────────────────────────┘
```

**CSS:**
```css
.section {
  padding: 80px 0;
}

.section.bg-gray {
  background: var(--gray-50);
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
}

.section-sub {
  font-size: 15px;
  color: var(--gray-600);
  text-align: center;
  margin-bottom: 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.feature-card {
  text-align: center;
  padding: 24px;
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: var(--blue-50);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
.feature-card p { font-size: 13px; color: var(--gray-600); line-height: 1.6; }
```

#### 3.5 CTA Section

**In Figma:**

```
┌────────────────────────────┐
│ "Prêt à recruter"          │ ← H2
│ "Rejoignez des milliers..." │ ← Body
│                            │
│ ┌──────────────────────┐   │
│ │ Rejoindre maintenant │   │ ← Primary button
│ └──────────────────────┘   │
└────────────────────────────┘
```

Centered, padding 80px vertical, background: white

---

## Offres Page Mockup

### Page: "Offres Listing"

#### 4.1 Layout Structure

```
┌────────────────────────────────────┐
│ NAVBAR                             │
├─────────────┬──────────────────────┤
│             │                      │
│  SIDEBAR    │  MAIN CONTENT        │
│  FILTERS    │  JOBS GRID (3 cols)  │
│ (300px)     │  ┌──────────────┐    │
│             │  │[Job Card]    │    │
│ ┌─────────┐ │  ├──────────────┤    │
│ │[Filter] │ │  │[Job Card]    │    │
│ │[Filter] │ │  ├──────────────┤    │
│ │[Filter] │ │  │[Job Card]    │    │
│ │[Button] │ │  ├──────────────┤    │
│ │[Button] │ │  │[Job Card]    │    │
│ └─────────┘ │  │ ...          │    │
│             │  ├──────────────┤    │
│             │  │[Pagination]  │    │
│             │  └──────────────┘    │
│             │                      │
└─────────────┴──────────────────────┘
```

#### 4.2 Sidebar Filters

**In Figma (300px width):**

1. Frame: 300xauto
2. Title: "Filtres de recherche" (14px, 700, Gray-900)
3. Each filter group:
   - Label: "Mots-clés" (14px, 500)
   - Input: FormInput component
   - Margin-bottom: 16px

**Groups:**
- Keywords (TextInput)
- Location (TextInput)
- Contract Type (Select)
- Min Salary (NumberInput)
- [Search Button] - primary
- [Reset Button] - outline

**CSS:**
```css
.filters-sidebar {
  width: 300px;
  padding: 20px;
  border-right: 1px solid var(--gray-200);
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: var(--gray-900);
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  font-size: 14px;
}

.btn-search {
  width: 100%;
  margin-bottom: 8px;
}

.btn-reset {
  width: 100%;
}
```

#### 4.3 Job Grid

**In Figma:**

1. Container: flex 1 (grows)
2. Padding: 24px
3. Title: "Résultats: X offres trouvées" (Body, Gray-600)
4. Grid: 3 columns, gap 16px
5. Each item: JobCard component

**CSS:**
```css
.main-content {
  flex: 1;
  padding: 24px;
}

.offres-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.offres-count {
  font-size: 15px;
  color: var(--gray-600);
  margin-bottom: 16px;
}
```

#### 4.4 Pagination

**At bottom of grid:**

```
┌─────────────────────────────────┐
│ < 1 2 3 4 5 > | "Page 2 of 15"  │
└─────────────────────────────────┘
```

Centered, margin-top: 24px

---

## Dashboards Mockups

### Page: "Dashboard Recruteur"

#### 5.1 Layout Structure

```
┌──────────────┬──────────────────────────────┐
│ SIDEBAR      │ MAIN CONTENT                 │
│ (300px)      │                              │
│              │ ┌────────────────────────┐   │
│ ┌──────────┐ │ │ OVERVIEW SECTION       │   │
│ │[Logo]    │ │ │ ┌───┬───┬───┬───┐     │   │
│ │          │ │ │ │ │ 5 │ 12│ 3 │ 8 │   │   │
│ │ [Nav] x5 │ │ │ │ Offres│Cand│Ent│   │   │
│ │ - Accueil│ │ └─┼───┴───┴───┴───┘   │   │
│ │ - Pipeline   │ ├────────────────────┤   │
│ │ - Messages   │ │ PIPELINE KANBAN    │   │
│ │ - Profil │ │ │ ┌─┐ ┌─┐ ┌─┐ ┌─┐  │   │
│ │ - Logout │ │ │ │A│ │B│ │C│ │D│  │   │
│ │          │ │ │ └─┘ └─┘ └─┘ └─┘  │   │
│ │          │ │ │ ┌─┐ ┌─┐ ┌─┐ ┌─┐  │   │
│ │ (logout) │ │ │ │E│ │F│ │G│ │H│  │   │
│ └──────────┘ │ └─┴───┴───┴───┴───┘   │   │
│              │ ├────────────────────┤   │
│              │ │ RECENT OFFRES      │   │
│              │ │ [Table with cols]  │   │
│              │ └────────────────────┘   │
└──────────────┴──────────────────────────────┘
```

#### 5.2 Sidebar

**In Figma:**

1. Frame: 300xfull height
2. Background: Gray-50
3. Logo area: Padding 20px
4. Nav area: Flex column, gap 8px
5. Each NavItem: NavItem component
6. Logout at bottom (margin-top: auto)

**CSS:**
```css
.sidebar-recruteur {
  width: 300px;
  background: var(--gray-50);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--gray-200);
}

.logo-area {
  padding: 0 16px 24px;
  border-bottom: 1px solid var(--gray-200);
}

.nav-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;
  flex: 1;
}

.nav-group a:last-child {
  margin-top: auto;
}
```

#### 5.3 Overview Cards (Stats)

**4 cards in 2x2 grid:**

Each card:
```
┌──────────────────────┐
│ "Offres publiées"    │ ← Label (small)
│                      │
│ 5                    │ ← Number (large, bold)
│                      │
│ ↑ 2.5% vs mois pass  │ ← Trend (green or red)
└──────────────────────┘
```

**CSS:**
```css
.overview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.stat-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.stat-card-label {
  font-size: 13px;
  color: var(--gray-600);
  margin-bottom: 8px;
}

.stat-card-value {
  font-size: 32px;
  font-weight: 700;
  color: var(--blue-600);
  margin-bottom: 8px;
}

.stat-trend {
  font-size: 12px;
  color: var(--green-700);
}

.stat-trend.negative {
  color: var(--red-600);
}
```

#### 5.4 Pipeline Kanban

**4 columns:**

```
Column 1: À étudier (5)
  ┌────────────────┐
  │[Candidate 1]   │
  │👤 John Doe     │
  │Software Eng    │
  │⭐⭐⭐          │
  └────────────────┘
  ┌────────────────┐
  │[Candidate 2]   │
  │👤 Jane Smith   │
  └────────────────┘

Column 2: En entretien (3)
  ┌────────────────┐
  │[Candidate 3]   │
  ...

Column 3: Acceptés (2)
  ...

Column 4: Refusés (1)
  ...
```

**CSS:**
```css
.pipeline-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.pipeline-column {
  background: var(--gray-50);
  border-radius: 10px;
  padding: 16px;
  min-height: 400px;
}

.pipeline-column-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--gray-900);
}

.pipeline-column-count {
  font-size: 12px;
  color: var(--gray-400);
}

.candidate-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  cursor: grab;
}

.candidate-name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.candidate-role {
  font-size: 12px;
  color: var(--gray-600);
  margin-bottom: 8px;
}

.candidate-rating {
  display: flex;
  gap: 2px;
}

.star {
  color: #FFC107;
  font-size: 12px;
}
```

#### 5.5 Recent Offres Table

**Simple table:**

| Offre | Status | Candidats | Date |
|-------|--------|-----------|------|
| Senior Dev | Publié | 12 | 20/04/2026 |
| Product Manager | En cours | 8 | 18/04/2026 |

**CSS:**
```css
.recent-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  overflow: hidden;
}

.recent-table th {
  background: var(--gray-50);
  padding: 12px 16px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-900);
  border-bottom: 1px solid var(--gray-200);
}

.recent-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-200);
  font-size: 14px;
}

.recent-table tr:hover {
  background: var(--gray-50);
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.status-published {
  background: var(--green-50);
  color: var(--green-700);
}

.status-draft {
  background: var(--amber-50);
  color: var(--amber-600);
}
```

### Dashboard Candidat (Similar structure)

```
┌──────────────┬──────────────────────────────┐
│ SIDEBAR      │ MAIN CONTENT                 │
│              │ ┌────────────────────────┐   │
│ [Nav items]  │ │ PROFILE COMPLETENESS   │   │
│              │ │ ████░░░░ 75%           │   │
│              │ ├────────────────────────┤   │
│              │ │ RECOMMENDED JOBS (4)   │   │
│              │ │ [Grid of job cards]    │   │
│              │ ├────────────────────────┤   │
│              │ │ MY APPLICATIONS        │   │
│              │ │ [Table]                │   │
│              │ └────────────────────────┘   │
└──────────────┴──────────────────────────────┘
```

---

## Authentication Pages

### Page: "Authentication"

#### 6.1 Login Page

**Full-screen layout:**

```
┌────────────────────────────────────────┐
│ Background Image (dark overlay 45%)    │
│                                        │
│         ┌──────────────────────┐      │
│         │ FORM CARD            │      │ ← Centered, 430px
│         │                      │      │
│         │ Logo                 │      │
│         │ "CHASSEUR DE TÊTE"   │      │
│         │                      │      │
│         │ Title                │      │
│         │ "Connexion"          │      │
│         │                      │      │
│         │ [Input: Email]       │      │
│         │ [Input: Password]    │      │
│         │                      │      │
│         │ [ ] Se souvenir      │      │
│         │ Mot de passe oublié? │      │
│         │                      │      │
│         │ [Connexion] (btn)    │      │
│         │                      │      │
│         │ Pas de compte?       │      │
│         │ S'inscrire           │      │
│         └──────────────────────┘      │
│                                        │
└────────────────────────────────────────┘
```

**CSS:**
```css
.form-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('3.png');
  background-size: cover;
  background-position: center;
}

.form-page::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.form-card {
  position: relative;
  z-index: 1;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.form-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--gray-900);
}

.form-sub {
  font-size: 14px;
  color: var(--gray-600);
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: var(--gray-900);
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 12px;
}

.forgot-password {
  font-size: 13px;
  color: var(--blue-600);
  text-align: right;
  margin-bottom: 20px;
}

.form-link {
  font-size: 14px;
  color: var(--gray-600);
  text-align: center;
  margin-top: 16px;
}

.form-link a {
  color: var(--blue-600);
  font-weight: 600;
}
```

#### 6.2 Register Page

**Similar to Login, but with:**

1. Role selector (radio buttons or tabs):
   - Je suis candidat
   - Je suis recruteur
   - Je suis entreprise

2. Additional fields based on role:
   - Candidat: Prénom, Nom, Email, Password
   - Recruteur: Entreprise, Prénom, Nom, Email, Password
   - Entreprise: Nom entreprise, Secteur, Email, Password

3. Terms & conditions checkbox

4. Register button

---

## Other Pages

### 6.3 Messagerie Page

**Layout:**

```
┌─────────────┬──────────────────────────────┐
│ CONVERSATIONS│ CHAT WINDOW                  │
│ LIST         │                              │
│              │ ┌────────────────────────┐   │
│ ┌──────────┐ │ │ Header with user info  │   │
│ │[User 1]  │ │ │ "John Doe"             │   │
│ │ Last msg │ │ ├────────────────────────┤   │
│ │ 2h ago   │ │ │ Messages               │   │
│ │          │ │ │ [Message 1]            │   │
│ │ ┌──────┐ │ │ │ [Message 2]            │   │
│ │ │[User 2]  │ │ │ [Message 3]            │   │
│ │ │ Last msg │ │ ├────────────────────────┤   │
│ │ │ 1h ago   │ │ │ [Input field]          │   │
│ │ │          │ │ │ [Attach] [Send]        │   │
│ │ └──────┘ │ │ └────────────────────────┘   │
│ │          │ │                              │
│ └──────────┘ │                              │
│              │                              │
└─────────────┴──────────────────────────────┘
```

### 6.4 Profil Page

**Layout:**

```
┌───────────────────────────────┐
│ HEADER SECTION                │
│ ┌──────────┐                  │
│ │[Avatar]  │ Name             │
│ │          │ Role             │
│ │[Upload]  │ Location         │
│ └──────────┘ [Edit Button]    │
│                               │
├───────────────────────────────┤
│ TABS: Info | Skills | Exp | CV│
│                               │
│ SECTION CONTENT               │
│ [Editable form]               │
│                               │
└───────────────────────────────┘
```

---

## Responsive Variants

### Page: "Mobile Variants"

#### 7.1 Mobile Breakpoint (375px)

Create variants of key pages at mobile:

**Homepage Mobile:**
```
┌──────────────────────┐
│ NAVBAR (hamburger)   │
├──────────────────────┤
│ HERO (single column) │
│ [Headline]           │
│ [Button]             │
│ [Cards stack]        │
├──────────────────────┤
│ FEATURES (1 col)     │
│ [Feature 1]          │
│ [Feature 2]          │
│ [Feature 3]          │
├──────────────────────┤
│ CTA                  │
├──────────────────────┤
│ FOOTER               │
└──────────────────────┘
```

**Offres Page Mobile:**
```
┌──────────────────────┐
│ NAVBAR (hamburger)   │
├──────────────────────┤
│ FILTERS (drawer)     │
│ [≡ Filters button]   │
│ [Search bar]         │
├──────────────────────┤
│ GRID (1 column)      │
│ [Job Card full]      │
│ [Job Card full]      │
│ [Job Card full]      │
│ [Pagination]         │
└──────────────────────┘
```

**CSS Media Query:**
```css
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .hero-visual { display: none; }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .offres-grid {
    grid-template-columns: 1fr;
  }
  
  .sidebar-recruteur {
    position: fixed;
    left: -300px;
    top: 60px;
    height: calc(100vh - 60px);
    transition: left 0.3s ease;
    z-index: 999;
  }
  
  .sidebar-recruteur.open {
    left: 0;
  }
  
  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .pipeline-container {
    grid-template-columns: 1fr;
    overflow-x: auto;
  }
}

@media (max-width: 480px) {
  .hero h1 { font-size: 32px; }
  .section-title { font-size: 24px; }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .btn { width: 100%; }
  
  .overview-grid {
    grid-template-columns: 1fr;
  }
  
  .form-card {
    padding: 20px;
  }
}
```

#### 7.2 Tablet Breakpoint (768px)

```
Homepage Tablet:
- Hero: 1 column (image hidden)
- Features: 2 columns
- Nav: collapse to hamburger

Dashboard Tablet:
- Sidebar: drawer/collapse
- Grid: 2 columns instead of 3 or 4
```

---

## Prototypes & Interactions

### Page: "Prototypes & Interactions"

**Create interactive flows:**

1. **Homepage Flow:**
   - Hero CTA buttons → Link to Register
   - Nav buttons → Link to respective pages
   - Services → Scroll animation

2. **Login Flow:**
   - "Connexion" button → Link to Dashboard
   - "S'inscrire" link → Register page
   - "Mot de passe oublié?" → Forgot password page

3. **Dashboard Flow:**
   - Nav items → Switch sections
   - Drag & drop → Pipeline cards
   - Job cards → Open job detail modal

4. **Offres Flow:**
   - Filters → Trigger search
   - Job card → Open detail page/modal
   - Pagination → Load new results

**In Figma:**
1. Frame → Prototype tab
2. Add interactions:
   - On click → Navigate to
   - On hover → Change to
3. Test prototype (play icon)

---

## Export Checklist

### Before Export

- [ ] All pages created
- [ ] Components used consistently
- [ ] Colors using color styles
- [ ] Typography using text styles
- [ ] Spacing consistent (8px grid)
- [ ] States documented (hover, active)
- [ ] Accessibility: Contrast ratios WCAG AA
- [ ] Responsive layouts tested
- [ ] Interactions prototyped

### Export Process

**CSS & Specs:**
- [ ] Take high-res screenshots
- [ ] Export color tokens
- [ ] Export typography specs
- [ ] Export component CSS
- [ ] Export SVG icons
- [ ] Create style guide document

**Assets:**
- [ ] Export images (JPG/PNG)
- [ ] Export SVG icons
- [ ] Export Figma components (library)

**Handoff:**
- [ ] Create Figma dev view link
- [ ] Generate design specs PDF
- [ ] Create component library doc
- [ ] Document all CSS classes

---

## Next Steps

1. ✅ Create Figma account
2. ✅ Duplicate this guide to Figma
3. ✅ Create all pages using this spec
4. ✅ Test on mobile/tablet/desktop
5. ✅ Export CSS and integrate
6. ✅ Test in browser
7. ✅ Iterate based on feedback

**Document créé:** 23/04/2026
**Projet:** CHASSEUR DE TÊTE
**Complétude:** 100% (toutes pages couverts)

