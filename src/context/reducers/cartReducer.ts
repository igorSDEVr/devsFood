import { CartType } from '../../types/CartType';
import { ReducerActionType } from '../../types/ReducerActionType';

export const cartInitialState: CartType = {
  products: [{
    id: 0,
    id_cat: 0,
    name: '',
    image: '',
    price: 0,
    ingredients: '',
    qt: 0
  }]
};

enum actionType {
  addProduct = 'ADD_PRODUCT',
  changeProduct = 'CHANGE_PRODUCT'
};

export const cartReducer =  (state: CartType, action: ReducerActionType) => {
  const cart = {...state};
  switch(action.type) {

    case actionType.addProduct:

      const productIdToAdd = action.payload.product.id;
      const productAlreadyAdded = cart.products.findIndex(item => item.id === productIdToAdd);

      if(productAlreadyAdded > -1) {
        cart.products[productAlreadyAdded].qt += action.payload.product.qt;
      } else {
        cart.products.push({
          ...action.payload.product
        });
      }
      return {...state}
    break;

    case actionType.changeProduct:
      const productIdToChange = action.payload.key;
      const productIndexAlreadyAddedToChange = cart.products.findIndex(item => item.id === productIdToChange);

      if(action.payload.increaseOrDecreaseQt) {
          cart.products[productIndexAlreadyAddedToChange].qt ++;
      } else {
          cart.products[productIndexAlreadyAddedToChange].qt--
        if(cart.products[productIndexAlreadyAddedToChange].qt === 0) {
          cart.products.splice(productIndexAlreadyAddedToChange, 1);
         };
      };
      return {...state, cart}

      default:
        return state;
  };
};