import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  h2 {
    padding-bottom: 2rem;
    line-height: 3rem;
  }
`;

const AboutHomeHero = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <div className="hero is-medium">
            <div className="hero-body">
              <h2 className="has-text-danger is-size-2 has-text-weight-semibold is-spaced">
                {data.heroTitle}
              </h2>
              <p className="is-size-6">{data.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
export default AboutHomeHero;
