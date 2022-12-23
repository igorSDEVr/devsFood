import styled from 'styled-components';

export const LinkArea = styled.div<{active: boolean}>`
  height: 60px;
  width: 60px;
  background-color: ${props => props.active ? '#0B4D0B': 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
  height: 34px;
  width: 34px;
`;