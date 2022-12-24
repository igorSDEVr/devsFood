import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';
import * as C from './styled';

type Props = {
  search: string;
  onSearch: Dispatch<SetStateAction<string>>;
};

export const Header = ({ search, onSearch }: Props) => {

  const [inputActive, setInputActive] = useState(false);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if (search === ''){
        setInputActive(false);
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return ( 
    <C.Container>
        <C.Logo src='/assets/logo.png' />
        <C.SearchInput 
            type='text'
            value={search}
            onChange={handleChange}
            placeholder='Digite um produto'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            active={inputActive}
            /> 
    </C.Container>
  );
};