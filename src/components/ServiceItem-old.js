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

const ServiceItem = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-7 has-text-centered">
          <PageHero
            title=" Purposeful design and marketing services for aspirational companies"
            paragraph="
            KP Digital Strategy are experienced designers and marketeers who
            work with a range of businesses across the UK to create meaningful
            brand identities, devise and implement effective marketing
            strategies and design and develop pixel-perfect lead generation
            websites."
          />

          <button
            className="button is-medium is-danger has-text-weight-semibold"
            type="button">
            View our portfolio
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default ServiceItem;
