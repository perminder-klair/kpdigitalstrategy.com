import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .subtitle {
    margin-top: -0.75rem !important;
  }
`;

const BlogHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns is-mobile is-centered">
        <div className="column is-two-thirds has-text-centered">
          <h2 className="title is-3  has-text-weight-bold">
            Design & Marketing Advice Centre
          </h2>
          <h3 className="subtitle is-6  has-text-weight-semibold has-text-danger">
            A collection of resources to support your business growth
          </h3>
        </div>
      </div>
    </div>
  </Section>
);

export default BlogHero;
