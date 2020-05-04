import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';

const Container = styled.section`
  background-color: ${props => props.theme.darkShades};
  border-top: 1px solid #ffff;
  padding: 5rem 1.5rem;
`;

const Products = ({ data, heading, title }) => (
  <Container className="section">
    <div className="container">
      <p className="title is-4 has-text-centered is-spaced">{heading}</p>
      <p className="subtitle is-6 has-text-centered">{title}</p>
      <div className="columns is-multiline is-variable is-3">
        {data.map(item => (
          <FeatureItem
            icon={item.Logo.asset.url}
            title={item.title}
            subtitle={item.description}
            button="Find out more"
            to={`product/${item.slug.current}`}
          />
        ))}
      </div>
    </div>
  </Container>
);

export default Products;
