import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  &&& {
    color: ${props => (props.secondary ? props.theme.SecondaryColor : '#fff')};
    padding: 0rem 2.5rem;
    height: 2.5rem;
    border-radius: 0;
    background-color: transparent;
    border: 2px solid
      ${props =>
        props.borderRed ? props.theme.SecondaryColor : '#fff'}!important;
    :hover {
      background: transparent;
      border: 2px solid
        ${props =>
          props.borderRed ? props.theme.SecondaryColor : '#fff'}!important;
    }
  }
`;

const Button = ({ children, isLarge, ...props }) => (
  <Container
    type="submit"
    className="button is-size-7 has-text-weight-semibold"
    {...props}>
    {children}
  </Container>
);

export default Button;
