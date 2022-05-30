import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export default async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if(!authorization){
      return res.status(401).json({
        message: 'Usuário não autenticado!'
      });
    }

    const token = authorization.split(' ')[1];

    const validToken = verify(token, process.env.SECRET);

    if(!validToken){
      return res.status(401).json({
        message: 'Credenciais inválidas!'
      });
    }

    next();
  } catch{
    return res.status(401).json({
      message: 'Erro ao autenticar!'
    });
  }
}
