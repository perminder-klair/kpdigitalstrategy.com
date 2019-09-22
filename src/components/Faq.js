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
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const Faq = () => (
  <Container className="section">
    <div className="Container">
      <div className="has-text-centered">
        <h2 className="title size-2">Frequently Asked Questions</h2>
      </div>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="CardWrapper">
            <FaqItem questions="What information do i need to supply to you to start my project ?" />
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
          <div className="ButtonWrapper has-text-centered">
            <button
              className="button is-danger is-rounded has-text-weight-bold"
              type="button"
            >
              View All Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Faq;
