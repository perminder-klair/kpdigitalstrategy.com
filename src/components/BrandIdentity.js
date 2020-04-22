import React from 'react';
import styled from 'styled-components';

import BrandIdentityItem from './BrandIdentityItem';

const Container = styled.div`
  padding: 5rem 1.5rem;
  .columns {
    margin-top: 2rem;
  }
`;

const BrandIdentity = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="has-text-centered HeadingWrapper">
        <h2 className="title size-2 has-text-danger is-spaced">
          {data.brandIdentityTitle}
        </h2>
        <h3 className="subtitle is-5 has-text-weight-light">
          {data.brandIdentitySubtitle}
        </h3>
      </div>
      <div className="columns">
        {data.brandIdentityItem.map(items => (
          <div className="column">
            <BrandIdentityItem
              subtitle={items.title}
              icon={items.logo.asset.url}
              hovericon={items.hoverLogo.asset.url}
            />
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default BrandIdentity;
