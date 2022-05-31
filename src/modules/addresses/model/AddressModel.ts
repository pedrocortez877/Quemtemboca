import { DataTypes, Model } from "sequelize";
import { db } from "../../../configs/db";

import UserModel from "../../users/model/UserModel";

import { IAddressAttributes, IAddressInput } from '../interfaces/IAddressModel';

class AddressModel extends Model<IAddressAttributes, IAddressInput> implements IAddressAttributes{
  Id: number;
  IdUser: string;
  Street: string;
  StreetNumber: number;
  Neighborhood: string;
  City: string;
  ZipCode: string;
}

AddressModel.init({
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
  tableName: 'Addresses',
  createdAt: false,
  updatedAt: false,
});

export default AddressModel;
