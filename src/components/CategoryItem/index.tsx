import { Dispatch, SetStateAction } from 'react';
import * as C from './styled';
import { Tooltip } from 'react-tooltip';

type Props = {
  data: {
      id: number;
      name: string;
      image: string;
  };
  active: number;
  setActive: Dispatch<SetStateAction<number>>
};

export const CategoryItem = ({ data, active, setActive }: Props) => {

  const handleCategoryClick = () => {
    setActive(data.id)
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