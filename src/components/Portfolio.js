import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .mg-top {
    margin-top: -10px;
  }
  img {
    width: 568px;
  }
`;

const Portfolio = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="HeadingWrapper has-text-centered section">
        <h2 className="title size-2 is-spaced is-size-4-mobile">
          {data.portfolioTitle}
        </h2>
        <h3 className="subtitle is-5 has-text-weight-light">
          {data.portfolioSubtitle}
        </h3>
      </div>
      <div className="columns is-multiline is-variable is-2">
        {data.items.map(items => (
          <div className="column  is-half">
            <div className="main is-half">
              <img
                src={items.portfolioImage.asset.url}
                alt={items.alternativeText}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Portfolio;
