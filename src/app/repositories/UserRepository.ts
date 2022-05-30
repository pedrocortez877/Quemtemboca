import UserModel from "../models/UserModel"

export default{
  async getUser(email: string): Promise<UserModel | null>{
    const user = await UserModel.findOne({where: {Email: email}});
    return user;
  }
}
