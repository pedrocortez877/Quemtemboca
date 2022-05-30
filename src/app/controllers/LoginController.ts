import { Request, Response } from 'express';

import LoginService from '../services/Login/LoginService';

export default{
  async login(req: Request, res: Response){
    const token = await LoginService.login(req.body);

    if(!token){
      return res.status(400).json({ message: 'Usuário e/ou senha incorreto(s)' })
    }

    return res.status(400).json({token});
  }
}
