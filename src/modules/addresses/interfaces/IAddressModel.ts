interface IAddressAttributes{
  Id: number;
  IdUser: string;
  Street: string;
  StreetNumber: number;
  Neighborhood: string;
  City: string;
  ZipCode: string;
}

interface IAddressInput extends Required<IAddressAttributes>{};

export { IAddressAttributes, IAddressInput };
