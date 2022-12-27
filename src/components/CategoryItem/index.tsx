import { useContext } from 'react';
import * as C from './styled';
import { Tooltip } from 'react-tooltip';
import { Context } from '../../context/Context';

type Props = {
  data: {
      id: number;
      name: string;
      image: string;
  };
};

export const CategoryItem = ({ data }: Props) => {
  const { state, dispatch } = useContext(Context);
  const active = state.products.categorie;

  const handleCategoryClick = () => {
    dispatch({
      type: 'SEARCH_BY_CATEGORIE',
      payload: {
        categorie: data.id
      }
    });
  };

  return (
    <C.Container
      id={data.name}
      onClick={handleCategoryClick}
      active={active}
      idProp={data.id}
      data-tooltip-content={data.name}
      data-tooltip-place='top'
    >
      <C.CategoryImage src={data.image} />
      <Tooltip anchorId={data.name} />
    </C.Container>
  );
};