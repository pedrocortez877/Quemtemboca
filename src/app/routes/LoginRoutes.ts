import { Router } from 'express';

import LoginController from '../controllers/LoginController';
import LoginValidator from '../validators/LoginValidator';

const routes = Router();

routes.post('/', LoginValidator, LoginController.login);
