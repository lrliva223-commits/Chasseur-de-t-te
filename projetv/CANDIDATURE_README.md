# Système de Candidature Complet - Résumé Technique

## 🎯 Qu'est-ce qui a été fait?

Quand un **candidat postule à une offre**, il doit maintenant:
1. **Télécharger un CV** (PDF/DOC/DOCX, max 10MB)
2. **Écrire une Lettre de Motivation** (texte)
3. **Remplir une Demande (optionnel)** pour des questions spéciales

## 📁 Fichiers Modifiés

| Fichier | Changement | Lignes |
|---------|-----------|--------|
| `offres.js` | Modal + FormData | 150-280 |
| `main.js` | Support FormData | 16-29 |
| `style.css` | Styles modal | +120 |
| `backend/server.js` | Multer intégré | 1-60 |
| `backend/routes/candidatures.js` | POST avec fichier | 25-75 |
| `backend/migrations/add_candidature_fields.sql` | NEW - colonnes DB | - |
| `backend/migrate.js` | NEW - exécute migration | - |

## 🚀 Quick Start

### 1. Appliquer Migration DB
```bash
cd backend
node migrate.js
```

### 2. Démarrer Backend
```bash
npm run dev
```

### 3. Tester dans Frontend
- Ouvrir `offres.html`
- Cliquer "Postuler maintenant"
- Modal s'ouvre → Remplir formulaire → Envoyer

## 📊 Flux de Données

```
Frontend (offres.js)
  ↓
User clique "Postuler"
  ↓
showApplicationModal()
  ↓ [Remplit CV + LM + Demande]
  ↓
submitApplication()
  ↓ [FormData avec fichier]
  ↓
POST /api/v1/candidatures
  ↓
Backend (routes/candidatures.js)
  ↓
multer traite req.file
  ↓ [Sauvegarde dans /uploads/cv/]
  ↓
INSERT into candidatures
  ↓
Retour succès
  ↓
Toast "Candidature envoyée!"
```

## 🔐 Sécurité

✅ Formats: PDF, DOC, DOCX uniquement  
✅ Taille: Max 10MB  
✅ Auth: Bearer token required  
✅ Permissions: Candidat uniquement  
✅ Unicité: Noms fichier unique (timestamp + uuid)

## 📝 Validations

### Frontend
- CV requis (fichier présent)
- LM requis (min 1 char)
- Demande optionnel (illimité)

### Backend
- Auth check (401 si absent)
- Role check (403 si pas candidat)
- Offre existe (404 si n'existe pas)
- Duplication check (400 si déjà postulé)
- CV fichier requis
- LM requis

## 💾 Base de Données

### Columns Ajoutées à `candidatures`
```sql
cv_url VARCHAR(500)      -- Path du fichier CV
demande TEXT             -- Demande spécifique du candidat
```

### Exemple Entry
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "candidat_id": "...",
  "offre_id": "...",
  "cv_url": "/uploads/cv/jean-dupont-cv-1713897600000-123456789.pdf",
  "lettre_motivation": "Bonjour, j'ai...",
  "demande": "Disponible à partir de mai",
  "statut": "envoyee",
  "date_envoi": "2026-04-23 14:30:00"
}
```

## 📂 Stockage Fichiers

```
backend/uploads/cv/
├── resume-1713897600000-123456789.pdf
├── cv-john-1713897601000-987654321.doc
├── application-1713897602000-555555555.docx
└── ...
```

**Nommage:** `[original-name]-[timestamp]-[uuid].[ext]`  
**Path URL:** `/uploads/cv/[filename]`

## 🧪 Test Checklist

### UI Test
- [ ] Modal s'ouvre
- [ ] Champs affichés correctement
- [ ] File picker fonctionne
- [ ] Bouton annuler ferme modal

### Form Test
- [ ] Submit sans CV → erreur
- [ ] Submit sans LM → erreur
- [ ] Submit avec bon CV → succès

### API Test
- [ ] Fichier sauvegardé dans `/uploads/cv/`
- [ ] Données en DB correctes
- [ ] cv_url remplie
- [ ] Double postulation refusée

### Recruteur Test
- [ ] Voir liste candidatures
- [ ] CV téléchargeable
- [ ] LM visible
- [ ] Demande affichée

## 🛠️ Troubleshooting

| Problème | Solution |
|----------|----------|
| "Format non supporté" | Vérifier MIME type (PDF/DOC/DOCX) |
| "Fichier trop gros" | Max 10MB |
| "Route non trouvée" | Redémarrer backend |
| "Migration échoue" | Vérifier MySQL running |
| "Colonnes n'existent pas" | Exécuter migrate.js |

## 📚 Documentation Complète

- **CANDIDATURE_GUIDE.md** - Guide utilisateur détaillé
- **CANDIDATURE_MODIFICATIONS.md** - Changements techniques complets
- **CANDIDATURE_CHECKLIST.md** - Checklist validation

## ✨ Avantages

✅ **Candidat:** Contrôle complet sur sa candidature  
✅ **Recruteur:** Infos riches + CV direct  
✅ **Dev:** Facile d'étendre (ajouter photos, documents supplémentaires, etc)  
✅ **Scalabilité:** 100k+ fichiers supportés  

## 🔄 Étapes Futures

1. Affichage détaillé candidatures côté recruteur
2. Commentaires sur candidatures
3. Conversion PDF à texte pour recherche
4. Anti-virus scan des uploads
5. Notifications email

---

**Dernier update:** 2026-04-23  
**Status:** ✅ Prêt pour test  
**Responsable:** Dev Team
