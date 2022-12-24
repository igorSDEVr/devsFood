import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #136713;
    padding: 20px;
    border-radius: 10px;

    @media (max-width: 750px) {
        flex-direction: column;
    }

    @media (max-width: 450px) {
        width: 250px;
    }
`;

export const Logo = styled.img`
    height: 70px;
    width: auto;

    @media (max-width: 450px) {
        width: 200px;
    }
`;

export const SearchInput = styled.input<{active: boolean}>`
    height: 50px;
    width: ${props => props.active ? '85%' : '0'};
    cursor: ${props => props.active ? 'text' : 'pointer'};
    font-size: 15px;
    background-color: #fff;
    padding-left: 50px;
    transition: all .3s;
    border: 0;
    border-radius: 25px;
    outline: none;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;

    @media (max-width: 750px) {
        margin-top: 30px;
    }

    @media (max-width: 450px) {
        margin-left: 10px;
    }
`;