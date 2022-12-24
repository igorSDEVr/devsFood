import { useState } from 'react';
import * as C from './styles';
import { Header } from '../../components/Header';
import { CategoryArea } from '../../components/CategoryArea';
import { ProductsArea } from '../../components/ProductsArea';
import { Modal } from '../../components/Modal';
import { ModalProduct } from '../../components/ModalProduct';


export const HomeScreen = () => {
  
  const [headerSearch, setHeaderSearch] = useState<string>('');

  return (
    <C.Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      <CategoryArea />
      <ProductsArea />
      <Modal>
        <ModalProduct/>
      </Modal>
    </C.Container>
  );
};