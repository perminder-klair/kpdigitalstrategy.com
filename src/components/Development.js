import React from 'react';
import styled from 'styled-components';
import UsingCard from './UsingCard';

const Container = styled.div`
  background-color: ${props => props.theme.darkGrey};
  .columns.is-mobile > .column.is-offset-one-quarter {
    margin-left: 0%;
  }
  .columns {
    justify-content: center;
  }
  .column {
    padding: 2.75rem;
  }
`;
const Development = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths">
          <UsingCard />
        </div>
        <div className="column is-two-fifths">
          <UsingCard />
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-fifths">
          <UsingCard />
        </div>
        <div className="column is-two-fifths">
          <UsingCard />
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-two-fifths is-offset-one-quarter">
          <UsingCard />
        </div>
      </div>
    </div>
  </Container>
);

export default Development;
