import styled from 'styled-components';

export const StyledStatus = styled.span`
  background: ${props => (props.isOnline ? 'green' : 'red')};
  color: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
