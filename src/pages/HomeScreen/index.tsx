import { useState, useEffect } from 'react';
import * as C from './styles';
import { Header } from '../../components/Header';
import { CategoryArea } from '../../components/CategoryArea';
import { ProductsArea } from '../../components/ProductsArea';
import { Modal } from '../../components/Modal';
import { ModalProduct } from '../../components/ModalProduct';
let searchTimer: any | null = null;

export const HomeScreen = () => {
  
  const [headerSearch, setHeaderSearch] = useState<string>('');

  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState('');

  useEffect(() => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
        setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);

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