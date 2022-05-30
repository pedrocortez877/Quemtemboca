import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import UserModel from '../../models/UserModel';

interface LoginProps{
  email: string;
  password: string;
}

export default{
  async login({ email, password }: LoginProps): Promise<String | null>{
    const user = await UserModel.findOne({where: {Email: email}});

    if(user){
      const correctPass = bcrypt.compareSync(password, user.Password);

      if(correctPass){
        const token = sign({ id: user.Id }, process.env.SECRET);
        return token
      }
    }

    return null;
  }
}
