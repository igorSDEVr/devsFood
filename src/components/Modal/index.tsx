import { useContext } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';

type Props = {
  children: JSX.Element;
};

export const Modal = ({ children }: Props) => {

  const { state, dispatch } = useContext(Context);
  const status = state.modal.status;

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains('modal-bg')) {
      dispatch({
        type: 'CLOSE_MODAL',
        payload: {
          status: false,
          id: 0,
          id_cat: 0,
          name: '',
          image: '',
          price: 0,
          ingredients: '',
          points: 0
        }
      });
    }
  };

  return (
    <C.Container onClick={handleModalClose} status={status} className='modal-bg'>
      <C.ModalBody>
        {children}
      </C.ModalBody>
    </C.Container>
  );
};