import { AddressRepository } from '../../repositories/AddressRepository';
import { GetAddressByIdUserUseCase } from './GetAddressByIdUserUseCase';
import { GetAddressByIdUserController } from './GetAddressByIdUserController';

const addressRepository = new AddressRepository();
const getAddressByIdUserUseCase = new GetAddressByIdUserUseCase(addressRepository);
const getAddressByIdUserController = new GetAddressByIdUserController(getAddressByIdUserUseCase);

export { getAddressByIdUserController };
