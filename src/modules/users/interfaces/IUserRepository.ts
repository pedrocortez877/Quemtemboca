import UserModel from "../model/UserModel";

interface IUserRepository{
  getByEmail(email: string): Promise<UserModel | null>;
}

export { IUserRepository };
