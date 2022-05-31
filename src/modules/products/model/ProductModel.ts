import { DataTypes, Model } from "sequelize";
import { db } from "../../../configs/db";

import ProductCategoriesModel from "../../productCategories/model/ProductCategoryModel";
import RestaurantModel from "../../restaurants/model/RestaurantModel";

import { IProductAttributes, IProductInput } from '../interfaces/IProductModel';

class ProductModel extends Model<IProductAttributes, IProductInput> implements IProductAttributes{
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  IdCategory: number;
  IdRestaurant: number;
  Image: string;
}

ProductModel.init({
  Id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  IdCategory: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  IdRestaurant: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  Image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  timestamps: true,
  sequelize: db,
  tableName: 'Products',
  createdAt: false,
  updatedAt: false,
});

export default ProductModel;
