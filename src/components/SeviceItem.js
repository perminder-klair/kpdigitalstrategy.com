import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .first {
    align-self: center;
  }
  .text {
    margin-bottom: 2rem;
  }
  .button {
    border: 2px solid ${props => props.theme.mainBrandColor};
    border-radius: 0px;
  }
`;

const SeviceItem = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column first">
          <h1 className="title is-3 is-spaced">
            Purposeful design and marketing services for aspirational companies
          </h1>
          <h2 className="subtitle is-4 has-text-danger">
            We align design, marketing and sales to make it easier than ever to
            reach new business heights.
          </h2>
          <p className="text">
            we are an experienced team of desigenrs and marketeers who are ready
            to create brand identities, devise informed marketing strategues,
            create competlling email nurture track campaigns, and develop
            pixel-perfect websites-to name just a few of services.
          </p>
          <p>
            we are unfarid of data & analytics our results are transparent. We
            are passionate probelm solves who define objectives, pinpoint
            challenges and abovw all else are on your side celebrating your
            every win
          </p>
          <p className="text">
            No matter the size of your project, or if you are just starting out,
            KP Digital Strategy has
          </p>
          <button className="button is-primary" type="button">
            View our portfolio
          </button>
        </div>
        <div className="column">
          <img src="/images/dummy/image5.png" alt="service image" />
        </div>
      </div>
    </div>
  </Section>
);

export default SeviceItem;
