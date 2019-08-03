import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  color: ${props => (props.black ? props.theme.blackDark : '#ffffff')};
`;

const Heading = ({ children, ...props }) => (
  <Container className="is-size-4 title has-text-weight-bold" {...props}>
    {children}
  </Container>
);

export default Heading;
