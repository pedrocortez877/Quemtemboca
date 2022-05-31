import { Request, Response } from 'express';

import { GetAddressByIdUserUseCase } from './GetAddressByIdUserUseCase';

class GetAddressByIdUserController{
  constructor(private getAddressByIdUserUseCase: GetAddressByIdUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response>{
    const { IdUser } = req.params;
    const address = await this.getAddressByIdUserUseCase.getByUserId(IdUser);

    return res.status(200).json(address);
  }
}

export { GetAddressByIdUserController };
