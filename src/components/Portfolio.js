import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .button-wrapper {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    margin: 0 -2rem;
    background: ${props => props.theme.mainBrandColor};
    @media only screen and (max-width: 768px) {
      padding: 0rem 0;
      margin: 0 0rem;
    }
  }
  .button {
    border: 2px solid;
    padding: 0.5rem 2rem 2rem 2rem;
    border-radius: 0px;
    @media only screen and (max-width: 768px) {
      padding: 0.5rem 0.5rem 2rem 0.5rem;
    }
  }
`;

const Portfolio = () => (
  <Section className="section">
    <div className="container">
      <div className="HeadingWrapper has-text-centered section">
        <h2 className="title size-2 has-text-danger is-spaced">
          Some of our design project examples
        </h2>
        <h3 className="subtitle is-5 has-text-weight-light">
          Here are some examples of some of our latest design
        </h3>
      </div>
      <div className="columns is-gapless is-0 is-multiline">
        <div className="column is-one-third">
          <img
            src="/images/dummy/image6.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-one-third">
          <img
            src="/images/dummy/image4.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-one-third">
          <img
            src="/images/dummy/image2.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-half">
          <img
            src="/images/dummy/image3.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-half">
          <img
            src="/images/dummy/image1.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button is-outlined" type="button">
          learn more about our design & creative work
        </button>
      </div>
    </div>
  </Section>
);

export default Portfolio;
