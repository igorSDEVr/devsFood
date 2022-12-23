import { UserType } from './UserType';
import { CartType } from './CartType';
import { ModalType } from './ModalType';

export type InitialStateType = {
  user: UserType;
  cart: CartType;
  modal: ModalType;
};