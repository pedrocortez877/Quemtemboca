import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ResponseTypes from '../../../types/ResponseTypes';

import UserRepository from "../../repositories/UserRepository";

interface LoginProps{
  email: string;
  password: string;
}

export default{
  async login({ email, password }: LoginProps): Promise<ResponseTypes>{
    const user = await UserRepository.getUser(email);

    if(user){
      const correctPass = bcrypt.compareSync(password, user.Password);

      if(correctPass){
        const token = jwt.sign({ id: user.Id }, process.env.SECRET);
        return {
          statusCode: 200,
          data: {
            results: {
              token
            },
          }
        }
      }
    }

    return {
      statusCode: 400,
      data: {
        message: 'Usuário e/ou senha incorreto(s)'
      }
    }
  }
}
