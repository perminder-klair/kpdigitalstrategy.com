import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1.5rem 1.5rem;
  background-color: ${props => props.theme.backgroundColorLite};
`;

const FeaturedLogos = () => (
  <Section className="section">
    <div className="container">
      <div className="columns has-text-centered">
        <div className="column">
          <img
            src="/images/logos/wired.svg"
            alt="wired logo"
            title="kpdigital strategy group icon"
          />
        </div>
        <div className="column">
          <img
            src="/images/logos/telegraph.svg"
            alt="telegraph logo"
            title="kpdigital strategy group icon"
          />
        </div>
        <div className="column">
          <img
            src="/images/logos/the-times.svg"
            alt="the times logo"
            title="kpdigital strategy group icon"
          />
        </div>
        <div className="column">
          <img
            src="/images/logos/daily-mails.svg"
            alt="daily mails logo"
            title="kpdigital strategy group icon"
          />
        </div>
        <div className="column">
          <img
            src="/images/logos/forbes.svg"
            alt="forbes logo"
            title="kpdigital strategy group icon"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default FeaturedLogos;
