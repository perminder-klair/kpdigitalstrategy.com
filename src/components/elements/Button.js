import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  &&& {
    color: ${props => (props.secondary ? props.theme.SecondaryColor : '#000')};
    padding: 0.5rem 1.25rem;
    border-radius: 0;
    background-color: transparent;
    font-weight: 600;
    border: 2px solid
      ${props =>
        props.borderRed ? props.theme.SecondaryColor : '#fffff'}!important;
    :hover {
      background: transparent;
    }
  }
`;

const Button = ({ children, isLarge }) => (
  <Container
    type="submit"
    className={`buttonis-size-7 has-text-weight-semibold 
    ${isLarge ? 'is-large is-fullwidth' : ''}`}>
    {children}
  </Container>
);

export default Button;
