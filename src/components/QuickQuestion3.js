import React from 'react';

import styled from 'styled-components';
import PageHero from './PageHero';

const Section = styled.div`
  .textarea {
    background-color: ${props => props.theme.backgroundColor};
    border: 2px solid ${props => props.theme.mainBrandColor};
  }
`;

const QuickHero = () => (
  <Section className="section">
    <div className="container">
      <PageHero
        subtitle=" Question 3/5"
        paragraph="
Did you find everything you were looking for above?
Please use the space below to tell us more about your project"
      />
      <div className="field">
        <div className="control">
          <textarea
            className="textarea is-large "
            placeholder="Tell us more about your project here"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default QuickHero;
