import { DataTypes } from "sequelize/types";
import { db } from "../configs/db";

import { ProductCategoriesModel } from "./ProductCategoriesModel";
import { RestaurantsModel } from "./RestaurantsModel";

export const ProductsModel = db.define("Products", {
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
});

//RELACIONAMENTO PRODUTOS X CATEGORIAS
ProductsModel.belongsTo(ProductCategoriesModel, {
  foreignKey: {
    name: 'IdCategory',
    allowNull: false,
  }
});

//RELACIONAMENTO PRODUTOS X RESTAURANTES
ProductsModel.belongsTo(RestaurantsModel, {
  foreignKey: {
    name: 'IdRestaurant',
    allowNull: false,
  }
});
