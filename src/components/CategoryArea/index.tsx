import { useState, Suspense } from 'react';
import * as C from './styles';
import { Loading } from '../Loading';
import { CategoriesType } from '../../types/CategoriesType';
import { CategoryItem } from '../CategoryItem';
import { useFetch } from '../../hooks/useFetch';

export const CategoryArea = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  enum endPoints {
    categories = 'categories'
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
              active={activeCategory}
              setActive={setActiveCategory}/>
          ))}
        </Suspense>
      </C.CategoryArea>
    </C.Container>
  );
};