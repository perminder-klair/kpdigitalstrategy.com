import React from 'react';
import styled from 'styled-components';

import { Title } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 1rem 1.5rem;
  .title {
    color: ${props => props.theme.Black};
  }
`;

const HomeCaseStudies = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <Title> Home > Design Case Studies</Title>
    </div>
  </Container>
);

export default HomeCaseStudies;
