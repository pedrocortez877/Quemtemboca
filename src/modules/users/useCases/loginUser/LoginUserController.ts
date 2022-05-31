import { Request, Response } from 'express';

import { LoginUserUseCase } from './LoginUserUseCase';

class LoginUserController{
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response>{
    console.log(this.loginUserUseCase);
    const token = await this.loginUserUseCase.login(req.body);

    if(!token){
      return res.status(400).json({ message: 'Usuário e/ou senha incorreto(s)' })
    }

    return res.status(400).json({token});
  }
}

export { LoginUserController };
