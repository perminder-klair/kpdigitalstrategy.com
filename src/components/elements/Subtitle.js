import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  margin-bottom: 0px;
  color: ${props => props.theme.primaryColor};
`;

const Subtitle = ({ children }) => (
  <Container className="has-text-weight-semibold is-size-7">
    {children}
  </Container>
);

export default Subtitle;
