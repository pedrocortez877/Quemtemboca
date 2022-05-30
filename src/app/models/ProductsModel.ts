import { DataTypes, Model } from "sequelize/types";
import { db } from "../configs/db";

import ProductCategoriesModel from "./ProductCategoriesModel";
import RestaurantsModel from "./RestaurantsModel";

interface ProductAttributes{
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  IdCategory: number;
  IdRestaurant: number;
  Image: string;
}

export interface ProductInput extends Required<ProductAttributes>{};
export interface ProductOutput extends Required<ProductAttributes>{};

class ProductsModel extends Model<ProductAttributes, ProductInput> implements ProductAttributes{
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  IdCategory: number;
  IdRestaurant: number;
  Image: string;
}

ProductsModel.init({
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
  tableName: 'Products'
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

export default ProductsModel;
