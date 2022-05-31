import { Router } from 'express';

import { getProductsByIdCategoryController } from '../useCases/Index';

const routes = Router();

routes.post('/', getProductsByIdCategoryController.handle);

export default routes;
