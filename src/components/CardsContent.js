import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
`;
const CardsContent = () => (
  <Container className="has-text-centered-mobile">
    <div className="columns">
      <div className="column">
        <Card icon="fas fa-adjust" title="rtgrt" subtitle="thtrdrt" />
      </div>
      <div className="column">
        <Card title="rtgrt" subtitle="thtrdrt" />
      </div>
      <div className="column">
        <Card title="rtgrt" subtitle="thtrdrt" />
      </div>
    </div>
  </Container>
);

export default CardsContent;
