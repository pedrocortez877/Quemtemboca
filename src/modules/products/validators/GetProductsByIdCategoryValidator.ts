import yup from '../../../helpers/Yup';
import { Request, Response, NextFunction } from 'express';

type ErrorList = {
  errors: { item?: string; message: string }[];
};

export default async(req: Request, res: Response, next: NextFunction) => {
  const schema = yup.object().shape({
    IdCategory: yup.string().required(),
  });

  return schema
    .validate(req.params)
    .then(() => next())
    .catch(({ errors }: ErrorList) => res.status(400).json({ message: errors.pop() }));
}
