import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  color: ${props => (props.black ? props.theme.blackDark : '#ffffff')};
  margin-bottom: 1rem;
`;

const Heading = ({ children, ...props }) => (
  <Container className="is-size-4 Headline has-text-weight-bold" {...props}>
    {children}
  </Container>
);

export default Heading;
