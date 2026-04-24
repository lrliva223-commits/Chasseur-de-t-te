# 🚀 DÉMARRER IMMÉDIATEMENT DANS FIGMA

## Étape-par-étape pour créer la première page

---

## 1️⃣ SETUP FIGMA (5 minutes)

### Étape 1: Créer workspace

```
1. Aller à figma.com
2. Sign up / Log in
3. Click "+ Create new team"
   → Name: "CHASSEUR_DE_TÊTE"
   → Type: Free plan OK
4. Create new file
   → Name: "UI_Mockups_Complet"
   → Type: Design file
```

### Étape 2: Configurer grille

```
1. Vue principale (canvas)
2. Click View menu
3. Toggle "Show grid"
4. Click View → Grid settings
   → Grid type: Uniform grid
   → Pixel size: 8
5. Now you have 8px grid for snapping
```

### Étape 3: Créer première page

```
1. Right-click "Page 1" en bas
2. Rename to "Design System"
3. Créer nouveau page: "+"
4. Rename to "Components Library"
5. Créer nouveau page: "+"
6. Rename to "Homepage"
7. Créer nouveau page: "+"
8. Rename to "Offres Listing"
```

Résultat:
```
┌─────────────────────┐
│ Design System       │
│ Components Library  │
│ Homepage            │
│ Offres Listing      │
│ ...                 │
└─────────────────────┘
```

---

## 2️⃣ SETUP COLORS (10 minutes)

### Dans Design System page

**Étape 1: Créer swatches**

```
1. Open Assets panel (Cmd/Ctrl Shift + A)
2. Colors tab
3. Click "+" 
4. Create rectangle (R key)
5. Drag rectangle 100x50px
6. Click fill color
7. Paste hex: #E6F1FB
8. Right-click color circle
   → "Create color style"
   → Name: "Blue-50"
   → Press Enter
9. Repeat pour tous les colors
```

**Résultat (Visual layout):**

```
┌──────────────────────────────────────┐
│ PRIMARY COLORS                       │
│ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │#E6F1FB│ │#378ADD│ │#0C447C│      │
│ │Blue-50│ │Blue-  │ │Blue-  │      │
│ └──────┘ └──────┘ └──────┘         │
│                                      │
│ NEUTRAL COLORS                       │
│ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │#000000│ │#4B5563│ │#f9fafb│      │
│ │Gray-900│ │Gray-600│ │Gray-50│     │
│ └──────┘ └──────┘ └──────┘         │
│                                      │
│ STATE COLORS                         │
│ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │#27500A│ │#6b0202│ │#382102│      │
│ │Green  │ │Red    │ │Amber  │      │
│ └──────┘ └──────┘ └──────┘         │
└──────────────────────────────────────┘
```

---

## 3️⃣ SETUP TYPOGRAPHY (10 minutes)

### Dans Design System page

**Étape 1: Créer text styles**

```
1. Assets panel → "+" → "New text style"
2. Pour H1:
   - Create text frame with "H1 Headline"
   - Font: Inter, 45px, weight 650
   - Line height: 1.15
   - Letter spacing: -0.8px
   - Text style: "H1 / 45 Bold"
3. Repeat pour H2, H3, Body, etc.
```

**Visual layout sur canvas:**

```
┌──────────────────────────────────────┐
│ TYPOGRAPHY                           │
│                                      │
│ H1 / 45 Bold                         │ ← 45px
│ "Capturez les Meilleurs Talents"    │
│                                      │
│ H2 / 32 Bold                         │ ← 32px
│ "Nos Services"                       │
│                                      │
│ H3 / 16 SemiBold                     │ ← 16px
│ "Titre Section"                      │
│                                      │
│ Body / 15 Regular                    │ ← 15px
│ "Texte standard avec bonne lisib..." │
│                                      │
│ Caption / 12 Regular                 │ ← 12px
│ "Texte très petit"                   │
└──────────────────────────────────────┘
```

---

## 4️⃣ CRÉER BUTTON COMPONENT (15 minutes)

### Dans Components Library page

**Étape 1: Dessiner le bouton**

```
1. Create rectangle (R key)
   - Width: 120px, Height: 36px
   - Fill: using color style "Blue-600"
   - Corner radius: 6px (all corners)
   - Name this shape "Background"

2. Add text (T key)
   - Type: "Button Label"
   - Font: Inter 14px, weight 500
   - Color: White
   - Center align
   - Name: "Label"

3. Select both layers
   - Right-click → "Group"
   - Name group: "button-primary"
```

**Résultat:**

```
┌───────────────────────────────┐
│ Before:                       │
│ ┌─────────────────────┐      │
│ │ Blue rectangle      │      │
│ │ + white text        │      │
│ └─────────────────────┘      │
│                               │
│ After (as component):         │
│ Click "Create component"      │
│ in right panel                │
│                               │
│ ✓ Component created           │
│   button-primary             │
└───────────────────────────────┘
```

**Étape 2: Créer variante outline**

```
1. Dans Assets panel (left)
   - Voir "button-primary" component
   - Right-click → "Duplicate"
   - Rename to "button-outline"
   
2. Éditer button-outline:
   - Select "Background" shape
   - Change fill: transparent
   - Change stroke: 1px Gray-200
   - Change text color: Gray-900
   
3. Right-click → "Create component"
```

**Étape 3: Tester les instances**

```
1. Click "+" en haut du canvas
2. Search "button-primary"
3. Drag on canvas → Creates instance
4. Duplicate (Cmd D)
5. Hover sur duplicate
   → Change property (color style)
   → Change to "Blue-800" (hover state)
   → Name: "button-primary:hover"
```

**Résultat (Component Library):**

```
┌──────────────────────────────────┐
│ Components Library              │
│                                  │
│ ┌─────────────┐ ┌─────────────┐ │
│ │   Primary   │ │   Outline   │ │
│ │  Blue-600   │ │  Transparent│ │
│ │   Button    │ │   Button    │ │
│ └─────────────┘ └─────────────┘ │
│                                  │
│ ┌─────────────┐ ┌─────────────┐ │
│ │  Danger     │ │  Success    │ │
│ │  Red-50     │ │  Green-50   │ │
│ │  Button     │ │  Button     │ │
│ └─────────────┘ └─────────────┘ │
└──────────────────────────────────┘
```

---

## 5️⃣ CRÉER JOB CARD COMPONENT (20 minutes)

### Étape 1: Dessiner la structure

```
1. Create frame (F key)
   - Name: "JobCard"
   - Auto layout: ON
   - Direction: Vertical
   - Gap: 12px
   - Padding: 20px
   - Width: 100% (relative)
   - Height: auto
   - Background: White
   - Stroke: 1px Gray-200
   - Corner radius: 14px

2. Create subframes:
   a) Header (auto layout, horizontal)
      ├─ Title text (flex 1)
      │  - "Senior Developer"
      │  - H3 style, Gray-900
      └─ Badge (flex 0)
         - Tag component
         - "CDI"

   b) Meta (text)
      - "Tech Startup • Paris"
      - Body-sm style, Gray-400

   c) Description (text)
      - "Rejoignez notre équipe..."
      - Body-sm style, Gray-600

   d) Footer (auto layout, horizontal)
      ├─ Salary (flex 1)
      │  - "35k - 50k MGA"
      │  - 14px bold, Gray-900
      └─ Button (flex 0)
         - "Postuler" button
```

**Visual:**

```
┌─────────────────────────────────────┐
│ JobCard Component                   │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Senior Developer      [CDI Tag]  │ │
│ │ Tech Startup • Paris              │
│ │                                   │
│ │ Rejoignez notre équipe de 50+    │
│ │ développeurs...                  │
│ │                                   │
│ │ 35k - 50k MGA     [Postuler Btn] │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Étape 2: Convertir en composant**

```
1. Select entire frame "JobCard"
2. Right-click → "Create component"
3. Name: "JobCard"
```

**Étape 3: Créer variante hover**

```
1. Right-click JobCard component
2. "Create component set"
3. Component properties dialog:
   - Property: "state"
   - Values: default, hover
4. Duplicate card
5. Change shadow: 0 4px 16px...
6. Name: "JobCard/state=hover"
```

---

## 6️⃣ CRÉER HOMEPAGE (30 minutes)

### Navigate to "Homepage" page

**Section 1: Navbar (60px)**

```
1. Create frame
   - Width: 1440px (desktop standard)
   - Height: 60px
   - Auto layout: horizontal
   - Space between
   - Padding: 0 24px
   - Background: rgba(228, 226, 238, 0.8)
   - Effects: Blur 10px

2. Add logo (left)
   - Text: "CHASSEUR DE TÊTE"
   - 20px, weight 900, Blue-800

3. Add nav links (center)
   - Frame with auto layout
   - Gap: 32px
   - Items: "Offres", "Services"
   - 15px, Blue-600

4. Add buttons (right)
   - Frame with auto layout
   - Gap: 8px
   - Button: "Connexion" (outline)
   - Button: "S'inscrire" (primary)
```

**Result:**

```
┌──────────────────────────────────────────┐
│ [Logo] [Offres] [Services]  [Login][Join]│
└──────────────────────────────────────────┘
```

**Section 2: Hero (400px)**

```
1. Create frame
   - Width: 1440px
   - Height: 400px
   - Background: Image (oz.png)
   - Add overlay rectangle (black 45%)

2. Inner grid (2 columns)
   - Column 1 (520px): Text content
     ├─ Badge: "Recrutement 2.0"
     ├─ H1: "Capturez les Meilleurs..."
     ├─ Body: Subheadline
     ├─ Buttons: 2 CTA buttons
     └─ Stats: 3 stat boxes

   - Column 2: Visual cards
     ├─ Floating card 1 (top right)
     │  └─ Avatar + Name
     └─ Floating card 2 (lower left)
        └─ Company info + rating
```

**Section 3: Features (300px)**

```
1. Background: Gray-50
2. Title: "Nos Services" (H2, centered)
3. Subtitle: (Body-sm, gray, centered)
4. Grid: 3 columns, gap 24px
   ├─ Feature Card 1
   │  ├─ Icon (48x48)
   │  ├─ Title (H3)
   │  └─ Description
   ├─ Feature Card 2
   └─ Feature Card 3
```

**Section 4: CTA (150px)**

```
1. Text: "Prêt à recruter?"
2. Subtext
3. Button: "Rejoindre"
```

**Section 5: Footer (80px)**

```
1. Background: Gray-900
2. Text: Gray-200
3. Links + Copyright
```

---

## 7️⃣ CRÉER PAGE OFFRES (30 minutes)

### Navigate to "Offres Listing" page

**Layout: 2 columns**

```
Left sidebar (300px):
├─ Title: "Filtres"
├─ Filter groups:
│  ├─ Mots-clés (input)
│  ├─ Location (input)
│  ├─ Type (select)
│  ├─ Salary (number)
│  ├─ [Search button]
│  └─ [Reset button]
└─ Padding: 20px

Right content:
├─ Title: "Résultats: 45 offres"
├─ Grid: 3 columns
│  ├─ [JobCard component]
│  ├─ [JobCard component]
│  ├─ [JobCard component]
│  ├─ [JobCard component]
│  └─ ... more cards
└─ Pagination (centered, bottom)
```

**Étape 1: Dessiner structure**

```
1. Create main frame
   - Auto layout: horizontal
   - Gap: 16px
   - Padding: 24px

2. Left frame (sidebar)
   - Width: 300px
   - Auto layout: vertical
   - Background: transparent
   - Padding: 20px

3. Right frame (content)
   - Flex: 1 (grow)
   - Auto layout: vertical
   - Gap: 16px
   - Padding: 24px
```

**Étape 2: Ajouter filters**

```
1. Dans sidebar:
   - Title text
   - InputField components (x4)
   - Buttons
```

**Étape 3: Ajouter job grid**

```
1. Dans right content:
   - Title: "Résultats"
   - Grid frame:
     - Auto layout: OFF
     - Grid: 3 columns, gap 16px
   - Duplicate JobCard (x6)
   - Add instances du component
```

**Résultat:**

```
┌──────────────┬──────────────────────────┐
│ Filters      │ Résultats: 45 offres    │
│              │                          │
│ [Keyword]    │ ┌──────┐ ┌──────┐       │
│ [Location]   │ │Card 1│ │Card 2│ ...  │
│ [Type]       │ └──────┘ └──────┘       │
│ [Salary]     │ ┌──────┐ ┌──────┐       │
│              │ │Card 3│ │Card 4│ ...  │
│ [Search]     │ └──────┘ └──────┘       │
│ [Reset]      │                          │
│              │ [Pagination]             │
└──────────────┴──────────────────────────┘
```

---

## 8️⃣ EXPORT VERS CSS (15 minutes)

### Pour chaque component:

**Étape 1: Inspecter dans Figma**

```
1. Select component
2. Right panel: "Design" tab
3. Copier les values:
   - Fill color → var(--blue-600)
   - Stroke → border: 1px var(--gray-200)
   - Corner radius → border-radius: 6px
   - Padding → padding: 9px 18px
   - Shadow → box-shadow: 0 1px 3px...
```

**Étape 2: Créer CSS**

```css
/* Button Component */
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

.btn-primary {
  background: var(--blue-600);
  color: var(--white);
  border-color: var(--blue-600);
}

.btn-primary:hover {
  background: var(--blue-800);
  border-color: var(--blue-800);
}
```

**Étape 3: Ajouter à style.css**

```
1. Ouvrir style.css dans VS Code
2. Find `:root { ... }`
3. Paste color variables
4. Find `.btn { ... }`
5. Update avec CSS from Figma
6. Save file
7. Reload browser → ✅ Vérifier changes
```

---

## ✅ QUICK CHECKLIST

### Week 1
- [ ] Figma account créé
- [ ] Workspace + file créé
- [ ] Design System page (colors, typography)
- [ ] Components Library page
  - [ ] Button component
  - [ ] Card component
  - [ ] Input component
  - [ ] Badge component
- [ ] Homepage page (sketched)
- [ ] Offres page (sketched)

### Week 2
- [ ] Apply design system à toutes pages
- [ ] Export colors → CSS variables
- [ ] Export typography → CSS classes
- [ ] Export components → CSS
- [ ] Test dans navigateur
- [ ] Mobile responsive variants

### Week 3-4
- [ ] Dashboard pages
- [ ] Authentication pages
- [ ] Other pages
- [ ] Final refinements
- [ ] Performance optimization

---

## 🎥 EXAMPLE: From Figma to Working Button

### Step 1: Design in Figma
```
Create: 120x36px rectangle
Fill: #185FA5 (Blue-600)
Corners: 6px
Padding: 9px 18px
```

### Step 2: Export
```
Inspect panel:
├─ Fill: #185FA5
├─ Stroke: 1px (none)
├─ Radius: 6px
├─ Font: Inter 14px 500
└─ Text: white
```

### Step 3: Write CSS
```css
.btn-primary {
  background: #185FA5;
  color: white;
  padding: 9px 18px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter';
}
```

### Step 4: HTML + CSS
```html
<button class="btn-primary">Connexion</button>
```

### Step 5: Browser Result
```
┌────────────────────┐
│     Connexion      │ ← Blue button, 14px white text
└────────────────────┘
```

---

## 💡 TIPS

✅ **Use components** for reusability
✅ **Use auto layout** for responsive design
✅ **Use color styles** for consistency
✅ **Use text styles** for typography
✅ **Export regularly** and test in browser
✅ **Compare** Figma mockup vs browser frequently
✅ **Iterate** based on feedback
✅ **Document** all decisions

---

## 🆘 TROUBLESHOOTING

**Q: Component not updating across all instances?**
A: Edit main component, not instances. Instances update automatically.

**Q: Colors don't match browser?**
A: Copy exact hex from Figma. Export as CSS variables for consistency.

**Q: Spacing looks different in browser?**
A: Check padding/margin values. Figma uses padding, CSS needs both.

**Q: Responsive not working?**
A: Use auto layout in Figma, then test media queries in CSS.

**Q: Can't find component?**
A: Click Assets panel (Cmd/Ctrl Shift A). Search by name.

---

**Version:** 1.0
**Date:** 23/04/2026
**Projet:** CHASSEUR DE TÊTE

Suivez ce guide étape-par-étape et vous aurez les maquettes en 1-2 semaines! 🚀
