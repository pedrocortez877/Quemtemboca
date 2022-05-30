import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './Routes';

const corsOptions: cors.CorsOptions = {
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

console.log(process.env.BASE_PATH);

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb' }));
app.use(helmet());
app.use(process.env.BASE_PATH || '/', routes);

export default app;
