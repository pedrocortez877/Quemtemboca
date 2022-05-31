import { ProductRepository } from "../repositories/ProductRepository";
import { GetProductsByIdCategoryUseCase } from "./GetProductsByIdCategoryUseCase";
import { GetProductsByIdCategoryController } from "./GetProductsByIdCategoryController";

const productRepository = new ProductRepository();
const getProductsByIdCategoryUseCase = new GetProductsByIdCategoryUseCase(productRepository);
const getProductsByIdCategoryController = new GetProductsByIdCategoryController(getProductsByIdCategoryUseCase);

export {getProductsByIdCategoryController};
