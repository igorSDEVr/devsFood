import * as C from './styles';
import { MenuItem } from '../MenuItem';

export const Theme = () => {

  return (
    <C.Menu>
      <MenuItem title='LOJA' icon='/assets/store.png' link='/' />
      <MenuItem title='PEDIDOS' icon='/assets/order.png' link='/orders' />
      <MenuItem title='MEU-PERFIL' icon='/assets/profile.png' link='/profile' />
    </C.Menu>
  );
};