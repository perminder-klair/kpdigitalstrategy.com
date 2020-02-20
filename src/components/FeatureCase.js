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
    height: 24.2rem;
  }
  h1 {
    margin-top: 6rem;
  }
  img {
    width: -webkit-fill-available;
  }
`;
const Border = styled.div`
  border-bottom: 1px solid;
  margin-top: -1.6rem;
`;
const FeatureCase = () => (
  <Section>
    <img
      className="background-image"
      src="/images/team/mock-up.png"
      alt="Heroimage"
    />
    <div className="columns is-multiline is-variable is-2">
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
              <h1 className="title is-size-4 is-spaced is-size-4-mobile">
                {' '}
                Do you want to discuss your project with one of our expert team?
              </h1>
              <button className="button is-black is-size-5" type="button">
                Contact us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Border />
  </Section>
);
export default FeatureCase;
