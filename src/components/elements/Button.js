import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  &&& {
    color: ${props => (props.secondary ? props.theme.primaryColor : '#fff')};
    padding-left: 1em;
    padding-right: 1em;
    margin-bottom: ${props => (props.paddingless ? '0px' : '2rem')};
    background-color: transparent;
    border: ${props => (props.borderWhite ? '#fff' : props.theme.primaryColor)};
    :hover {
      background: transparent;
    }
  }
`;

const Button = ({ children, ...otherProps }) => (
  <Container type="submit" className="button" {...otherProps}>
    {children}
  </Container>
);

export default Button;
