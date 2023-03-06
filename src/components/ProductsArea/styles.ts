import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    margin-left: 20px;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    cursor: pointer;

    @media (max-width: 910px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 670px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    cursor: pointer;
`;