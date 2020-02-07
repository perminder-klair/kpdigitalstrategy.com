import React from 'react';
import styled from 'styled-components';

import QuickHero from './QuickHero';
import PageHero from './PageHero';

const Hr = styled.hr`
  border: 1px solid ${props => props.theme.mainBrandColor};
  margin: 1.5rem 6.5rem;
`;

const QuickItems = () => (
  <container className="section">
    <div className="container">
      <PageHero
        title="Quick quote form"
        subtitle="(3 minutes)"
        paragraph="What type of project are you looking to start?Select all that apply"
      />
      <div className="columns is-centered is-multiline">
        <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
        <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
        <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
      </div>
      <Hr />
    </div>
  </container>
);

export default QuickItems;
