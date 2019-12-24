import React from "react";
import styled from "styled-components";

const Section = styled.section`
  .text {
    margin-bottom: 1.5rem;
  }
  .button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const ServiceItem = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-7 has-text-centered">
          <h1 className="title is-4 has-text-white">
            Purposeful design and marketing services for aspirational companies
          </h1>
          <p className="text">
            KP Digital Strategy are experienced designers and marketeers who
            work with a range of businesses across the UK to create meaningful
            brand identities, devise and implement effective marketing
            strategies and design and develop pixel-perfect lead generation
            websites.
          </p>
          <button
            className="button is-medium is-danger is-rounded has-text-weight-semibold"
            type="button"
          >
            View our portfolio
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default ServiceItem;
