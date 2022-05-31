import { IProductRepository } from "../interfaces/IProductRepository";
import ProductModel from "../model/ProductModel";

class ProductRepository implements IProductRepository{
  async getByIdCategory(IdCategory: string): Promise<ProductModel[]> {
    const products = await ProductModel.findAll({ where: {IdCategory} });
    return products;
  }
}

export { ProductRepository };
