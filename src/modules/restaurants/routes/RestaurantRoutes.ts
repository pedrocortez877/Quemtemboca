import { Router } from 'express';

import { getAllRestaurantsController } from '../useCases/getAllRestaurants/Index';

const routes = Router();

routes.post('/', getAllRestaurantsController.handle);

export default routes;
