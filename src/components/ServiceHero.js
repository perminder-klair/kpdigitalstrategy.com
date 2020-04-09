import React from 'react';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';

const Container = styled.section``;

const ServiceHero = ({ data }) => (
  <Container>
    <div className="container">
      <section className="section">
        <div className="columns  is-multiline">
          {data.map(items => (
            <div className="column is-6">
              <ServiceCard
                title={items.node.category}
                subtitle={items.node.title}
                firstpara={items.node.description}
                bgImage={items.node.Thumbnail.asset.url}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  </Container>
);

export default ServiceHero;
