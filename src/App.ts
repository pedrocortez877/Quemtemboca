import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

const corsOptions: cors.CorsOptions = {
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));
app.use(helmet());

export default app;
