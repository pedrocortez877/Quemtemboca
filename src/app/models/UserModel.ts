import { DataTypes, Model } from "sequelize";
import { db } from "../configs/db";

interface UserAttributes{
  Id: string;
  Email: string;
  Password: string;
  Name: string;
}

export interface UserInput extends Required<UserAttributes>{};
export interface UserOutput extends Required<UserAttributes>{};

class UserModel extends Model<UserAttributes, UserInput> implements UserAttributes{
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

export default UserModel;
