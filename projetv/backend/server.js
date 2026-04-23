const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/offres', require('./routes/offres'));
app.use('/api/v1/entreprises', require('./routes/entreprises'));
app.use('/api/v1/candidatures', require('./routes/candidatures'));
app.use('/api/v1/candidats', require('./routes/candidats'));
app.use('/api/v1/admin', require('./routes/admin'));
app.use('/api/v1/messages', require('./routes/messages'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route de test
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Chasseur de tête opérationnelle' });
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route non trouvée.' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📊 API disponible sur http://localhost:${PORT}/api/v1`);
});