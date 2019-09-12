import React from 'react';
import styled from 'styled-components';

import Text from './Autotext';

const Section = styled.section`
  .title {
    font-size: 3rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 3rem;
  }
  .auto {
    height: 3rem;
  }
  .button {
    padding: 0.5rem 3rem 0.5rem 3rem;
    margin-top: 1rem;
  }
`;
const HelpText = styled.p`
  margin-top: 1.25rem;
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
              <div className="auto">
                <Text />
              </div>
              <HelpText className="has-text-weight-semibold">
                We align design, marketing and sales to make it easier than ever
                to reach new business heights.
              </HelpText>
              <button
                className="button is-danger is-rounded has-text-weight-semibold is-size-5"
                type="button"
              >
                Get started
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
