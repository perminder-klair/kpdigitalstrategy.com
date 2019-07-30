import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0px;
`;

const Title = ({ children }) => (
  <Container className="is-size-5 has-text-weight-semibold">
    {children}
  </Container>
);

export default Title;
