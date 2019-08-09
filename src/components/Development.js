import React from 'react';
import styled from 'styled-components';
import UsingCard from './UsingCard';

const Container = styled.div`
  background-color: ${props => props.theme.darkGrey};
`;
const Development = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <UsingCard />
        </div>
        <div className="column">Second column</div>
      </div>
    </div>
  </Container>
);

export default Development;
