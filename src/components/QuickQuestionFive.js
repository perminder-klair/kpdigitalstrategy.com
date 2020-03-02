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
              subtitle="  Question 5/5"
              paragraph="
              When are you hoping to select an agency?"
            />
            <div className="columns is-centered is-multiline is-variable is-0">
              <div className="column is-4  is-centered">
                <QuickSelect text="Marketing" />
              </div>
              <div className="column is-4  is-centered">
                <QuickSelect text="Marketing" />
              </div>{' '}
              <div className="column is-4  is-centered">
                <QuickSelect text="Marketing" />
              </div>{' '}
              <div className="column is-4  is-centered">
                <QuickSelect text="Marketing" />
              </div>{' '}
              <div className="column is-4  is-centered">
                <QuickSelect text="Marketing" />
              </div>{' '}
              <div className="column is-4  is-centered">
                <QuickSelect text="Marketing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default QuickQuestionFive;
