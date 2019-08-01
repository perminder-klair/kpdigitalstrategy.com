import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0px;
  color: ${props => (props.red ? props.theme.primaryColor : '#fff')};
  font-size: 1.15rem;
`;

const Title = ({ children }) => (
  <Container className="has-text-weight-semibold">
    {children}
  </Container>
);

export default Title;
