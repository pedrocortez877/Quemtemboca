import { DataTypes } from "sequelize/types";
import { db } from "../configs/db";

import { ProductsModel } from "./ProductsModel";

export const ProductCategoriesModel = db.define("ProductCategories", {
  Id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

//RELACIONAMENTO PRODUTOS X CATEGORIAS
ProductCategoriesModel.belongsTo(ProductsModel, {
  foreignKey: {
    name: 'IdCategory',
    allowNull: false,
  }
});
