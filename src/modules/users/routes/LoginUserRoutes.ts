import { Router } from 'express';

import { loginUserController } from '../useCases/loginUser/Index';
import LoginUserValidator from '../validators/LoginUserValidator';

const routes = Router();

routes.post('/', LoginUserValidator, loginUserController.handle);

export default routes;
