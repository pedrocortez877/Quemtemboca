import { Request, Response } from 'express';

import LoginService from '../services/Login/LoginService';
import ResponseTypes from '../../types/ResponseTypes';

export default{
  async login(req: Request, res: Response){
    const {statusCode, data}: ResponseTypes = await LoginService.login(req.body);
    return res.status(statusCode).json(data);
  }
}
