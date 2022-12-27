import { UserType } from './UserType';
import { CartType } from './CartType';
import { ModalType } from './ModalType';
import { ProductsReducerType } from './ProductsReducerType';

export type InitialStateType = {
  user: UserType;
  cart: CartType;
  modal: ModalType;
  products: ProductsReducerType;
};