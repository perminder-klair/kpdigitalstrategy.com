import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .background-image {
    width: 100%;
    height: 38rem;
    margin-bottom: 1rem;
  }
  .hero {
    background-color: ${props => props.theme.mainBrandColor};
    height: 22rem;
  }
  h1 {
    margin-top: 6rem;
    width: 20rem;
  }
`;

const HeroCase = () => (
  <Section>
    <img
      className="background-image"
      src="/images/team/mock-up.png"
      alt="Heroimage"
    />
    <div className="columns is-multiline is-variable is-1">
      <div className="column is-half">
        <img
          src="/images/team/epic-brand-guidelines-mockup-copy.png"
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-half">
        <img
          src="/images/team/epic-brand-guidelines-mockup-copy.png"
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-half">
        <img
          src="/images/team/website-epic-risk-management.png"
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-half">
        <section className="hero">
          <div className="hero-body">
            <div className="container is-widescreen">
              <h1 className="title is-size-6 is-spaced">
                {' '}
                Do you want to discuss your project with one of our expert team?
              </h1>
              <button
                className="button is-black has-text-weight-semibold is-size-6"
                type="button"
              >
                Contact us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Section>
);
export default HeroCase;
