import RestaurantModel from '../model/RestaurantModel';

interface IRestaurantRepository{
  getAll(): Promise<RestaurantModel[]>;
}

export { IRestaurantRepository };
