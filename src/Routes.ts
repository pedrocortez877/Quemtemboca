import { Router } from 'express';
import LoginRoutes from './modules/users/routes/LoginUserRoutes';
import RestaurantRoutes from './modules/restaurants/routes/RestaurantRoutes';
import ProductRoutes from './modules/products/routes/ProductRoutes';
import AddressRoutes from './modules/addresses/routes/AddressRoutes';

import Auth from './middlewares/Auth';

const routes = Router();

routes.use('/login', LoginRoutes);

routes.use('/restaurants', Auth, RestaurantRoutes);

routes.use('/products', Auth, ProductRoutes);

routes.use('/addresses', Auth, AddressRoutes);

export default routes;
