import { InitialStateType } from './InitialStateType';

export type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};