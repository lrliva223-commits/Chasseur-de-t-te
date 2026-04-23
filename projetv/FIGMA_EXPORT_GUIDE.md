# EXPORT FIGMA → CSS : GUIDE PRATIQUE

## 🔄 Workflow : De Figma vers le Code

### Exemple Concret : Exporter un Button Component

#### 1️⃣ Dans Figma

**Créer la variante "Primary":**
```
Frame "btn-primary"
├─ Background: #185FA5 (--blue-600)
├─ Text: "Button Label" (Inter, 14px, 500, white)
├─ Padding: 9px 18px
├─ Border Radius: 6px
└─ Effects: None (pour state default)
```

**Créer la variante "Primary-Hover":**
```
Frame "btn-primary:hover"
├─ Background: #0C447C (--blue-800)
└─ (Tous les autres params identiques)
```

**Exporter les specs:**
- Right-click → Inspect
- Note toutes les valeurs dans le panneau Inspector

#### 2️⃣ Résultat CSS

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
  white-space: nowrap;
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

.btn-primary:active {
  opacity: 0.9;
}

.btn-primary:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
```

---

## 📦 COMPONENTS À EXPORTER

### 1. BUTTON COMPONENT

**Variantes Figma:**
- primary (default, hover, active, disabled)
- outline (default, hover, active, disabled)
- danger (default, hover, disabled)
- success (default, hover, disabled)
- small (btn-sm)
- large (btn-lg)

**Export CSS:**
```css
/* Already in your style.css - keep it! */
.btn { /* base styles */ }
.btn-primary { /* ... */ }
.btn-outline { /* ... */ }
.btn-lg { /* ... */ }
.btn-sm { /* ... */ }
```

### 2. CARD COMPONENT

**Figma Setup:**
```
Component "JobCard"
├─ Background: white
├─ Border: 1px #E5E7EB
├─ Padding: 20px
├─ Border Radius: 14px
├─ Shadow: 0 1px 3px rgba(0,0,0,0.08)
└─ Children (auto-layout):
   ├─ Header Row
   │  ├─ Title (16px, 600)
   │  └─ Tag (badge)
   ├─ Meta Text (14px, gray)
   ├─ Description (13px, gray-600)
   └─ Footer Row
      ├─ Salary (14px, bold)
      └─ Button
```

**Export CSS:**
```css
.offre-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 14px;
  padding: 20px;
  transition: box-shadow 0.15s ease;
}

.offre-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.offre-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

.offre-titre {
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-900);
}

.offre-meta {
  font-size: 13px;
  color: var(--gray-400);
  margin-top: 3px;
}

.offre-desc {
  font-size: 13px;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 16px;
}

.offre-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.salary {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
}
```

### 3. TAG/BADGE COMPONENT

**Figma Variants:**
- tag-blue (bg: #E6F1FB, text: #0C447C)
- tag-green (bg: #EAF3DE, text: #27500A)
- tag-amber (bg: #FAEEDA, text: #382102)
- tag-gray (bg: #F3F4F6, text: #4B5563)

**Export CSS:**
```css
.tag {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 10px;
  white-space: nowrap;
  display: inline-block;
}

.tag-blue {
  background: var(--blue-50);
  color: var(--blue-800);
}

.tag-green {
  background: var(--green-50);
  color: var(--green-700);
}

.tag-amber {
  background: var(--amber-50);
  color: var(--amber-600);
}

.tag-gray {
  background: var(--gray-100);
  color: var(--gray-600);
}
```

### 4. AVATAR COMPONENT

**Figma Setup:**
```
Component "Avatar"
├─ Size: 40x40px
├─ Border Radius: 50%
├─ Colors (variants):
│  ├─ avatar-blue (bg: #E6F1FB)
│  ├─ avatar-amber (bg: #FAEEDA)
│  └─ avatar-gray (bg: #F3F4F6)
└─ Content: Initials (bold, centered)
```

**Export CSS:**
```css
.card-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--blue-50);
  color: var(--blue-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}

.card-avatar.amber {
  background: var(--amber-50);
  color: var(--amber-600);
}

.card-avatar.gray {
  background: var(--gray-100);
  color: var(--gray-600);
}
```

### 5. INPUT/FORM COMPONENT

**Figma Setup:**
```
Component "FormInput"
├─ Background: white
├─ Border: 1px #E5E7EB
├─ Padding: 10px 12px
├─ Border Radius: 10px
├─ States: default, focus, error, disabled
└─ Font: 14px, Inter
```

**Export CSS:**
```css
.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  font-family: var(--font);
  font-size: 14px;
  color: var(--gray-900);
  background: var(--white);
  transition: all var(--transition);
}

.form-input:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px rgba(24, 95, 165, 0.1);
}

.form-input::placeholder {
  color: var(--gray-400);
}

.form-input:disabled {
  background: var(--gray-50);
  color: var(--gray-400);
  cursor: not-allowed;
}

.form-input.error {
  border-color: var(--red-600);
}

.form-input.error:focus {
  box-shadow: 0 0 0 3px rgba(107, 2, 2, 0.1);
}
```

### 6. NAVIGATION COMPONENT

**Sidebar Navigation (Figma):**
```
Component "NavItem"
├─ Padding: 12px 16px
├─ Border Radius: 8px
├─ Flex: row, gap 12px
├─ States:
│  ├─ default (text: gray-600)
│  ├─ active (bg: blue-50, text: blue-800, bold)
│  └─ hover (bg: gray-100)
└─ Icon (20x20px)
```

**Export CSS:**
```css
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--gray-600);
  text-decoration: none;
  transition: all var(--transition);
  cursor: pointer;
  font-size: 15px;
}

.nav-item:hover {
  background: var(--gray-100);
}

.nav-item.active {
  background: var(--blue-50);
  color: var(--blue-800);
  font-weight: 600;
}

.nav-item svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}
```

---

## 🎯 ÉTAPES DÉTAILLÉES

### Pour chaque Component Figma:

#### 1. **Préparez le Component dans Figma**
```
✅ Créer main component avec tous les layers nommés
✅ Créer toutes les variantes (default, hover, active, disabled)
✅ Documenter les tokens utilisés
✅ Exporter preview image
```

#### 2. **Inspecter dans Figma**
```
Right-click → Inspect
Copier les valeurs pour:
  ✅ Dimensions (width, height)
  ✅ Padding/Margin
  ✅ Border radius
  ✅ Colors (utiliser variables)
  ✅ Typography (size, weight, line-height)
  ✅ Shadows
```

#### 3. **Écrire le CSS**
```
✅ Créer classe `.component-name`
✅ Ajouter variantes `.component-name--variant`
✅ Ajouter états `:hover`, `:active`, `:disabled`
✅ Utiliser variables CSS
✅ Tester dans le navigateur
```

#### 4. **Mettre à jour le HTML**
```html
<!-- Avant (sans classes) -->
<button style="background: blue; padding: 10px...">Click</button>

<!-- Après (avec classes) -->
<button class="btn btn-primary">Click</button>
```

#### 5. **Itérer et Affiner**
```
✅ Comparer avec Figma mockup
✅ Ajuster espacements/couleurs si nécessaire
✅ Tester sur mobile/tablet
✅ Mettre à jour Figma si besoin
✅ Documenter les changements
```

---

## 📐 MEASURING IN FIGMA

**Obtenir les mesures exactes:**

1. **Entre éléments (Gap):**
   - Sélectionner 2 éléments
   - Mesurer distance dans l'inspector
   
2. **Padding/Margin:**
   - Sélectionner le container
   - Regarder les valeurs dans "Design" panel
   
3. **Shadow:**
   - Effects panel
   - Copier les valeurs `X, Y, Blur, Spread, Color`

**Export comme texte:**
```
Design tab → Select component
Copy Design specs → Paste dans doc
```

---

## 🎨 COLOR EXTRACTION

**From Figma to CSS:**

1. **Sélectionner la couleur** dans un element
2. **Panel Design → Fill**
3. **Copier la couleur Hex** (#185FA5)
4. **Ajouter à :root** en CSS
5. **Utiliser la variable** dans les classes

**Exemple:**
```
Figma: #185FA5 → --blue-600
CSS: background: var(--blue-600);
```

---

## 📝 TEMPLATE : EXPORTER DESIGN SPECS

**Créer ce document après chaque export Figma:**

```markdown
# Component: Button

## Description
Primary call-to-action button for important actions.

## Dimensions
- Padding: 9px 18px
- Min Height: 36px
- Border Radius: 6px

## Colors (Default State)
- Background: --blue-600 (#185FA5)
- Text: --white (#FFFFFF)
- Border: --blue-600 (#185FA5)

## Typography
- Font: Inter
- Size: 14px
- Weight: 500
- Line Height: 1.5

## States
- **Default**: bg blue-600, cursor pointer
- **Hover**: bg blue-800
- **Active**: opacity 0.9
- **Disabled**: opacity 0.55, cursor not-allowed

## CSS Class
`.btn.btn-primary`

## HTML Example
```html
<button class="btn btn-primary">Click Me</button>
```
```

---

## ✅ EXPORT CHECKLIST

### Before Export
- [ ] All components created in Figma
- [ ] All variants properly set up
- [ ] Colors use Figma variables
- [ ] Typography styles applied
- [ ] Component descriptions filled
- [ ] Preview images exported

### Export Process
- [ ] Take screenshots of each state
- [ ] Copy color values
- [ ] Note typography properties
- [ ] Record spacing values
- [ ] Export SVG icons

### Post-Export
- [ ] Create CSS classes
- [ ] Update HTML with classes
- [ ] Test in browser
- [ ] Compare with Figma mockup
- [ ] Document any deviations
- [ ] Add to style.css

---

## 🚀 QUICK REFERENCE

**Figma Inspector → CSS Conversion:**

| Figma Property | CSS Property | Example |
|---|---|---|
| Padding | padding | `padding: 10px 12px;` |
| Gap | gap | `gap: 16px;` |
| Corner radius | border-radius | `border-radius: 6px;` |
| Fill color | background | `background: #185FA5;` |
| Text color | color | `color: #ffffff;` |
| Font size | font-size | `font-size: 14px;` |
| Font weight | font-weight | `font-weight: 600;` |
| Shadow | box-shadow | `box-shadow: 0 4px 16px...` |
| Stroke | border | `border: 1px solid #E5E7EB;` |
| Opacity | opacity | `opacity: 0.8;` |

---

**Version:** 1.0
**Date:** 23/04/2026
**Project:** CHASSEUR DE TÊTE
