import { IProductRepository } from "../interfaces/IProductRepository";
import ProductModel from "../model/ProductModel";

class GetProductsByIdCategoryUseCase{
  constructor(private productRepository: IProductRepository) {}

  async getByIdCategory(IdCategory: string): Promise<ProductModel[]>{
    const products = await this.productRepository.getByIdCategory(IdCategory);
    return products;
  }
}

export { GetProductsByIdCategoryUseCase };
