import { ModalType } from '../../types/ModalType';
import { ReducerActionType } from '../../types/ReducerActionType';

export const modalInitialState: ModalType = {
    status: false,
    id: 0,
    id_cat: 0,
    name: '',
    image: '',
    price: 0,
    ingredients: '',
    points: 0
};

enum actionType {
  openModal = 'OPEN_MODAL',
  closeModal = 'CLOSE_MODAL'
};

export const modalReducer = (state: ModalType, action: ReducerActionType) => {
  switch(action.type) {

    case actionType.openModal:
      
      return {
        ...state,
        status: action.payload.status,
        id: action.payload.id,
        id_cat: action.payload.id_cat,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
        ingredients: action.payload.ingredients,
        points: action.payload.points
      }
    break;

    case actionType.closeModal:
      return {...state, status: action.payload.status}
    break;

    default:
      return state;
  };
};