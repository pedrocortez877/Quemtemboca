import { DataTypes, Model } from "sequelize";
import { db } from "../configs/db";

import ProductsModel from "./ProductsModel";

interface RestaurantAttributes{
  Id: number;
  Name: string;
  FoodType: string;
  Evaluation: number;
  DeliveryTime: string;
  DeliveryValue: number;
  ProfileImage: string;
  BackgroundImage: string;
}

export interface RestaurantInput extends Required<RestaurantAttributes>{};
export interface RestaurantOutput extends Required<RestaurantAttributes>{};

class RestaurantsModel extends Model<RestaurantAttributes, RestaurantInput> implements RestaurantAttributes{
  Id: number;
  Name: string;
  FoodType: string;
  Evaluation: number;
  DeliveryTime: string;
  DeliveryValue: number;
  ProfileImage: string;
  BackgroundImage: string;
}

RestaurantsModel.init({
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
  Evaluation: {
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
},
{
  timestamps: true,
  sequelize: db,
  tableName: 'Restaurants'
});

//RELACIONAMENTO PRODUTOS X RESTAURANTES
RestaurantsModel.hasMany(ProductsModel, {
  foreignKey: {
    name: 'IdRestaurant',
    allowNull: false,
  }
});

export default RestaurantsModel;
