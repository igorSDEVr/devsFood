import { useState, useContext, ChangeEvent } from 'react';
import * as C from './styled';
import { Context } from '../../context/Context';

export const Header = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  const { state, dispatch } = useContext(Context);

  const search = state.products.search;

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if (search === ''){
        setInputActive(false);
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SEARCH_BY_NAME',
      payload: {
        search: e.target.value
      }
    });
  };

  return ( 
    <C.Container>
        <C.Logo src='/assets/logo.png' />
        <C.SearchInput 
            type='text'
            onChange={handleChange}
            placeholder='Digite um produto'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            active={inputActive}
        /> 
    </C.Container>
  );
};