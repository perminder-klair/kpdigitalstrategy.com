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
    transform: scale(1.02);
  }
`;
const Border = styled.div`
  border-top: 1px solid;
`;

const CaseStudyFeatures = ({ data }) => (
  <Section>
    <Border />
    <div className="columns is-multiline is-variable is-3 has-text-centered">
      {data.map(item => (
        <div className="column is-half">
          <Link to={`/case/${item.node.slug.current}`}>
            <img src={item.node.thumbnail.asset.url} alt="case-studies" />
          </Link>
        </div>
      ))}
    </div>
  </Section>
);
export default CaseStudyFeatures;
