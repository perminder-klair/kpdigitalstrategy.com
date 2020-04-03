import React from 'react';
import styled from 'styled-components';

import Testimonail from './Testimonail';

const Container = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${props => (props.backgroundColor ? '#FF3860' : '#000')};

  .section {
    background-color: ${props => props.theme.backgroundColor};
  }
`;

const TestimonailData = ({ data, backgroundColor }) => (
  <Container className="section" backgroundColor={backgroundColor}>
    <div className="container">
      <div className="columns is-variable is-3">
        {data.map(items => (
          <Testimonail
            icon={items.logo.asset.url}
            title={items.title}
            subtitle={items.subtitle}
            button="Find out more"
          />
        ))}
      </div>
    </div>
  </Container>
);

export default TestimonailData;
