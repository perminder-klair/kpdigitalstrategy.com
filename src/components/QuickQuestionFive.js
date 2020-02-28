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
    <Section>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <PageHero
              subtitle=" Your information"
              paragraph="
        How can we contact you?"
            />
            <div className="columns is-centered is-multiline is-variable is-0">
              <QuickSelect text="Marketing" />
              <QuickSelect text="Marketing" />
              <QuickSelect text="Marketing" />
              <QuickSelect text="Marketing" />
              <QuickSelect text="Marketing" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default QuickQuestionFive;
