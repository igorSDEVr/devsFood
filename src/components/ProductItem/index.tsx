import { useContext } from 'react';
import * as C from './styled';
import { Context } from '../../context/Context';

type Props = {
  data: {
    id: number;
    id_cat: number;
    name: string;
    image: string;
    price: number;
    ingredients: string;
    points: number;
  }
};

export const ProductItem = ({ data }: Props) => {

  const { dispatch } = useContext(Context);

  const handleOpenModal = () => {
    dispatch({
        type: 'OPEN_MODAL',
        payload: {
            status: true,
            id: data.id,
            id_cat: data.id_cat,
            name: data.name,
            image: data.image,
            price: data.price,
            ingredients: data.ingredients,
            points: data.points
          }
        }
    );
  };

  return (
    <C.Container onClick={handleOpenModal}>

        <C.ProductsPhotoArea>
            <C.ProductPhoto src={data.image}/>
        </C.ProductsPhotoArea>

        <C.ProductsInfoArea>
            <C.ProductName>{data.name}</C.ProductName>
            <C.ProductPrice>R$ {data.price}</C.ProductPrice>
            <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
        </C.ProductsInfoArea>

        <C.ProductsButtonArea>
            <C.ProductsButton src='/assets/next.png'/>
        </C.ProductsButtonArea>

    </C.Container>
  );
};