import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0rem;
  color: ${props => (props.red ? props.theme.SecondaryColor : '#ffffff')};
  font-size: 1.15rem;
`;

const Title = ({ children, ...props }) => (
  <Container className="title has-text-weight-semibold" {...props}>
    {children}
  </Container>
);

export default Title;
