import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.mainBrandColor};

  .column {
    text-align: center;
  }
  p {
    margin-bottom: 0;
  }
  .button {
    padding: 0.5rem 2rem 2rem 2rem;
  }
`;

const BookCall = () => (
  <Section className="section">
    <div className="container">
      <div className="columns has-text-centered">
        <div className="column is-two-thirds">
          <p className="is-size-5 has-text-weight-semibold">
            Want to discuss your project with one of our expert team?
          </p>
        </div>
        <div className="column">
          <button
            className="button is-rounded has-text-weight-bold"
            type="button"
          >
            Book a free call
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default BookCall;
