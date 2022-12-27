import * as C from './styled';
import { Header } from '../../components/Header';
import { CategoryArea } from '../../components/CategoryArea';
import { ProductsArea } from '../../components/ProductsArea';
import { Modal } from '../../components/Modal';
import { ModalProduct } from '../../components/ModalProduct';
import { Cart } from '../../components/Cart';


export const HomeScreen = () => {
  return (
    <C.Container>
      <Header />
      <CategoryArea />
      <ProductsArea />
      <Modal>
        <ModalProduct/>
      </Modal>
      <Cart />
    </C.Container>
  );
};