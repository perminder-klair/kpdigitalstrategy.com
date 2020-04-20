import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const SectionCase = ({ data }) => (
  <Section className="section">
    <div className="container">
      {/* <h1 className="title is-size-5 is-spaced">Solution</h1> */}
      <div className="columns">
        {data.solutionParagraph.map(item => (
          <div className="column is-half">
            <p className="subtitle is-size-6 is-spaced">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
export default SectionCase;
