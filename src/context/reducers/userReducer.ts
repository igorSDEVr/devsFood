import { UserType } from '../../types/UserType';
import { ReducerActionType } from '../../types/ReducerActionType';

export const userInitialState: UserType = {
  name: '',
  password: ''
};

enum actionType {
  addUser = 'ADD_USER'
};

export const userReducer = (state: UserType, action: ReducerActionType) => {
  switch(action.type) {

    case actionType.addUser:
      return {...state, name: action.payload.name, password: action.payload.password};

    default:
      return {...state};
  };
};