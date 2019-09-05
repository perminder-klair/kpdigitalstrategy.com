import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .title {
    font-size: 3.4rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 3.4rem;
  }
`;
const HelpText = styled.p`
  margin-top: 3.5rem;
`;

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="subtitle is-1 is-size-3-mobile has-text-weight-bold">
                Thinking of
              </h2>
              <h1 className="title is-1 is-size-3-mobile has-text-danger has-text-weight-bold">
                A NEW WEBSITE?
              </h1>
              <HelpText className="has-text-weight-semibold">
                We align design, marketing and sales to make it easier than ever
                to reach new business heights.
              </HelpText>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
