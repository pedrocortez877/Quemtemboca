import { IUserRepository } from "../interfaces/IUserRepository";
import UserModel from "../model/UserModel";

class UserRepository implements IUserRepository{
  async getByEmail(Email: string): Promise<UserModel | null>{
    const user = await UserModel.findOne({where: {Email}});
    return user;
  }
}

export {UserRepository};
