import { DataTypes } from "sequelize/types";
import { db } from "../configs/db";

export const UserModel = db.define("Users", {
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
