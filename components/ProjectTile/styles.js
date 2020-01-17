import styled from 'styled-components';

export const Container = styled.div`
  height: ${props => props.height ? props.height : '300px'};
  width: ${props => props.width ? props.width : '300px'};
  background-color: rgba(0,0,0,0.5);
`;