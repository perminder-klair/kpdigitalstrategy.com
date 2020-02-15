import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const HeroCase = () => (
  <Section>
    <div className="columns is-multiline is-variable is-1">
      <div className="column is-half">
        <img
          src="/images/dummy/image3.png"
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-half">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-6 is-spaced">Background</h1>
              <p className="subtitle is-size-7 is-spaced">
                EPIC Risk Management is the world’s leading independent gambling
                harm minimisation consultancy. EPIC raises awareness of
                gambling-related harm in order to identify and mitigate the
                human, financial, brand and reputational risks that problem
                gambling can create.
              </p>
              <h1 className="title is-size-6 is-spaced">Brief</h1>
              <p className="subtitle is-size-7">
                In preparation of delivering services to the USA, EPIC Risk
                Management were looking to align their branding to give a
                consisent presence across all brand touch points
              </p>
            </div>
          </div>
        </section>
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
  </Section>
);

export default HeroCase;
