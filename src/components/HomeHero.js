import React from 'react';
import styled from 'styled-components';

import Text from './Autotext';

const Section = styled.section`
  background-color: ${props => props.theme.darkShades};
  .title {
    font-size: 2.5rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 2.5rem;
  }
  .auto {
    height: 2rem;
  }
  .button {
    padding-right: 3rem;
    padding-left: 3rem;
    margin-top: 1rem;
    border-radius: 0.6rem;
  }
  .hero-body {
    padding-bottom: 4rem !important;
    padding-top: 10rem !important;
  }
`;
const HelpText = styled.p`
  margin-top: 1rem;
`;

const HomeHero = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="subtitle is-1 is-size-3-mobile has-text-weight-semibold">
                {data.title}
              </h2>
              <div className="auto">
                <Text />
              </div>
              <HelpText className="has-text-weight-semibold has-text-danger">
                {data.redSubtitle}
              </HelpText>
              <button
                className="button is-danger is-rounded has-text-weight-medium is-size-6"
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
