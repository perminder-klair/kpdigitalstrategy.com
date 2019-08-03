/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .title {
    padding-bottom: 1rem;
  }

`;

const AskedQuestions = () => (
  <Container className="section">
    <div className="Container">
      <h2 className="title has-text-centered has-text-weight-medium has-text-white is-size-3">
        Frequently Asked Questions
      </h2>
    </div>
  </Container>
);

export default AskedQuestions;
