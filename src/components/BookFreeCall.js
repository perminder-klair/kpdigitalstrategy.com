import React from 'react';
import styled from 'styled-components';
import Title from './elements/Title';
import Button from './elements/Button';

const Container = styled.div`
  background-color: red;
  .column {
    margin-top: 0px;
  }
`;
const BookFreeCall = () => (
  <Container className="has-text-centered-mobile">
    <div className="columns">
      <div className="column is-two-fifths is-offset-one-quarter">
        <Title red>
          Want to discuss your project with one of our expert team?{' '}
        </Title>
      </div>
      <div className="column">
        <Button>book a FREE call</Button>
      </div>
    </div>
  </Container>
);

export default BookFreeCall;
