import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .background-image {
    width: 100%;
    height: 38rem;
    margin-bottom: 1.4rem;
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
const PortfolioShowCase = ({ data }) => (
  <Section>
    <div className="columns is-multiline is-variable is-3">
      {data.gallery.map(item => (
        <div className={item.isLarge ? 'column is-12' : 'column is-half'}>
          <img src={item.image.asset.url} alt={item.alternativeText} />
        </div>
      ))}
      <div className="column is-half">
        <section className="hero">
          <div className="hero-body">
            <div className="container is-widescreen">
              <h1 className="title is-size-4 is-spaced is-size-4-mobile">
                {' '}
                {data.ContactUsText}
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
export default PortfolioShowCase;
