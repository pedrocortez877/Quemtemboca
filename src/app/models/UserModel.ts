import { DataTypes, Model } from "sequelize/types";
import { db } from "../configs/db";

interface UserAttributes{
  Email: string;
  Password: string;
}

export interface UserInput extends Required<UserAttributes>{};
export interface UserOutput extends Required<UserAttributes>{};

class UserModel extends Model<UserAttributes, UserInput> implements UserAttributes{
  Email: string;
  Password: string;
};

UserModel.init({
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},
  {
    timestamps: true,
    sequelize: db,
    tableName: 'Users'
  }
);

export default UserModel;
