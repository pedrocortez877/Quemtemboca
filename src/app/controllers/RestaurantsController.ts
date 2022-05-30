import { Request, Response } from 'express';

import GetRestaurantsService from '../services/Restaurants/GetRestaurantsService';

export default{
  async getAll(req: Request, res: Response){
    const restaurants = await GetRestaurantsService.getAll();

    return res.status(200).json(restaurants);
  }
}
