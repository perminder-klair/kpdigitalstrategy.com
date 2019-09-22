import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  p {
    background-color: ${props => props.theme.backgroundColorGrey};
  }
  .button {
    width: 100%;
    @media screen and (max-width: 600px) {
      width: 70%;
    }
  }
  .input {
    height: 100%;
  }
`;

const FeaturesArticles = () => (
  <Section>
    <div className="columns is-centered">
      <div className="column  has-text-centered">
        <p className="has-text-weight-light">
          KP Digital Home > Design & Marketing Advice Centre
        </p>
      </div>
    </div>
    <div className="container">
      <div className="columns has-text-centered">
        <div className="column">
          <button
            className="button is-rounded is-danger has-text-weight-bold"
            type="button"
          >
            Branding
          </button>
        </div>
        <div className="column">
          <button
            className="button is-rounded is-link has-text-weight-bold"
            type="button"
          >
            Digital Marketing
          </button>
        </div>
        <div className="column">
          <button
            className="button is-rounded is-secondary has-text-weight-bold"
            type="button"
          >
            Website development
          </button>
        </div>
        <div className="column">
          <button
            className="button is-rounded is-primary has-text-weight-bold"
            type="button"
          >
            Social Media
          </button>
        </div>
        <div className="column">
          <button
            className="button is-rounded is-info has-text-weight-bold"
            type="button"
          >
            Business Advice
          </button>
        </div>
      </div>
      <div className="columns">
        <div className="column is-11">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Search by keyword"
          />
        </div>
        <div className="column  has-text-centered">
          <button
            className="button is-rounded is-danger has-text-weight-bold"
            type="button"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default FeaturesArticles;
