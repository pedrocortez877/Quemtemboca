import { IAddressRepository } from "../interfaces/IAddressRepository";
import AddressModel from "../model/AddressModel";

class AddressRepository implements IAddressRepository{
  async getByUserId(IdUser: string): Promise<AddressModel | null> {
    const address = AddressModel.findOne({ where: {IdUser} });
    return address;
  }
}

export { AddressRepository };
