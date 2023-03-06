import { Suspense } from 'react';
import * as C from './styles';
import { Loading } from '../Loading';
import { CategoriesType } from '../../types/CategoriesType';
import { CategoryItem } from '../CategoryItem';
import { useFetch } from '../../hooks/useFetch';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const CategoryArea = () => {

  const { state, dispatch } = useContext(Context);
  const { isFilteredList } = state.products;

  
  enum endPoints {
    categories = 'categories'
  };

  function handleDeselect() {
    dispatch({
      type: 'RESET_CATEGORY'
    });
  };

  const { data: categoriesData } = useFetch<CategoriesType>(endPoints.categories);

  return (
    <C.Container>
      <C.CategoryTitle>Selecione uma categoria</C.CategoryTitle>
      <C.CategoryArea>
        <Suspense fallback={<Loading />}>
          {categoriesData?.result.map(categorie => (
            <CategoryItem 
              key={categorie.id} 
              data={categorie} 
              />
          ))}
          {isFilteredList && <C.BtnDeselect onClick={handleDeselect}>Todos</C.BtnDeselect>}
        </Suspense>
      </C.CategoryArea>
    </C.Container>
  );
};
