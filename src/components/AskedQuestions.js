import React from 'react';
import styled from 'styled-components';
import CardQuestions from './CardQuestions';
import { Button, Heading } from './elements';

const Container = styled.div`
  .CardWrapper {
    margin: 2rem 0rem;
  }
  .ButtonWrapper {
    margin: 4rem 0rem;
  }
`;

const AskedQuestions = () => (
  <Container className="section">
    <div className="Container">
      <div className="has-text-centered	">
        <Heading>Frequently Asked Questions</Heading>
      </div>
      <div className="CardWrapper">
        <CardQuestions Questions="What information do i need to supply to you to start my project ?" />
      </div>
      <div className="CardWrapper">
        <CardQuestions Questions="What information do i need to supply to you to start my project ?" />
      </div>
      <div className="CardWrapper">
        <CardQuestions Questions="What information do i need to supply to you to start my project ?" />
      </div>
    </div>
    <div className="ButtonWrapper has-text-centered">
      <Button borderRed secondary isMedium>
        View All Questions
      </Button>
    </div>
  </Container>
);

export default AskedQuestions;
