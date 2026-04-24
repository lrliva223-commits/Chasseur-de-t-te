# Guide Candidat — Système de Postulation Amélioré

## Vue d'ensemble

Quand un candidat postule à une offre d'emploi, il doit maintenant fournir:
1. **CV** (fichier PDF, DOC ou DOCX)
2. **Lettre de Motivation** (texte)
3. **Demande Spécifique** (optionnel)

## Flux de Postulation

### 1. Interface
- Le candidat voit le bouton "Postuler maintenant" sur chaque offre
- Au clic, un modal s'ouvre avec le formulaire

### 2. Formulaire Modal
```
┌─────────────────────────────────────┐
│  Postuler à cette offre        [×]  │
├─────────────────────────────────────┤
│                                     │
│  CV *                               │
│  [Cliquez pour télécharger]         │
│  (Formats: PDF, DOC, DOCX)         │
│                                     │
│  Lettre de Motivation *            │
│  [Zone de texte]                    │
│                                     │
│  Demande Spécifique               │
│  [Zone de texte optionnelle]       │
│                                     │
├─────────────────────────────────────┤
│  [Annuler]  [Envoyer Candidature]  │
└─────────────────────────────────────┘
```

### 3. Validation
- **CV** : Requis, format PDF/DOC/DOCX max 10MB
- **Lettre de Motivation** : Requis, min 1 caractère
- **Demande** : Optionnel, illimité
- Le bouton est désactivé tant que les champs obligatoires ne sont pas remplis

### 4. Soumission
- FormData envoyé via POST `/api/v1/candidatures`
- Le serveur traite et enregistre:
  - Fichier CV stocké dans `/uploads/cv/`
  - Métadonnées dans la base de données

## Données Enregistrées

### Table `candidatures`
```sql
├── id (UUID)
├── candidat_id (FK)
├── offre_id (FK)
├── cv_url (VARCHAR 500) -- NEW
├── lettre_motivation (TEXT)
├── demande (TEXT) -- NEW
├── statut (ENUM: envoyee, vue, ...)
├── date_envoi (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

## Installation & Déploiement

### 1. Appliquer la migration DB
```bash
cd backend
npm run migrate
```

Cela exécute:
```sql
ALTER TABLE candidatures ADD COLUMN IF NOT EXISTS cv_url VARCHAR(500);
ALTER TABLE candidatures ADD COLUMN IF NOT EXISTS demande TEXT;
```

### 2. Redémarrer le serveur
```bash
npm run dev   # Dev mode avec nodemon
npm start     # Production
```

### 3. Tester
1. Accéder à `/offres.html`
2. Chercher une offre
3. Cliquer sur "Postuler maintenant"
4. Remplir le formulaire
5. Envoyer

## Côté Recruteur

Le recruteur/entreprise peut voir:
- CV (téléchargeable depuis `/uploads/cv/[filename]`)
- Lettre de Motivation
- Demande Spécifique

Via endpoint: `GET /api/v1/candidatures/offre/:id`

Response inclut:
```json
{
  "candidatures": [
    {
      "id": "...",
      "candidat": "Jean Dupont",
      "email": "jean@example.com",
      "cv_url": "/uploads/cv/jean-dupont-cv-1234567890.pdf",
      "lettre_motivation": "Bonjour, je suis vivement intéressé...",
      "demande": "Flexibilité horaire si possible",
      "statut": "envoyee"
    }
  ]
}
```

## Fichiers Modifiés

### Frontend
- `offres.js` — Logique modal & FormData
- `style.css` — Styles modal & file-upload
- `main.js` — Support FormData dans apiFetch()

### Backend
- `server.js` — Intégration multer
- `routes/candidatures.js` — POST avec fichier
- `migrations/add_candidature_fields.sql` — Schéma DB

## Points Clés

✅ **Sécurité**
- Validation type MIME
- Limite taille 10MB
- Authentification requise
- Uniquement `candidat` peut postuler

✅ **UX**
- Modal overlay
- Animations lisses
- Feedback utilisateur (Toast)
- Validation côté client

✅ **Scalabilité**
- Multer gère concurrence
- Noms fichier uniques (timestamp + uuid)
- Support cleanup future

## Troubleshooting

### "Erreur lors du téléchargement"
→ Vérifier format (PDF/DOC/DOCX) et taille (<10MB)

### "Route non trouvée"
→ Redémarrer le serveur après modification

### CV ne s'affiche pas côté recruteur
→ Vérifier que `/uploads/cv/` existe et est lisible
→ Vérifier `cv_url` dans base de données

### Migration ne s'applique pas
→ Vérifier MySQL connection dans `.env`
→ Exécuter manuellement: `mysql -u root headhunter_db < migrations/add_candidature_fields.sql`
