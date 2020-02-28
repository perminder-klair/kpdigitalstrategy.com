import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .mg-top {
    margin-top: -10px;
  }
`;

const Portfolio = () => (
  <Section className="section">
    <div className="container">
      <div className="HeadingWrapper has-text-centered section">
        <h2 className="title size-2 is-spaced">
          Some of our design project examples
        </h2>
        <h3 className="subtitle is-5 has-text-weight-light">
          Here are some examples of some of our latest design
        </h3>
      </div>
      <div className="columns is-multiline is-variable is-2">
        <div className="column is-half">
          <img
            src="/images/dummy/image3.png"
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
        <div className="column is-half mg-top">
          <img
            src="/images/dummy/image3.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
        <div className="column is-half mg-top">
          <img
            src="/images/dummy/image1.png"
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default Portfolio;
