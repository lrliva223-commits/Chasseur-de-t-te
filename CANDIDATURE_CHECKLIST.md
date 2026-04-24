# ✅ Checklist - Candidat Postulation Système

## Phase 1: Vérification Code ✓
- [x] offres.js → fonction `postuler()` remplacée par modal
- [x] offres.js → fonction `showApplicationModal()` créée
- [x] offres.js → fonction `closeApplicationModal()` créée
- [x] offres.js → fonction `submitApplication()` créée
- [x] style.css → styles modal ajoutés (.modal, .modal-content, etc)
- [x] style.css → styles file-upload ajoutés
- [x] style.css → animations CSS ajoutées (@keyframes)
- [x] main.js → apiFetch() modifiée pour FormData
- [x] server.js → multer configuré
- [x] server.js → upload.single('cv') configuré
- [x] server.js → erreur handler multer ajouté
- [x] routes/candidatures.js → POST rewritten avec fichier
- [x] routes/candidatures.js → validation complète ajoutée
- [x] migrations/add_candidature_fields.sql → créé

## Phase 2: Vérification Dossiers ✓
- [x] `/backend/uploads/cv/` existe
- [x] `/backend/migrations/` existe
- [x] `/backend/routes/candidatures.js` accessible

## Phase 3: Vérification Config ✓
- [x] multer limits: 10MB
- [x] multer fileFilter: PDF, DOC, DOCX
- [x] multer destination: `/uploads/cv/`
- [x] Post route: `/api/v1/candidatures` avec upload.single('cv')

## Phase 4: Avant Déploiement
- [ ] Vérifier MySQL connecté et running
- [ ] Exécuter migration: `node backend/migrate.js`
- [ ] Vérifier colonnes ajoutées à table candidatures:
  ```sql
  SHOW COLUMNS FROM candidatures;
  -- Doit afficher: cv_url, demande (en plus de lettre_motivation)
  ```
- [ ] Redémarrer backend: `npm run dev` (depuis /backend)

## Phase 5: Tests Manuels
### Test 1: Accès formulaire
- [ ] Ouvrir `/offres.html`
- [ ] Cliquer "Postuler maintenant" sur une offre
- [ ] Modal s'ouvre avec 3 champs ✓

### Test 2: Validation formulaire
- [ ] Tenter d'envoyer sans CV → erreur "CV requis"
- [ ] Tenter d'envoyer sans LM → erreur "LM requise"
- [ ] Upload fichier TXT → erreur format (doit être PDF/DOC/DOCX)

### Test 3: Upload réussi
- [ ] Remplir CV (PDF/DOC/DOCX)
- [ ] Remplir Lettre de Motivation
- [ ] Remplir Demande (optionnel)
- [ ] Cliquer "Envoyer"
- [ ] Toast "Candidature envoyée!" s'affiche
- [ ] Bouton change à "Postulé ✓"

### Test 4: Vérification DB
- [ ] Vérifier que candidature créée dans DB
- [ ] Vérifier cv_url remplie
- [ ] Vérifier lettre_motivation remplie
- [ ] Vérifier demande remplie (ou NULL si vide)

### Test 5: Vérification fichier
- [ ] Aller dans `/uploads/cv/`
- [ ] Vérifier fichier créé avec bon nom (filename-timestamp-uuid.ext)
- [ ] Fichier est lisible et non corrompu

### Test 6: Côté Recruteur
- [ ] Dashboard recruteur charge candidatures
- [ ] Affiche CV avec lien téléchargeable
- [ ] Affiche Lettre de Motivation
- [ ] Affiche Demande (si présente)

## Phase 6: Performance & Sécurité
- [ ] Upload 10MB → accepté
- [ ] Upload 11MB → erreur
- [ ] Upload .exe → rejeté
- [ ] Upload .doc → accepté
- [ ] Upload .docx → accepté
- [ ] Upload .pdf → accepté
- [ ] Sans token → 401 Unauthorized
- [ ] Recruteur postule → 403 Forbidden
- [ ] Candidat ne peut postuler 2x même offre → 400 Already applied

## Phase 7: Logs à Vérifier
```
Backend console doit afficher:
✅ File uploaded: [filename]
✅ Candidature créée: [id]
✅ CV stocké: /uploads/cv/[filename]
```

## Rollback Plan (si problème)
- [ ] Supprimer colonnes ajoutées: `ALTER TABLE candidatures DROP COLUMN cv_url, demande;`
- [ ] Restaurer offres.js original
- [ ] Restaurer main.js original
- [ ] Redémarrer

## Production Deployment
- [ ] Configurer permissions `/uploads/cv/` (755)
- [ ] Configurer backup des CVs
- [ ] Activer HTTPS pour upload sécurisé
- [ ] Monitorer taille `/uploads/cv/`
- [ ] Setup anti-virus pour uploads (optionnel)

---

## Signatures

| Rôle | Date | Statut |
|------|------|--------|
| Dev | 2026-04-23 | ✓ Codé |
| Test | - | ⏳ Attente |
| Prod | - | ⏳ Attente |

---

## Notes
- Migration SQL idempotente (IF NOT EXISTS)
- Erreurs multer capturées par middleware
- FormData support compatible tous navigateurs modernes
- Scalable: facile d'ajouter autres champs/fichiers
