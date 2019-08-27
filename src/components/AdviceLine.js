import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.4rem 0rem;
  .title {
    padding: 0.75rem 0rem;
  }
  span {
    text-decoration: underline;
  }
`;

const AdviceLine = () => (
  <Container className="has-background-white">
    <h2 className="title has-text-centered has-text-weight-bold has-text-black is-size-7">
      Free advice line:{' '}
      <span className="has-text-danger is-size-7 has-text-weight-bold">
        +44 161 258 3622
      </span>
      (From 8am to 5pm)
    </h2>
  </Container>
);

export default AdviceLine;
