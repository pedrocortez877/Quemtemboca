import { DataTypes, Model } from "sequelize";
import { db } from "../configs/db";

import UserModel from "./UserModel";

interface AddressesAttributes{
  Id: number;
  IdUser: string;
  Street: string;
  StreetNumber: number;
  Neighborhood: string;
  City: string;
  ZipCode: string;
}

export interface AddressesInput extends Required<AddressesAttributes>{};
export interface AddressesOutput extends Required<AddressesAttributes>{};

class AddressesModel extends Model<AddressesAttributes, AddressesInput> implements AddressesAttributes{
  Id: number;
  IdUser: string;
  Street: string;
  StreetNumber: number;
  Neighborhood: string;
  City: string;
  ZipCode: string;
}

AddressesModel.init({
  Id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  IdUser: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  Street: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  StreetNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Neighborhood: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  City: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  ZipCode: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
},
{
  timestamps: true,
  sequelize: db,
  tableName: 'Addresses'
});

//RELACIONAMENTO PRODUTOS X CATEGORIAS
AddressesModel.belongsTo(UserModel, {
  foreignKey: {
    name: 'IdUser',
    allowNull: false,
  }
});

export default AddressesModel;
