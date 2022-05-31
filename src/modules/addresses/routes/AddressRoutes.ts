import { Router } from 'express';

import { getAddressByIdUserController } from '../useCases/getAddressByIdUser/Index';

const routes = Router();

routes.post('/', getAddressByIdUserController.handle);

export default routes;
