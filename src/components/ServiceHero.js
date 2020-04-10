import React from 'react';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';

const Container = styled.section``;

const ServiceHero = ({ data }) => (
  <Container>
    <div className="container">
      <section className="section">
        <div className="columns  is-multiline">
          {data.map(item => (
            <div className="column is-6">
              <ServiceCard data={item.node} />
            </div>
          ))}
        </div>
      </section>
    </div>
  </Container>
);

export default ServiceHero;
