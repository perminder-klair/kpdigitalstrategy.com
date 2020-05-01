import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';
import PageHero from './PageHero';

const Container = styled.section`
  background-color: ${props => props.theme.darkShades};
  border-top: 1px solid #ffff;
  padding: 5rem 1.5rem;
`;

const Services = ({ data, serviceHeading, serviceTitle }) => (
  <Container className="section">
    <PageHero title={serviceHeading} paragraph={serviceTitle} />
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
