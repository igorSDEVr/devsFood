import { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import * as C from './styled';

export const Cart =  () => {
  const { state , dispatch } = useContext(Context);
  const [show, setShow] = useState<boolean>(false);

  const cartData = state.cart;

  const handleCartClick = () => setShow(!show);
    
  const handleProductChange = ( key: number, increaseOrDecreaseQt: boolean) => {
    dispatch({
        type: 'CHANGE_PRODUCT',
        payload: {
            key, increaseOrDecreaseQt
        }
    });
  };

  useEffect(() => {
    if(cartData.products.length > 0) {
        if(cartData.products[0].name === '') {
            cartData.products.shift();
        };
    };

  }, [cartData]);

  return (
    <C.CartArea>
        <C.CartHeader onClick={handleCartClick}>
            <C.CartIcon src='/assets/cart.png' />
            <C.CartText>Meu Carrinho ({cartData.products.length})</C.CartText>
            {show && 
                <C.CartIcon  src='/assets/down.png'/>
            }
            
        </C.CartHeader>
        <C.CartBody show={show}>
            <C.ProductsArea>
                {cartData.products.map(product => (
                    <C.ProductItem key={product.id}>
                    <C.ProductPhoto src={product.image}/>
                    <C.ProductInfoArea>
                        <C.ProductName>{product.name}</C.ProductName>
                        <C.ProductPrice>R$  {(product.price * product.qt).toFixed(2)}</C.ProductPrice>
                    </C.ProductInfoArea>
                    <C.ProductQuantityArea>
                        <C.ProductQtIcon
                          src='/assets/minus.png'
                          onClick={() => handleProductChange(product.id, false)}
                        />
                            <C.ProductQtText>{product.qt}</C.ProductQtText>
                        <C.ProductQtIcon
                          src='/assets/plus.png'
                          onClick={() => handleProductChange(product.id, true)}
                        />
                    </C.ProductQuantityArea>
                </C.ProductItem>
                ))}
                
            </C.ProductsArea>
        </C.CartBody>
    </C.CartArea>
);
};