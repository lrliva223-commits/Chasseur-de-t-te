const express = require('express');
const { v4: uuidv4 } = require('uuid');
const pool = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();
router.use(auth);

router.get('/conversations', async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await pool.execute(
      `SELECT u.id, u.prenom, u.nom, u.role,
              lm.contenu AS dernier_message,
              lm.date_envoi,
              SUM(CASE WHEN m.destinataire_id = ? AND m.lu = 0 THEN 1 ELSE 0 END) AS non_lu
       FROM messages m
       JOIN (
         SELECT
           IF(expediteur_id = ?, destinataire_id, expediteur_id) AS interlocuteur_id,
           MAX(date_envoi) AS last_date
         FROM messages
         WHERE expediteur_id = ? OR destinataire_id = ?
         GROUP BY interlocuteur_id
       ) latest ON latest.interlocuteur_id = IF(m.expediteur_id = ?, m.destinataire_id, m.expediteur_id)
       JOIN messages lm ON lm.date_envoi = latest.last_date
         AND ((lm.expediteur_id = ? AND lm.destinataire_id = latest.interlocuteur_id) OR (lm.expediteur_id = latest.interlocuteur_id AND lm.destinataire_id = ?))
       JOIN utilisateurs u ON u.id = latest.interlocuteur_id
       WHERE m.expediteur_id = ? OR m.destinataire_id = ?
       GROUP BY u.id, u.prenom, u.nom, u.role, lm.contenu, lm.date_envoi
       ORDER BY lm.date_envoi DESC`,
      [userId, userId, userId, userId, userId, userId, userId, userId, userId, userId]
    );

    res.json({ conversations: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.get('/conversation/:userId', async (req, res) => {
  try {
    const userId = req.user.id;
    const otherId = req.params.userId;

    await pool.execute(
      'UPDATE messages SET lu = 1 WHERE destinataire_id = ? AND expediteur_id = ?',
      [userId, otherId]
    );

    const [messages] = await pool.execute(
      `SELECT id, expediteur_id, destinataire_id, contenu, lu, date_envoi
       FROM messages
       WHERE (expediteur_id = ? AND destinataire_id = ?) OR (expediteur_id = ? AND destinataire_id = ?)
       ORDER BY date_envoi ASC`,
      [userId, otherId, otherId, userId]
    );

    res.json({ messages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const expediteur_id = req.user.id;
    const { destinataire_id, contenu } = req.body;

    if (!destinataire_id || !contenu?.trim()) {
      return res.status(400).json({ error: 'Destinataire et contenu requis.' });
    }

    const [users] = await pool.execute('SELECT id FROM utilisateurs WHERE id = ?', [destinataire_id]);
    if (users.length === 0) {
      return res.status(404).json({ error: 'Destinataire introuvable.' });
    }

    const id = uuidv4();
    await pool.execute(
      'INSERT INTO messages (id, expediteur_id, destinataire_id, contenu) VALUES (?, ?, ?, ?)',
      [id, expediteur_id, destinataire_id, contenu]
    );

    res.json({ message: 'Message envoyé.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
});

module.exports = router;
