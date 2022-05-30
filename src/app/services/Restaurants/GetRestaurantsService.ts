import RestaurantsModel from "../../models/RestaurantsModel";

export default{
  async getAll(): Promise<RestaurantsModel[]> {
    const restaurants = await RestaurantsModel.findAll();
    return restaurants;
  }
}
