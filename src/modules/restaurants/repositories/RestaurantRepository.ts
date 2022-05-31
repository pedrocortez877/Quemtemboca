import { IRestaurantRepository } from "../interfaces/IRestaurantRepository";
import RestaurantModel from "../model/RestaurantModel";

class RestaurantRepository implements IRestaurantRepository{
  async getAll(): Promise<RestaurantModel[]>{
    const restaurants = await RestaurantModel.findAll();
    return restaurants;
  }
}

export {RestaurantRepository};
