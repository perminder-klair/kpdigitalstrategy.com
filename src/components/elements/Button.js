import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  &&& {
    color: ${props => (props.secondary ? props.theme.SecondaryColor : '#fff')};
    padding: ${props =>
      props.isMedium ? '0.5rem 1rem 1.65rem 1rem' : '0.5rem 2.5rem'};
    border-radius: 0;
    background-color: transparent;
    font-weight: 600;
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
    className={`button is-size-7 has-text-weight-semibold 
    ${isLarge ? 'is-large' : ''}`}
    {...props}>
    {children}
  </Container>
);

export default Button;
