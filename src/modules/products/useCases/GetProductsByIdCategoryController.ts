import { Request, Response } from 'express';

import { GetProductsByIdCategoryUseCase } from './GetProductsByIdCategoryUseCase';

class GetProductsByIdCategoryController{
  constructor(private getProductsByIdCategoryUseCase: GetProductsByIdCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response>{
    const { IdCategory } = req.params;
    const products = await this.getProductsByIdCategoryUseCase.getByIdCategory(IdCategory);

    return res.status(200).json(products);
  }
}

export { GetProductsByIdCategoryController };
