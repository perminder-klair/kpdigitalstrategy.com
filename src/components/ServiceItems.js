import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';
import PageHero from './PageHero';

const Container = styled.section`
  background-color: ${props => props.theme.darkShades};
  border-top: 1px solid #ffff;
  padding: 5rem 1.5rem;
`;

const Services = ({ data }) => (
  <Container className="section">
    <PageHero
      title="  Services for fast-growing companies"
      paragraph="
        Our super talented, dedicated team are responsive and ready to meet your
        critical business needs."
    />
    <div className="container">
      <div className="columns is-variable is-3">
        {data.map(item => (
          <FeatureItem
            icon={item.node.Logo.asset.url}
            title={item.node.title}
            subtitle={item.node.description}
            button="Find out more"
            to={`service/${item.node.slug.current}`}
          />
        ))}
      </div>
    </div>
  </Container>
);

export default Services;
