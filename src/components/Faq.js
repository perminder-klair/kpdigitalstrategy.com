import React from 'react';
import styled from 'styled-components';

import FaqItem from './FaqItem';

const Container = styled.div`
  .title {
    margin-bottom: 4rem;
  }
  .CardWrapper {
    margin: 2rem 0rem;
  }
  .ButtonWrapper {
    margin: 4rem 0rem;
  }
  .button {
    border: 2px solid;
    padding: 0.5rem 2rem 2rem 2rem;
    border-radius: unset;
  }
`;

const Faq = () => (
  <Container className="section">
    <div className="Container">
      <div className="has-text-centered	">
        <h2 className="title size-2 ">Frequently Asked Questions</h2>
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
      <button
        className="button is-primary has-text-danger has-text-weight-bold"
        type="button"
      >
        View All Questions
      </button>
    </div>
  </Container>
);

export default Faq;
