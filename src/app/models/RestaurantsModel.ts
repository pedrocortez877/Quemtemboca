import { DataTypes } from "sequelize/types";
import { db } from "../configs/db";

import { ProductsModel } from "./ProductsModel";

export const RestaurantsModel = db.define("Restaurants", {
  Id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  FoodType: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Evalutation: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  DeliveryTime: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  DeliveryValue: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  ProfileImage: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  BackgroundImage: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

//RELACIONAMENTO PRODUTOS X RESTAURANTES
RestaurantsModel.hasMany(ProductsModel, {
  foreignKey: {
    name: 'IdRestaurant',
    allowNull: false,
  }
});
