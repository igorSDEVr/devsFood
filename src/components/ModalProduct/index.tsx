import { useState, useEffect, useContext } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';

export const ModalProduct = () => {

  const [qt, setQt] = useState(1);

  const { state, dispatch } = useContext(Context);

  const { modal: dataModal } = state;

  const handleMinusQt = () => {if(qt > 1) setQt(prev => prev - 1)};
  const handlePlusQt = () => setQt(prev => prev + 1);

  const closeModal = () => {
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
  };

  const handleCancelButton = () => {
    closeModal()
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        product: {
          id: dataModal.id,
          id_cat: dataModal.id_cat,
          name: dataModal.name,
          image: dataModal.image,
          price: dataModal.price,
          ingredients: dataModal.ingredients,
          qt
        }
      }
    });

    closeModal();
  };

  useEffect(() => {
    setQt(1);
  }, [dataModal]);

  return (
    <C.Container>
      <C.ProductArea>
         <C.ProductPhoto src={dataModal.image}/>
         <C.ProductInfoArea>

          <C.ProductDetails>
            <C.ProductName>{dataModal.name}</C.ProductName>
            <C.ProductIngredient>{dataModal.ingredients}</C.ProductIngredient>
          </C.ProductDetails>

          <C.ProductQuantityArea>
            <C.ProductQuantity>
               <C.ProductQtImage src='/assets/minus.png' onClick={handleMinusQt} />
               <C.ProductQtText>{qt}</C.ProductQtText>
               <C.ProductQtImage src='/assets/plus.png' onClick={handlePlusQt} />
            </C.ProductQuantity>
            <C.ProductPrice>{(dataModal.price * qt).toFixed(2)}</C.ProductPrice>
          </C.ProductQuantityArea>

         </C.ProductInfoArea>
      </C.ProductArea>

      <C.ProductButtons>
        <C.ProductButton small={true} onClick={handleCancelButton}>
          cancelar
        </C.ProductButton>

        <C.ProductButton onClick={handleAddToCart}>
          adicionar ao carrinho
        </C.ProductButton>
      </C.ProductButtons>
    </C.Container>
  );
};