import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  
  background: ${props => props.theme.colors.primary};
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

`;
