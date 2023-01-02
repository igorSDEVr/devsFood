import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import * as C from './styled';
import { Context } from '../../context/Context';

export const LoginScreen = () => {
  const { dispatch } = useContext(Context);
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_USER',
      payload: {
        name: nameInput,
        password: passwordInput
      }
    });
  };

  
  return (
    <C.Container>
      <C.Form>
        <C.FormHeader>
        <C.FormTitle>Faça o Login abaixo</C.FormTitle>
        </C.FormHeader>
        <C.FormBody>
          <C.FormInput
            type='text'
            value={nameInput}
            onChange={handleNameChange}
            placeholder='Digite seu nome'
            autoFocus
          />
          <C.FormInput
            type='password'
            value={passwordInput}
            onChange={handlePasswordChange}
            placeholder='digite sua senha'
            autoComplete='abc'
          />

          <C.ButtonInput onClick={handleLogin}>
            Cadastrar
          </C.ButtonInput>
        </C.FormBody>
      </C.Form>
    </C.Container>
  );
};