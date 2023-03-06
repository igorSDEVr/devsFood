import styled from "styled-components";

export const Menu = styled.div<{ show: boolean }>`
  width: ${props=> props.show ? '30%' : '80px'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #136713;
  transition: 0.5s;
  
  @media (max-width: 500px) {
    margin-left: ${props=>props.show ? '0' : '-80px'};
  }
`;

export const BtnToggle = styled.button`
position: relative;
bottom: 130px;
left: 55px;
width: 30px;
display: none;
background: #90EE90;
padding: 0px;
cursor: pointer;
border: none;

@media (max-width: 500px) {
  display: block;
}
`
export const ImgOpen = styled.img`
  width: 100%;
`;

export const ImgClose = styled.img`
  width: 100%;
`;