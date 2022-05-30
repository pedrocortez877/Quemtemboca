import { Router } from 'express';
import LoginRoutes from './app/routes/LoginRoutes';

const routes = Router();

routes.use('/login', LoginRoutes)

export default routes;
