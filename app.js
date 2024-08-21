const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware para processar JSON
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send(`Welcome to ${process.env.COMPANY_NAME} API`);
});

module.exports = app;
