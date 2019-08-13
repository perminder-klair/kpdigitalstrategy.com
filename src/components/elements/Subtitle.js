import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin-top: 0px !important;
  color: ${props => props.theme.primaryColor};
  font-size: 0.675rem;
`;

const Subtitle = ({ children }) => (
  <Container className="subtitle has-text-weight-light">{children}</Container>
);

export default Subtitle;
