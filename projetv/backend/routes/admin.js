const express = require('express');
const pool = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

function checkAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Accès réservé aux administrateurs.' });
  }
  next();
}

router.use(checkAdmin);

router.get('/stats', async (req, res) => {
  try {
    const [[users]] = await pool.execute('SELECT COUNT(*) as users FROM utilisateurs');
    const [[entreprises]] = await pool.execute('SELECT COUNT(*) as entreprises FROM entreprises');
    const [[offres]] = await pool.execute('SELECT COUNT(*) as offres FROM offres_emploi');
    const [[candidatures]] = await pool.execute('SELECT COUNT(*) as candidatures FROM candidatures');

    res.json({ users: users.users, entreprises: entreprises.entreprises, offres: offres.offres, candidatures: candidatures.candidatures });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.get('/entreprises-pending', async (req, res) => {
  try {
    const [entreprises] = await pool.execute(
      `SELECT id, nom, secteur, siret, adresse, logo_url, verifie, created_at
       FROM entreprises
       WHERE verifie = 0
       ORDER BY created_at DESC`
    );
    res.json({ entreprises });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.patch('/entreprises/:id/valider', async (req, res) => {
  try {
    const { id } = req.params;
    const { verifie } = req.body;
    const newStatus = verifie ? 1 : 0;

    const [result] = await pool.execute('UPDATE entreprises SET verifie = ? WHERE id = ?', [newStatus, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Entreprise non trouvée.' });
    }

    res.json({ message: `Entreprise ${verifie ? 'validée' : 'refusée'} avec succès.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const [users] = await pool.execute(
      'SELECT id, nom, prenom, email, role, statut, created_at FROM utilisateurs ORDER BY created_at DESC'
    );
    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.patch('/users/:id/statut', async (req, res) => {
  try {
    const { id } = req.params;
    const { statut } = req.body;
    if (!['actif', 'suspendu', 'supprime'].includes(statut)) {
      return res.status(400).json({ error: 'Statut invalide.' });
    }

    const [result] = await pool.execute('UPDATE utilisateurs SET statut = ? WHERE id = ?', [statut, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    res.json({ message: 'Statut mis à jour.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.execute('DELETE FROM utilisateurs WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    res.json({ message: 'Utilisateur supprimé.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// DELETE /admin/entreprises/:id - Supprimer une entreprise
router.delete('/entreprises/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.execute('DELETE FROM entreprises WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Entreprise non trouvée.' });
    }
    res.json({ message: 'Entreprise supprimée avec succès.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// DELETE /admin/offres/:id - Supprimer une offre
router.delete('/offres/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.execute('DELETE FROM offres_emploi WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Offre non trouvée.' });
    }
    res.json({ message: 'Offre supprimée avec succès.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

// GET /admin/offres - Liste de toutes les offres
router.get('/offres', async (req, res) => {
  try {
    const [offres] = await pool.execute(
      `SELECT
         o.id,
         o.titre,
         o.localisation,
         o.type_contrat,
         o.statut,
         o.date_publication,
         e.nom as entreprise_nom,
         COUNT(c.id) as nb_candidatures
       FROM offres_emploi o
       LEFT JOIN entreprises e ON o.entreprise_id = e.id
       LEFT JOIN candidatures c ON c.offre_id = o.id
       GROUP BY o.id
       ORDER BY o.date_publication DESC`
    );
    res.json({ offres });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

module.exports = router;
