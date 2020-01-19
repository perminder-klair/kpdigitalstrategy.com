import React from 'react';
import styled from 'styled-components';

import ArticleCard from './ArticleCard';

const Section = styled.section``;

const FeaturesArticles = ({ data }) => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-3">Featured</h1>
      <h2 className="subtitle is-5 has-text-danger">
        Articles on KP Digital Strategy
      </h2>
      <div className="columns is-multiline">
        {data.map(item => (
          <ArticleCard
            image={item.node.Thumbnail.asset.url}
            alt="test"
            h2={item.node.categorie}
            title={item.node.title}
            subtitle="Information and graphic, or simply infographic, is a graphic presentation of certain data, information and/or knowledge. used to  market products or services."
          />
        ))}
      </div>
      <div className="has-text-centered">
        <button
          className="button is-danger is-rounded has-text-weight-bold is-medium"
          type="button"
        >
          Load more
        </button>
      </div>
    </div>
  </Section>
);

export default FeaturesArticles;
