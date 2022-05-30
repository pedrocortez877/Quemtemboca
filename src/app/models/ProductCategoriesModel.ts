import { DataTypes, Model } from "sequelize/types";
import { db } from "../configs/db";

import ProductsModel from "./ProductsModel";

interface ProductCategoriesAttributes{
  Id: string;
  Name: string;
}

export interface ProductCategoriesInput extends Required<ProductCategoriesAttributes>{};
export interface ProductCategoriesOutput extends Required<ProductCategoriesAttributes>{};

class ProductCategoriesModel extends Model<ProductCategoriesAttributes, ProductCategoriesInput> implements ProductCategoriesAttributes{
  Id: string;
  Name: string;
};

ProductCategoriesModel.init({
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
  tableName: 'Products'
});

//RELACIONAMENTO PRODUTOS X CATEGORIAS
ProductCategoriesModel.belongsTo(ProductsModel, {
  foreignKey: {
    name: 'IdCategory',
    allowNull: false,
  }
});

export default ProductCategoriesModel;
