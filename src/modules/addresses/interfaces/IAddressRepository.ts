import AddressModel from "../model/AddressModel";

interface IAddressRepository{
  getByUserId(IdUser: string): Promise<AddressModel | null>;
}

export { IAddressRepository };
