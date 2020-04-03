import React from 'react';
import styled from 'styled-components';
import Strengths from './Strengths';

const Section = styled.div`
  background-color: ${props => props.theme.mainBrandColor};
  h3 {
    margin-bottom: 3rem;
  }
  .column{
    display: contents
  }
`;

const StrengthData = ({ data }) => (
  <Section className="section">
    <div className="container">
      <h3 className="title is-5 has-text-centered">{data.featureHeading}</h3>
      <div className="columns">
        <div className="column is-4 has-text-centered">
          {data.featuresItems.map(items => (
            <Strengths
              logo={items.logo.asset.url}
              title={items.title}
              subtitle={items.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  </Section>
);
export default StrengthData;
