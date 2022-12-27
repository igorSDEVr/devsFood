import { useContext, useEffect } from 'react';
import * as C from './styles';
import { useFetch } from '../../hooks/useFetch';
import { ProductItem } from '../../components/ProductItem';
import { ProductsType } from '../../types/ProductsType';
import { Context } from '../../context/Context';

export const ProductsArea = () => {
  enum endPoint {
    products = 'products'
  };
  const { data: productsData } = useFetch<ProductsType>(endPoint.products);
  const { state, dispatch } = useContext(Context);
  const products = state.products;

  useEffect(() => {
    if(products.data.length <= 1) {
      productsData?.result.data.map(item => (
        dispatch({
          type: 'ADD_PRODUCTS',
          payload: {
            data: {
              id: item.id,
              id_cat: item.id_cat,
              name: item.name,
              image: item.image,
              price: item.price,
              ingredients: item.ingredients,
              points: item.points
            }
        }})
      ));
    };
  }, []);

  return (
      <C.Container>
        {products.isFilteredList ? (
          <C.ProductList>
            {products.filteredData.map(product => (
              <ProductItem
                key={product.id}
                data={product}
              />
          )  )}
          </C.ProductList>
        )
        : // ternary operator
        (
          <C.ProductList>
            {products.data.map(product => (
              <ProductItem
                key={product.id}
                data={product}
              />
            ))}
          </C.ProductList>
        )}
      </C.Container>
  );
};

