import React from 'react';

import styled from 'styled-components';
import PageHero from './PageHero';
import QuickSelect from './QuickSelect';

const Section = styled.div`
  .columns {
    padding-bottom: 2rem;
    border-bottom: 2px solid ${props => props.theme.mainBrandColor};
  }
`;

const QuickQuestionFive = () => {
  return (
    <Section className="section">
      <PageHero
        subtitle=" Question 5/5"
        paragraph="
        When are you hoping to select an agency?
        "
      />
      <div className="container">
        <div className="columns is-centered is-multiline">
          <QuickSelect text="Branding" />
          <QuickSelect text="Branding" />
          <QuickSelect text="Branding" />
          <QuickSelect text="Branding" />
          <QuickSelect text="Branding" />
          <QuickSelect text="Branding" />
          <QuickSelect text="Branding" />
        </div>
      </div>
    </Section>
  );
};

export default QuickQuestionFive;
