import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  margin-top: 0px !important;
  color: ${props => props.theme.primaryColor};
  font-size: 16px;
  font-weight: 700;
`;

const Subtitle = ({ children }) => (
  <Container className="subtitle">{children}</Container>
);

export default Subtitle;
