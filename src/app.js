import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorHandling } from './utils/error.js';
import routesAlunos from './routes/routesAlunos.js';
import routesInstrutores from './routes/routesInstrutor.js';
import routesFichas from './routes/routesFichas.js';
import routeAuth from './routes/authRoutes.js'
import routesGruposMusculares from './routes/routesGruposMusculares.js';
import routesTiposExerxixios from './routes/routesTiposExercicios.js';
import connectDatabase from './database/database.js';
import { verificarToken } from './utils/verificarToken.js';
import jsonwebtoken from 'jsonwebtoken';

const app = express();

dotenv.config();

app.use(
  express.json(),
  cookieParser(),
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  }),
  express.urlencoded({ extended: true }),
  errorHandling,
);
connectDatabase();

app.use('/api/auth', routeAuth);
app.use('/api/alunos', verificarToken, routesAlunos);
app.use('/api/instrutores', verificarToken, routesInstrutores);
app.use('/api/fichas', verificarToken, routesFichas);
app.use('/api/gruposmusculares', verificarToken, routesGruposMusculares);
app.use('/api/tipoexercicios', verificarToken, routesTiposExerxixios);

export default app;
