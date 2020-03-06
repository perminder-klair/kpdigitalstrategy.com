import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ArticleCard from './ArticleCard';

const Section = styled.section``;

const FeaturesArticles = ({ data }) => (
  <Section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {data.map(items => (
          <ArticleCard data={items.node} />
        ))}
      </div>
      <div className="has-text-centered has-text-white">
        <Link
          to="/"
          className="button is-danger is-rounded has-text-weight-bold is-medium"
          type="button"
        >
          Load more
        </Link>
      </div>
    </div>
  </Section>
);

export default FeaturesArticles;
