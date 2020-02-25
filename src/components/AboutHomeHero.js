import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  h2 {
    padding-bottom: 2rem;
    line-height: 3rem;
  }
`;

const AboutHomeHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className="hero is-medium">
            <div className="hero-body">
              <h2 className="has-text-danger is-size-2 has-text-weight-semibold is-spaced">
                Meet the KP Digital Strategy team
              </h2>
              <p className="is-size-6">
                We are an experienced team of designers who create high-quality,
                bespoke infographics. Our infographic present complex data in a
                visually engaging format to aid compregension and improve
                understanding and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
export default AboutHomeHero;
