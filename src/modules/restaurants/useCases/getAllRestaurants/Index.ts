import { RestaurantRepository } from '../../repositories/RestaurantRepository';
import { GetAllRestaurantsUseCase } from './GetAllRestaurantsUseCase';
import { GetAllRestaurantsController } from './GetAllRestaurantsController';

const restaurantRepository = new RestaurantRepository();
const getAllRestaurantsUseCase = new GetAllRestaurantsUseCase(restaurantRepository);
const getAllRestaurantsController = new GetAllRestaurantsController(getAllRestaurantsUseCase);

export { getAllRestaurantsController };
