import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .columns {
    margin-bottom: -0.9rem;
  }
  img {
    transition: transform 0.8s;
    margin: 0 auto;
  }
  img:hover {
    transform: scale(1.05);
  }
`;
const Border = styled.div`
  border-top: 1px solid;
`;

const CaseStudyFeatures = ({ data }) => (
  <Section>
    <Border />
    <div className="columns is-multiline">
      <div className="column is-half">
        <img src={data.thumbnail.asset.url} alt="case-studies" />
      </div>
      <div className="column is-half">
        <img src="/images/team/steven-shaw-website@2x.png" alt="case-studies" />
      </div>
      <div className="column is-half">
        <img src="/images/team/case-study-image@2x.png" alt="case-studies" />
      </div>
      <div className="column is-half">
        <img
          src="/images/team/learn-realm-website-design.png"
          alt="case-studies"
        />
      </div>
    </div>
  </Section>
);
export default CaseStudyFeatures;
