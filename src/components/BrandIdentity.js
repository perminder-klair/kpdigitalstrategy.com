import React from 'react';
import styled from 'styled-components';

import BrandIdentityItem from './BrandIdentityItem';

const Container = styled.div`
  padding: 5rem 1.5rem;
  .columns {
    margin-top: 2rem;
  }
`;

const BrandIdentity = () => (
  <Container className="section">
    <div className="container">
      <div className="has-text-centered HeadingWrapper">
        <h2 className="title size-2 has-text-danger">
          Looking to improve your brand identity & marketing ?
        </h2>
        <h3 className="subtitle size-3">
          Select an option below to get a quick quote for our services
        </h3>
      </div>
      <div className="columns">
        <div className="column">
          <BrandIdentityItem
            subtitle="logo"
            icon="/images/icons/logo.png"
            hovericon="/images/icons/logo-alt.png"
          />
        </div>
        <div className="column">
          <BrandIdentityItem
            subtitle="Brochure & Leaflet"
            icon="/images/icons/brochure.png"
            hovericon="/images/icons/brochure-alt.png"
          />
        </div>
        <div className="column">
          <BrandIdentityItem
            subtitle="website"
            icon="/images/icons/website.png"
            hovericon="/images/icons/website-alt.png"
          />
        </div>
        <div className="column">
          <BrandIdentityItem
            subtitle="Email newsletter"
            icon="/images/icons/email.png"
            hovericon="/images/icons/email-alt.png"
          />
        </div>
        <div className="column">
          <BrandIdentityItem
            subtitle="Social media"
            icon="/images/icons/social.png"
            hovericon="/images/icons/social-alt.png"
          />
        </div>
        <div className="column">
          <BrandIdentityItem
            subtitle="Infographic"
            icon="/images/icons/infographic.png"
            hovericon="/images/icons/infographic-alt.png"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default BrandIdentity;
