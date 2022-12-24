import { ChangeEvent, useContext } from 'react';
import * as C from './styled';
import { useNavigate, useParams } from "react-router-dom";
import { Context } from '../../context/Context';

export const Tela2Screen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  let { name } = useParams();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
        type: 'SET_NAME',
        payload:{
            name: e.target.value
        }
    });
  };

  return (
    <C.Container>
      <C.Titulo>Tela2 de {name}</C.Titulo>
      <input type="text" value={name} onChange={handleTextChange} />
      <button onClick={()=>navigate('/')}>Voltar</button>
    </C.Container>
  );
};