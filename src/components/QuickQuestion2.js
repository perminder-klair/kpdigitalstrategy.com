import React from 'react';
import styled from 'styled-components';

import QuickHero from './QuickHero';
import PageHero from './PageHero';

const Hr = styled.hr`
  border: 1px solid ${props => props.theme.mainBrandColor};
  margin: 1.5rem 6.5rem;
`;

const QuickQuestion2 = () => (
  <section className="section">
    <div className="container">
      <PageHero
        title="Let’s talk about your project"
        subtitle="Question 2/5"
        paragraph=" What do you need help with? Select all that apply"
      />
      <div className="box">
        <div className="columns is-centered is-multiline">
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
          <QuickHero image="/images/icons/branding-icon.png" text="Branding" />
        </div>
      </div>
      <Hr />
    </div>
  </section>
);

export default QuickQuestion2;
