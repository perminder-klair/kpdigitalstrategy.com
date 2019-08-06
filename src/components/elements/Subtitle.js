import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin-top: 0px !important;
  color: ${props => props.theme.primaryColor};
`;

const Subtitle = ({ children }) => (
  <Container className="subtitle has-text-weight-light is-size-7">
    {children}
  </Container>
);

export default Subtitle;
