export interface IAddress {
  street: string;
  city: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}