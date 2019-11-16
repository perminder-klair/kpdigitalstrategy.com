import React from "react";
import styled from "styled-components";

import Text from "./Autotext";

const Section = styled.section`
  .title {
    font-size: 2.5rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 2.5rem;
  }
  .auto {
    height: 3rem;
  }
  .button {
    padding-right: 2.75rem;
    padding-left: 2.75rem;
    margin-top: 1rem;
  }
  .hero-body {
    padding-bottom: 4rem !important;
    padding-top: 10rem !important;
  }
`;
const HelpText = styled.p`
  margin-top: 1rem;
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
                className="button is-danger is-rounded has-text-weight-semibold is-size-6"
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
