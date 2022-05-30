import UserModel from "../models/UserModel";

class UserRepository{
  async getByEmail(Email: string): Promise<UserModel | null>{
    const user = await UserModel.findOne({where: {Email}});
    return user;
  }
}

export {UserRepository};
