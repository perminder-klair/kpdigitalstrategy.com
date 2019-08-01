import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0px;
`;

const Heading = ({ children }) => (
  <Container className="is-size-4 has-text-weight-semibold has-text-black">
    {children}
  </Container>
);

export default Heading;
