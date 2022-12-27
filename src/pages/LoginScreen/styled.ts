import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  width: 50%;
  background-color: rgba(0.8, 0.8, 0.8, 0.5);
`;

export const FormHeader = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`;

export const FormTitle = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const FormBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const FormInput = styled.input`
  border: none;
  margin: 30px;
  display: block;
  height: 15px;
  max-width: 250px;
  padding: 10px;
`;

export const ButtonInput = styled.button`
  height: 30px;
  border: none;
  background-color: #ff0000;
  color: #fff;
  margin-bottom: 12px;
`;