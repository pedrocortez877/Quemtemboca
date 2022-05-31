interface IRestaurantAttributes{
  Id: number;
  Name: string;
  FoodType: string;
  Evaluation: number;
  DeliveryTime: string;
  DeliveryValue: number;
  ProfileImage: string;
  BackgroundImage: string;
}

interface IRestaurantInput extends Required<IRestaurantAttributes>{};

export { IRestaurantAttributes, IRestaurantInput };
