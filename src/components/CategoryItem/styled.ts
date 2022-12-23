import styled from "styled-components";

 export const Container = styled.div<{active: number, idProp: number}>`
     height: 80px;
     width: 80px;
     background-color: ${props => props.active === props.idProp ? '#fff' : '#AAE09A'};
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 20px;
     margin-right: 10px;
     cursor: pointer;
     transition: all ease .3s;
 `;

 export const CategoryImage = styled.img`
    height: 55px;
    width: 55px;
 `;