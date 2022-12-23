import  styled  from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #ff0000;
`;

export const PageBody = styled.div`
  background-color: #00980e;// bgColor parecido com o bgImage
  background-image: url(/assets/bg.png);
  display: flex;
  flex: 1;
  overflow-y: auto;
`;