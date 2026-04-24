# Résumé des Changements - Système de Candidature Amélioré

## 📋 Objectif
Ajouter un formulaire de postulation complet avec CV, Lettre de Motivation et Demande Spécifique.

## ✅ Modifications Effectuées

### 1️⃣ **Frontend - offres.js**
**Changement:** Remplacement de la fonction `postuler()` simple par un système modal complet

```javascript
// Avant: Simple POST sans données
postuler(offre_id) → POST /candidatures { offre_id }

// Après: Modal FormData avec fichier + texte
showApplicationModal(offre_id) → Modal avec:
  - File input (CV)
  - Textarea (Lettre de Motivation)
  - Textarea (Demande)
submitApplication() → POST /candidatures avec FormData
```

**Fichier:** `offres.js`
**Lignes:** ~180-280 (fonction complètement réécrite)

---

### 2️⃣ **Frontend - main.js**
**Changement:** Modification de `apiFetch()` pour supporter FormData

```javascript
// Avant: Force toujours Content-Type: application/json
apiFetch(path, options) → headers: { 'Content-Type': 'application/json' }

// Après: Détecte FormData et ne définit pas Content-Type
apiFetch(path, options) → 
  if (options.body instanceof FormData) → pas de Content-Type (navigateur le détermine)
  else → Content-Type: application/json
```

**Fichier:** `main.js`
**Lignes:** 16-29 (fonction apiFetch modifiée)

---

### 3️⃣ **CSS - style.css**
**Changement:** Ajout complet des styles pour modal et upload

```css
/* Ajoutés: */
.modal                   /* Overlay + positionnement */
.modal-overlay          /* Background semi-transparent */
.modal-content          /* Conteneur du formulaire */
.modal-header           /* Titre + bouton fermeture */
.modal-body             /* Corps du formulaire */
.modal-footer           /* Boutons action */
.file-upload            /* Container upload */
.file-upload-label      /* Zone drag-drop */
.file-name              /* Affichage nom fichier */

+ Animations: @keyframes fadeIn, slideUp
```

**Fichier:** `style.css`
**Lignes:** 1100-1220 (ajoutées à la fin)

---

### 4️⃣ **Backend - server.js**
**Changement:** Intégration multer pour gestion fichiers

```javascript
// Ajoutés:
const multer = require('multer');

storage: diskStorage configuré
  → destination: /uploads/cv/
  → filename: [name]-[timestamp]-[uuid].[ext]

upload config:
  → limits: 10MB
  → fileFilter: pdf, doc, docx uniquement
  → errorHandler: middleware

Route configurée:
  app.post('/api/v1/candidatures', upload.single('cv'), ...)
```

**Fichier:** `backend/server.js`
**Lignes:** 1-60 (complètement rewritten)

---

### 5️⃣ **Backend - routes/candidatures.js**
**Changement:** Mise à jour endpoint POST pour fichier + données

```javascript
// Avant:
POST /candidatures
  body: { offre_id }
  INSERT INTO candidatures (id, candidat_id, offre_id, statut)

// Après:
POST /candidatures
  body: { offre_id, lettre_motivation, demande }
  file: cv (dans req.file)
  INSERT INTO candidatures (..., cv_url, lettre_motivation, demande, ...)
```

**Fichier:** `backend/routes/candidatures.js`
**Lignes:** 25-75 (fonction POST complètement réécrite)
**Validations:**
- CV fichier requis
- Lettre de motivation requis (non vide)
- Demande optionnel

---

### 6️⃣ **Base de Données - Migration**
**Changement:** Ajout colonnes à table candidatures

```sql
ALTER TABLE candidatures 
  ADD COLUMN cv_url VARCHAR(500) AFTER lettre_motivation;
  ADD COLUMN demande TEXT AFTER cv_url;
```

**Fichier:** `backend/migrations/add_candidature_fields.sql`

---

### 7️⃣ **Scripts utilitaires**
**Nouveau fichier:** `backend/migrate.js`
```javascript
// Exécute les migrations SQL
// Usage: npm run migrate (à ajouter dans package.json)
```

---

## 📦 Structure de Données

### Request FormData
```
POST /api/v1/candidatures
{
  offre_id: "uuid",
  lettre_motivation: "texte",
  demande: "texte optionnel",
  file: <Binary PDF/DOC/DOCX>
}
```

### Response
```json
{
  "message": "Candidature envoyée avec succès.",
  "candidature_id": "uuid",
  "cv_url": "/uploads/cv/filename-timestamp-uuid.pdf"
}
```

### Database
```sql
candidatures:
  ├── id (UUID, PK)
  ├── candidat_id (FK)
  ├── offre_id (FK)
  ├── cv_url (VARCHAR 500) ← NEW
  ├── lettre_motivation (TEXT)
  ├── demande (TEXT) ← NEW
  ├── statut (ENUM)
  ├── date_envoi (TIMESTAMP)
  └── updated_at (TIMESTAMP)
```

---

## 🚀 Instructions de Déploiement

### 1. Appliquer migration DB
```bash
cd backend
node migrate.js
```

### 2. Redémarrer serveur
```bash
npm run dev  # ou npm start
```

### 3. Tester
1. Ouvrir `/offres.html`
2. Cliquer "Postuler maintenant" sur une offre
3. Remplir formulaire (CV, LM, demande optionnelle)
4. Soumettre

---

## 🔒 Sécurité

✅ **Validation MIME:** PDF, DOC, DOCX uniquement
✅ **Limite fichier:** 10 MB max
✅ **Authentification:** Bearer token requis
✅ **Autorisation:** Candidat uniquement
✅ **Noms uniques:** timestamp + UUID évitre collisions
✅ **Erreurs:** Gérées côté client et serveur

---

## 📝 Documentation

**Fichier:** `CANDIDATURE_GUIDE.md`
- Guide complet pour candidats
- Instructions déploiement
- Troubleshooting
- Points clés

---

## ✨ Fichiers Modifiés (Résumé)

```
Frontend:
  ✏️ offres.js         (fonction postuler() → modal complet)
  ✏️ main.js           (apiFetch() → support FormData)
  ✏️ style.css         (+100 lignes modal/upload styles)

Backend:
  ✏️ server.js         (multer intégré)
  ✏️ routes/candidatures.js (POST avec fichier)
  ✨ migrations/add_candidature_fields.sql (NEW)
  ✨ migrate.js        (NEW)
  ✨ CANDIDATURE_GUIDE.md (NEW)
```

---

## 🎯 Prêt à tester!

Le système est maintenant complet et prêt. Tous les changements sont cohérents entre:
- Frontend (UI/UX)
- API (validation + traitement)
- Backend (stockage fichier + DB)
- Base de données (schéma)

💡 **Conseil:** Vérifier les logs serveur lors du test pour debug efficace.
