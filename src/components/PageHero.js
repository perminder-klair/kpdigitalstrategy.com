import React from 'react';
import styled from 'styled-components';

const Section = styled.section``;

const PageHero = props => (
  <Section className="section">
    <div className="container">
      <section className="has-text-centered">
        <h2 className="title is-4 is-size-3-mobile is-spaced">{props.title}</h2>
        <h2 className="subtitle is-6  has-text-weight-semibold has-text-danger">
          {props.subtitle}
        </h2>
      </section>
    </div>
  </Section>
);

export default PageHero;
