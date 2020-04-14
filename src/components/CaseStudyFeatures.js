import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
      {data.map(item => (
        <Link to={`/case/${item.node.slug.current}`}>
          <div className="column is-half">
            <img src={item.node.thumbnail.asset.url} alt="case-studies" />
          </div>
        </Link>
      ))}
    </div>
  </Section>
);
export default CaseStudyFeatures;
