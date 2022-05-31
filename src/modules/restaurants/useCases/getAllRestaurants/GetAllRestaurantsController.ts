import { Request, Response } from 'express';

import { GetAllRestaurantsUseCase } from './GetAllRestaurantsUseCase';

class GetAllRestaurantsController{
  constructor(private getAllRestaurantsUseCase: GetAllRestaurantsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response>{
    const restaurants = await this.getAllRestaurantsUseCase.getAll();

    return res.status(200).json(restaurants);
  }
}

export { GetAllRestaurantsController };
