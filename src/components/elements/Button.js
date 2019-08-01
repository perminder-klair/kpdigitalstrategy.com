import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  &&& {
    color: ${props => (props.secondary ? props.theme.SecondaryColor : '#fff')};
    padding-left: 2.5em;
    padding-right: 2.5em;
    padding-top: 0.4em;
    padding-bottom: 2em;
    border-radius: 0;
    background-color: transparent;
    border: 2px solid
      ${props =>
        props.borderWhite ? props.theme.SecondaryColor : '#fff'}!important;
    :hover {
      background: transparent;
    }
  }
`;

const Button = ({ children, ...otherProps }) => (
  <Container
    type="submit"
    className="button is-large is-size-7 has-text-weight-semibold"
    {...otherProps}>
    {children}
  </Container>
);

export default Button;
