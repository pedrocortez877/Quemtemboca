interface IProductCategoryAttributes{
  Id: string;
  Name: string;
}

interface IProductCategoryInput extends Required<IProductCategoryAttributes>{};

export { IProductCategoryAttributes, IProductCategoryInput };
