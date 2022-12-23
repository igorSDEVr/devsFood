import { UserType } from '../../types/UserType';
import { ReducerActionType } from '../../types/ReducerActionType';

export const userInitialState: UserType = {
  name: '',
  token: ''
};

enum actionType {
  changeName = 'CHANGE_NAME',
  changeToken = 'CHANGE_TOKEN'
};

export const userReducer = (state: UserType, action: ReducerActionType) => {
  switch(action.type) {

    case actionType.changeName:
      return {...state, name: action.payload.name};
    break;

    case actionType.changeToken:
      return {...state, token: action.payload.token}
    break;

    default:
      return state;
  };
};