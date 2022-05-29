import yup from '../helpers/Yup';
import { Request, Response, NextFunction } from 'express';

type ErrorList = {
  errors: { item?: string; message: string }[];
};

export default(req: Request, res: Response, next: NextFunction) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }: ErrorList) => res.status(400).json({ message: errors.pop() }));
}
