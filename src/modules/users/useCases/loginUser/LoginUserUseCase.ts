import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../../interfaces/IUserRepository';
import { ILoginProps } from '../../interfaces/ILoginProps';

class LoginUserUseCase{
  constructor(private userRepository: IUserRepository){}

  async login({ email, password }: ILoginProps): Promise<String | null>{
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

export {LoginUserUseCase};
