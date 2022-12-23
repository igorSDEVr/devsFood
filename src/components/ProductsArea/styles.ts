import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    cursor: pointer;
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    cursor: pointer;
`;

// export const ProductPaginationItem = styled.div`
//     background-color: ${props => props.active === props.current ? '#CCC' : '#fff'};
//     padding: 5px 10px;
//     border-radius: 5px;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
//     margin-right: 10px;
// `;