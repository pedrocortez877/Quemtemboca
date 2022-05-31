import ProductModel from "../model/ProductModel";

interface IProductRepository{
  getByIdCategory(IdCategory: string): Promise<ProductModel[]>;
}

export { IProductRepository };
