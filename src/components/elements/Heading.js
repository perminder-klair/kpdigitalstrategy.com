import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0px;
  color: ${props => props.theme.primaryColor};
`;

const Heading = ({ children, ...props }) => (
  <Container className="is-size-4 has-text-weight-semibold" {...props}>
    {children}
  </Container>
);

export default Heading;
