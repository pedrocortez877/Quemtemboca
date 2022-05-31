import { IAddressRepository } from "../../interfaces/IAddressRepository";
import AddressModel from "../../model/AddressModel";

class GetAddressByIdUserUseCase{
  constructor(private addressRepository: IAddressRepository) {}

  async getByUserId(IdUser: string): Promise<AddressModel | null>{
    const address = await this.addressRepository.getByUserId(IdUser);
    return address;
  }
}

export { GetAddressByIdUserUseCase };
