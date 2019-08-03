import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0px;
  color: ${props => (props.red ? props.theme.SecondaryColor : '#ffffff')};
  font-size: ${props => (props.IsNormal ? '1.25rem' : '1.15rem')};
`;

const Title = ({ children, ...props }) => (
  <Container className="has-text-weight-semibold" {...props}>
    {children}
  </Container>
);

export default Title;
