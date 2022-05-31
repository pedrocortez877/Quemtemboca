import { DataTypes, Model } from "sequelize";
import { db } from "../../../configs/db";
import AddressModel from "../../addresses/model/AddressModel";

import { IUserAttributes, IUserInput } from '../interfaces/IUserModel';

class UserModel extends Model<IUserAttributes, IUserInput> implements IUserAttributes{
  Id: string;
  Email: string;
  Password: string;
  Name: string;
};

UserModel.init({
  Id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
},
  {
    timestamps: true,
    sequelize: db,
    tableName: 'Users',
    createdAt: false,
    updatedAt: false,
  }
);

//RELACIONAMENTO PRODUTOS X RESTAURANTES
UserModel.hasMany(AddressModel, {
  as: 'AddressesUser',
  foreignKey: {
    name: 'IdUser',
    allowNull: false,
  }
});

export default UserModel;
