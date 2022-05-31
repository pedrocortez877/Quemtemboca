
import { Model, DataTypes } from "sequelize";
import { db } from "../../../configs/db";

import ProductModel from "../../products/model/ProductModel";

import { IProductCategoryAttributes, IProductCategoryInput } from '../interfaces/IProductCategoryModel';

class ProductCategoryModel extends Model<IProductCategoryAttributes, IProductCategoryInput> implements IProductCategoryAttributes{
  Id: string;
  Name: string;
};

ProductCategoryModel.init({
  Id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
},
{
  timestamps: true,
  sequelize: db,
  tableName: 'ProductCategories',
  createdAt: false,
  updatedAt: false,
});

//RELACIONAMENTO PRODUTOS X CATEGORIAS
ProductCategoryModel.hasMany(ProductModel, {
  as: 'ProductCategories',
  foreignKey: {
    name: 'IdCategory',
    allowNull: false,
  }
});

export default ProductCategoryModel;
