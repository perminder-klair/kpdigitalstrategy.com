import React from 'react';
import styled from 'styled-components';

import ArticleCard from './ArticleCard';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColorGrey};
  border-top: 3px solid;
  margin-top: 2rem;
`;

const FeaturesArticles = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-3">Featured</h1>
      <h2 className="subtitle is-5 has-text-danger">
        Articles on KP Digital Strategy
      </h2>
      <div className="columns">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  </Section>
);

export default FeaturesArticles;
