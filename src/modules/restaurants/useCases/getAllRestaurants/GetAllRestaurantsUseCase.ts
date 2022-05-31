import { IRestaurantRepository } from "../../interfaces/IRestaurantRepository";
import RestaurantModel from "../../model/RestaurantModel";

class GetAllRestaurantsUseCase{
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async getAll(): Promise<RestaurantModel[]>{
    const restaurants = await this.restaurantRepository.getAll();
    return restaurants;
  }
}

export { GetAllRestaurantsUseCase };
