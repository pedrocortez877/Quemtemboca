interface IUserAttributes{
  Id: string;
  Email: string;
  Password: string;
  Name: string;
}

interface IUserInput extends Required<IUserAttributes>{};

export { IUserAttributes, IUserInput };
