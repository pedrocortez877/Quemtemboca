import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserRepository } from '../../repositories/UserRepository';

interface LoginProps{
  email: string;
  password: string;
}

class LoginService{
  constructor(private userRepository: UserRepository){}

  async login({ email, password }: LoginProps): Promise<String | null>{
    const user = await this.userRepository.getByEmail(email);

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

export {LoginService};
