import styled from "styled-components";

export const Container = styled.div<{status: boolean}>`
   display: ${props => props.status ? 'grid' : 'none'};
   place-items: center;
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1;
   background-color: rgba(0, 0, 0, 0.7); 
`;

export const ModalBody = styled.div`
  max-height: 95vh;
  max-width: 100vw;
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 50px #000;
`;