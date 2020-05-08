import React from 'react';
import styled from 'styled-components';
import PageHero from './PageHero';

const Section = styled.section`
  .text {
    margin-bottom: 1.5rem;
  }
  .button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 12.5px;
  }
`;

const OurWork = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-7 has-text-centered">
          <PageHero
            title={data.strengthTitle}
            paragraph={data.strengthSubtitle}
          />
          <button
            className="button is-medium is-danger has-text-weight-semibold"
            type="button"
          >
            View our portfolio
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default OurWork;
