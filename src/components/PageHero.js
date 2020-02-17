import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const PageHero = props => (
  <Container>
    <div className="container">
      <section className="has-text-centered">
        <h2 className="title is-4 is-size-3-mobile is-spaced">{props.title}</h2>
        <h2 className="subtitle is-6  has-text-weight-semibold has-text-danger">
          {props.subtitle}
        </h2>
        <h2 className="subtitle is-6  has-text-weight-normal ">
          {props.paragraph}
        </h2>
      </section>
    </div>
  </Container>
);

export default PageHero;