import { useState } from 'react';
import * as C from './styles';
import { MenuItem } from '../MenuItem';

export const Theme = () => {

  const [show, setShow] = useState(false);

  return (
    <C.Menu show={show}>
      <MenuItem title='LOJA' icon='/assets/store.png' link='/' />
      <MenuItem title='PERFIL' icon='/assets/order.png' link='/profile' />
      <MenuItem title='LOGIN' icon='/assets/profile.png' link='/login' />
      <C.BtnToggle onClick={() => setShow(!show)}>
        {show ?
          <C.ImgClose src='/assets/gt.png'/> : <C.ImgOpen src='/assets/lt.png' />
        }
      </C.BtnToggle>
    </C.Menu>
  );
};