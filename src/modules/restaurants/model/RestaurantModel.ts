import { DataTypes, Model } from "sequelize";
import { db } from "../../../configs/db";

import ProductsModel from "../../products/model/ProductModel";

import { IRestaurantAttributes, IRestaurantInput } from "../interfaces/IRestaurantModel";

class RestaurantModel extends Model<IRestaurantAttributes, IRestaurantInput> implements IRestaurantAttributes{
  Id: number;
  Name: string;
  FoodType: string;
  Evaluation: number;
  DeliveryTime: string;
  DeliveryValue: number;
  ProfileImage: string;
  BackgroundImage: string;
}

RestaurantModel.init({
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
  tableName: 'Restaurants',
  createdAt: false,
  updatedAt: false,
});

//RELACIONAMENTO PRODUTOS X RESTAURANTES
RestaurantModel.hasMany(ProductsModel, {
  as: 'ProductsRestaurants',
  foreignKey: {
    name: 'IdRestaurant',
    allowNull: false,
  }
});

export default RestaurantModel;
