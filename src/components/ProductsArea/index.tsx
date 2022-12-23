import { Suspense } from 'react';
import * as C from './styles';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading';
import { ProductItem } from '../../components/ProductItem';
import { ProductsType } from '../../types/ProductsType';

export const ProductsArea = () => {
  
  enum endPoint {
    products = 'products'
  };

  const { data: productsData } = useFetch<ProductsType>(endPoint.products);
  return (
    
      <C.Container>
          <C.ProductList>
          <Suspense fallback={<Loading />}>
            {productsData?.result.data.map(product => (
              <ProductItem
                key={product.id}
                data={product}
          />
        ))}
        </Suspense>
        </C.ProductList>
      </C.Container>
  );
};