import styled from "styled-components";

export const Menu = styled.div`

  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #136713;

  @media (max-width: 450px) {
    width: 60px;
  }
`;