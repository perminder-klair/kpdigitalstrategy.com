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

const TestimonailData = ({ backgroundColor }) => (
  <Container className="section" backgroundColor={backgroundColor}>
    <div className="container">
      <div className="columns is-variable is-3">
        <Testimonail
          icon="/images/icons/quote-icon@2x.png"
          title="Auroras Copywriting"
          subtitle="We can work with you from start to finish to create a consistent brand both online and offline. Whether you are a start up business or looking to develop your existing identity, we can help."
          button="Find out more"
        />
        <Testimonail
          icon="/images/icons/quote-icon@2x.png"
          title="With Social Enterprise"
          subtitle="Our in house team create live visual mockups of your website to show how it will look across different devices. Developing pixel-perfect websites that are secure, responsive & professional."
          button="Find out more"
        />
      </div>
    </div>
  </Container>
);

export default TestimonailData;
