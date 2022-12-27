import * as C from './styles';
import { MenuItem } from '../MenuItem';

export const Theme = () => {

  return (
    <C.Menu>
      <MenuItem title='LOJA' icon='/assets/store.png' link='/' />
      <MenuItem title='PERFIL' icon='/assets/order.png' link='/profile' />
      <MenuItem title='LOGIN' icon='/assets/profile.png' link='/login' />
    </C.Menu>
  );
};