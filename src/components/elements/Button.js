import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  &&& {
    color: ${props => (props.secondary ? props.theme.SecondaryColor : '#fff')};
    padding: 0rem 2.5rem;
    height: 2.5rem;
    border-radius: 0;
    font-size: 0.875rem;
    background-color: ${props =>
      props.Black ? props.theme.Black : 'transparent'}!important;
    border: 2px solid
      ${props =>
        props.borderRed ? props.theme.SecondaryColor : '#fff'}!important;
    :hover {
      background: transparent;
      border: 2px solid
        ${props =>
          props.borderRed ? props.theme.SecondaryColor : '#fff'}!important;
      transform: translateY(-1px);
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.3);
    }
    // @media screen and (max-width: 600px) {
    //   padding: 0rem 0rem;
    // }
  }
`;

const Button = ({ children, isLarge, ...props }) => (
  <Container
    type="submit"
    className="button has-text-weight-semibold"
    {...props}>
    {children}
  </Container>
);

export default Button;
