interface IProductAttributes{
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  IdCategory: number;
  IdRestaurant: number;
  Image: string;
}

interface IProductInput extends Required<IProductAttributes>{};

export { IProductAttributes, IProductInput };
