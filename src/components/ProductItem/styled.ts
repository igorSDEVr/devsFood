import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    color: #136713;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 10px;

    @media (max-width: 450px) {
        width: 250px;
    }
`;

export const ProductsPhotoArea = styled.div`
    width: 100px;
`;

export const ProductPhoto  = styled.img`
    width: 100px;
`;

export const ProductsInfoArea = styled.div`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
`;

export const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
`;

export const ProductIngredients = styled.div`
    font-size: 11px;
`;

export const ProductsButtonArea = styled.div``;

export const ProductsButton  = styled.img`
    width: 15px;
`;