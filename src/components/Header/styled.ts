import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #136713;
    padding: 20px;
    border-radius: 10px;
`;

export const Logo = styled.img`
    height: 70px;
    width: auto;
`;

export const SearchInput = styled.input<{active: boolean}>`
    height: 50px;
    width: ${props => props.active ? '300' : '0'}px;
    cursor: ${props => props.active ? 'text' : 'pointer'};
    font-size: 15px;
    background-color: #fff;
    padding-left: 50px;
    transition: .3s;
    border: 0;
    border-radius: 25px;
    outline: none;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
`;