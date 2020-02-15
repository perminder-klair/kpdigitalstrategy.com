import React from 'react';
import styled from 'styled-components';

import FaqItem from './FaqItem';

const Container = styled.div`
  .title {
    margin-bottom: 2rem;
  }
  .CardWrapper {
    margin: 1rem 0rem;
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
      <h2 className="title size-4 has-text-centered">FAQ’s</h2>
      <p className="subtitle is-6 has-text-centered is-spaced">
        We answer your questions.
      </p>

      <div className="columns is-centered">
        <div className="column is-four-fifths">
          <div className="CardWrapper">
            <FaqItem questions="How does your pricing work?" />
          </div>
          <div className="CardWrapper">
            <FaqItem questions="How does your pricing work?" />
          </div>
          <div className="CardWrapper">
            <FaqItem questions="How does your pricing work? ?" />
          </div>
          <div className="CardWrapper">
            <FaqItem questions="How does your pricing work?" />
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default Faq;
