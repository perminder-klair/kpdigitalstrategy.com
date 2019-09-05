import React from 'react';
import styled from 'styled-components';

import FaqItem from './FaqItem';

const Container = styled.div`
  .CardWrapper {
    margin: 2rem 0rem;
  }
  .ButtonWrapper {
    margin: 4rem 0rem;
  }
`;

const Faq = () => (
  <Container className="section">
    <div className="Container">
      <div className="has-text-centered	">
        <h2 className="title size-2 has-text-danger">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="CardWrapper">
        <FaqItem questions="What information do i need to supply to you to start my project ?" />
      </div>
      <div className="CardWrapper">
        <FaqItem questions="What information do i need to supply to you to start my project ?" />
      </div>
      <div className="CardWrapper">
        <FaqItem questions="What information do i need to supply to you to start my project ?" />
      </div>
    </div>
    <div className="ButtonWrapper has-text-centered">
      <button className="button is-primary" type="button">
        View All Questions
      </button>
    </div>
  </Container>
);

export default Faq;
