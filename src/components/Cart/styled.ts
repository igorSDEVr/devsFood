import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #136713;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader  = styled.div`
    height: 50px;
    width: 290px;
    display: flex;
    align-items: center;
    cursor: pointer;


`;

export const CartIcon = styled.img`
    height: auto;
    width: 23px;
    margin: 0 10px 0 10px;
`;

export const CartText = styled.div`
    color: #ffffff;
    font-size: 17px;
    flex: 1;
`;

export const CartBody = styled.div<{show: boolean}>`
    display: ${props => props.show ? 'block' : 'none'};
    color: #fff;
`;

export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;
export const ProductPhoto = styled.img`
    height: auto;
    width: 64px;
    border-radius: 10px;
`;
export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px; 
`;
export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
export const ProductPrice = styled.div`
    font-size: 13px;
`;
export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtIcon = styled.img`
    height: auto;
    width: 13px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
`;