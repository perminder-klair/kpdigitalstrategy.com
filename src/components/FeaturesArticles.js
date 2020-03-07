import React, { useState } from 'react';
import styled from 'styled-components';

import ArticleCard from './ArticleCard';

const Section = styled.section`
  .button.load-more {
    margin-top: 8%;
  }
`;

const FeaturesArticles = ({ items, filter }) => {
  const [length, setLength] = useState(3);
  const array = items.slice(0, length);

  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {array.map(({ node }) => {
            const nodeTitle = node.title.toLowerCase();
            if (nodeTitle.search(filter.toLowerCase()) === -1) {
              return null;
            }
            return <ArticleCard data={node} />;
          })}
        </div>
        <div className="has-text-centered has-text-white">
          {items.length !== array.length && filter.length <= 0 ? (
            <button
              className="button is-danger is-rounded has-text-weight-bold is-medium load-more"
              onClick={() => setLength(items.length)}
              type="button"
            >
              Load more
            </button>
          ) : null}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesArticles;
