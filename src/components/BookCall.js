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
    border: 2.5px solid;
    border-radius: 0px;
    padding: 0.5rem 2rem 2rem 2rem;
  }
`;

const BookCall = () => (
  <Section className="section">
    <div className="container">
      <div className="columns has-text-centered">
        <div className="column is-three-quarters">
          <p className="is-size-5 has-text-weight-semibold">
            Want to discuss your project with one of our expert team?
          </p>
        </div>
        <div className="column">
          <button className="button is-outlined" type="button">
            Book a FREE call
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default BookCall;
