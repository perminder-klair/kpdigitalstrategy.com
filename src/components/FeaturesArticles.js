import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Block from './PortableText';

import ArticleCard from './ArticleCard';

const Section = styled.section``;

const FeaturesArticles = ({ data }) => (
  <Link to="/individualBlog">
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {data.map(item => (
            <ArticleCard
              image={item.node.Thumbnail.asset.url}
              alt="test"
              h2={item.node.categorie}
              title={item.node.title}
              subtitle=<Block input={item.node._rawBody} />
            />
          ))}
        </div>
        <div className="has-text-centered has-text-white">
          <Block />
          <Link
            to="/individualBlog"
            className="button is-danger is-rounded has-text-weight-bold is-medium"
            type="button"
          >
            Load more
          </Link>
        </div>
      </div>
    </Section>
  </Link>
);

export default FeaturesArticles;
