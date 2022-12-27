import { useContext } from 'react';
import * as C from './styled';
import { Context } from '../../context/Context';

export const PrivateScreen = () => {
  const { state } = useContext(Context);
  const user = state.user.name;

  return (
    <C.Container>
      <C.Titulo>OLÁ <span>{user}</span>, agora você esta logado</C.Titulo>
    </C.Container>
  );
};