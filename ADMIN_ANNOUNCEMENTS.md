# Système d'Annonces Admin - Documentation

## 📋 Vue d'Ensemble

L'administrateur peut maintenant envoyer des **annonces/messages** à:
- **Tous les utilisateurs**
- **Candidats uniquement**
- **Recruteurs uniquement**
- **Entreprises uniquement**

## 🎯 Fonctionnalités

### 1. Interface Admin
- Onglet **"Annonces"** dans le dashboard admin
- Formulaire simple: Titre + Contenu + Cible
- Historique des annonces envoyées
- Possibilité de supprimer une annonce

### 2. Réception Utilisateur
- Les messages apparaissent dans **Messagerie** de chaque utilisateur
- Marqués comme **[ANNONCE]** pour identification
- Horodatés automatiquement

### 3. Stockage

#### Table `admin_annonces`
```sql
├── id (UUID, PK)
├── titre (VARCHAR 255)
├── contenu (TEXT)
├── cible (VARCHAR 50) -- 'all', 'candidat', 'recruteur', 'entreprise'
└── date_envoi (TIMESTAMP)
```

#### Colonne ajoutée à `messages`
```sql
└── type_message (VARCHAR 50) -- 'direct' ou 'announcement'
```

## 🔗 Endpoints API

### Envoyer une Annonce
```http
POST /api/v1/admin/messages/broadcast
Authorization: Bearer {token}
Content-Type: application/json

{
  "titre": "Maintenance programmée",
  "contenu": "Le serveur sera indisponible le 25/04 de 2h à 4h",
  "cible": "all"
}
```

**Cibles valides:**
- `"all"` → Tous les utilisateurs
- `"candidat"` → Candidats uniquement
- `"recruteur"` → Recruteurs uniquement
- `"entreprise"` → Entreprises uniquement

**Response:**
```json
{
  "message": "Annonce envoyée avec succès."
}
```

### Récupérer l'Historique
```http
GET /api/v1/admin/messages/broadcast
Authorization: Bearer {token}
```

**Response:**
```json
{
  "messages": [
    {
      "id": "uuid",
      "titre": "Maintenance programmée",
      "contenu": "Le serveur sera indisponible...",
      "cible": "all",
      "date_envoi": "2026-04-23T14:30:00.000Z"
    }
  ]
}
```

### Supprimer une Annonce
```http
DELETE /api/v1/admin/messages/{id}
Authorization: Bearer {token}
```

## 🚀 Installation

### 1. Appliquer les Migrations
```bash
cd backend
node migrate-all.js
```

Ou manuellement:
```bash
mysql -u root headhunter_db < migrations/add_admin_announcements.sql
```

### 2. Redémarrer le Serveur
```bash
npm run dev
```

### 3. Vérifier dans l'Admin
1. Aller sur Dashboard Admin
2. Cliquer sur **"Annonces"** dans la sidebar
3. Remplir le formulaire
4. Envoyer

## 📊 Flux de Données

```
Admin remplit formulaire
  ↓
Frontend POST /admin/messages/broadcast
  ↓
Backend reçoit titre, contenu, cible
  ↓
INSERT admin_annonces (historique)
  ↓
SELECT utilisateurs WHERE role = cible
  ↓
Pour chaque utilisateur:
  INSERT messages (type_message='announcement')
  ↓
Utilisateur reçoit message dans sa messagerie
```

## 🔒 Sécurité

✅ **Auth:** Bearer token requis  
✅ **Permission:** Admin uniquement (checkAdmin middleware)  
✅ **Validation:** Titre et contenu requis  
✅ **Audit:** Historique complet des annonces  

## 💾 Base de Données

### Avant
```sql
admin_annonces      -- N'existait pas
messages.type_message -- N'existait pas
```

### Après
```sql
admin_annonces:
  - id (UUID)
  - titre (VARCHAR 255)
  - contenu (TEXT)
  - cible (VARCHAR 50)
  - date_envoi (TIMESTAMP)

messages:
  - type_message (VARCHAR 50) -- 'direct' ou 'announcement'
```

## 🎨 Interface Admin

```
┌─────────────────────────────────────┐
│  Gestion des annonces               │
├─────────────────────────────────────┤
│                                     │
│  Envoyer une annonce                │
│                                     │
│  Titre de l'annonce *               │
│  [Maintenance programmée ...]       │
│                                     │
│  Message *                          │
│  [Le serveur sera indisponible...]  │
│                                     │
│  Destination                        │
│  [Tous les utilisateurs ▼]          │
│                                     │
│  [Envoyer l'annonce]                │
│                                     │
├─────────────────────────────────────┤
│  Historique des annonces            │
│                                     │
│  Maintenance programmée             │
│  23/04 14:30 · Cible: [Tous]  [×]  │
│  Le serveur sera indisponible...    │
│                                     │
└─────────────────────────────────────┘
```

## ✅ Checklist d'Installation

- [ ] Migration exécutée: `migrate-all.js`
- [ ] Table `admin_annonces` créée
- [ ] Colonne `type_message` ajoutée à `messages`
- [ ] Serveur redémarré
- [ ] Onglet "Annonces" visible dans admin
- [ ] Formulaire fonctionne
- [ ] Message reçu par utilisateurs
- [ ] Historique affiche les annonces

## 🧪 Test

### Test 1: Envoyer une Annonce
1. Admin → Annonces
2. Titre: "Test"
3. Contenu: "Message de test"
4. Cible: "all"
5. Envoyer
6. Toast: "Annonce envoyée avec succès"

### Test 2: Vérifier Réception
1. Se connecter comme candidat
2. Messagerie
3. Voir message [ANNONCE]: Test

### Test 3: Filtre par Cible
1. Envoyer annonce avec cible "candidat"
2. Entreprise ne reçoit PAS le message
3. Candidat reçoit le message

### Test 4: Historique
1. Admin → Annonces
2. Voir liste des annonces envoyées
3. Supprimer une annonce
4. Confirmer suppression

## 🔄 Futures Améliorations

- [ ] Planification d'annonces (date/heure)
- [ ] Template d'annonces prédéfinis
- [ ] Statistiques: Voir qui a lu l'annonce
- [ ] Notifications push/email
- [ ] Annonces localisées par pays
- [ ] Pièces jointes aux annonces

## 📝 Notes

- Annonces stockées dans `admin_annonces` (table dédiée)
- Messages notifiés via table `messages` standard (pour historique utilisateur)
- Pas de limite sur le nombre d'annonces
- Suppression cascade des messages associés

## 🆘 Troubleshooting

| Problème | Solution |
|----------|----------|
| Onglet "Annonces" absent | Redémarrer navigateur (cache) |
| "Permission refusée" | Vérifier rôle = 'admin' |
| Migration échoue | Vérifier MySQL running |
| Message non reçu | Vérifier utilisateur en statut 'actif' |
| Historique vide | Messages nécessitent que réception soit confirmée |

---

**Version:** 1.0.0  
**Date:** 2026-04-23  
**Status:** ✅ Production Ready
