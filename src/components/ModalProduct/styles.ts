import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  padding: 20px;
`;

export const ProductArea = styled.div`
  display: flex;
  height: 200px;
`;

export const ProductPhoto = styled.img`
  width: 310px;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ProductIngredient = styled.div`
  font-size: 14px;
`;

export const ProductQuantityArea = styled.div`
  height: 50px;
  justify-content: space-between;
`;

export const ProductButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

export const ProductButton = styled.div<{small?: boolean}>`
  font-size: ${props => props.small ? '13px' : '22px '};
  padding: ${props => props.small ? '5px 10px' : '10px 20px'};
  background-color: #073C07;
  color: #fff;
  font-weight: bold;
  border: none;
  box-shadow: 4px 5px 0 #CCC;
  margin-left: 10px;
  cursor: pointer;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: #073C07;
  border-radius: 5px;
`;

export const ProductQtImage = styled.img`
  height: auto;
  width: 24px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
`;