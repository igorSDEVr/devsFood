import { createContext, useReducer } from 'react';
import { userInitialState, userReducer } from './reducers/userReducer';
import { cartInitialState, cartReducer } from './reducers/cartReducer';
import { modalInitialState, modalReducer } from './reducers/modalReducer';
import { productsInitialState, productsReducer } from './reducers/productsReducer';
import { ReducerActionType } from '../types/ReducerActionType';
import { InitialStateType } from '../types/InitialStateType';
import { ContextType } from '../types/ContextType';
import { ChildrenType } from '../types/ChildrenType';

const initialState: InitialStateType = {
  user: userInitialState,
  cart: cartInitialState,
  modal: modalInitialState,
  products: productsInitialState
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (state: InitialStateType, action: ReducerActionType) => ({
  user: userReducer(state.user, action),
  cart: cartReducer(state.cart, action),
  modal: modalReducer(state.modal, action),
  products: productsReducer(state.products, action)
});

export const ContextProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};