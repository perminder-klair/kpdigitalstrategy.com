import React from 'react';
import styled from 'styled-components';
import UsingCard from './UsingCard';
import { Button } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.darkGrey};
  .columns.is-mobile > .column.is-offset-one-quarter {
    margin-left: 0%;
  }
  .columns {
    justify-content: center;
  }
  .column {
    padding: 2rem;
  }
  .ButtonWrapper {
    padding: 2.75rem 0rem;
  }
`;
const Development = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <div className="columns">
        <div className="column is-5">
          <UsingCard />
        </div>
        <div className="column is-5">
          <UsingCard />
        </div>
      </div>
      <div className="columns">
        <div className="column is-5">
          <UsingCard />
        </div>
        <div className="column is-5">
          <UsingCard />
        </div>
      </div>
      <div className="columns ">
        <div className="column is-5">
          <UsingCard />
        </div>
      </div>
    </div>
    <div className="ButtonWrapper">
      <Button>View More</Button>
    </div>
  </Container>
);

export default Development;
