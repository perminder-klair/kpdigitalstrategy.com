import React from 'react';
import styled from 'styled-components';
import Title from './elements/Title';
import Button from './elements/Button';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 3.2rem 0rem 4rem;
`;
const BookFreeCall = () => (
  <Container className="has-text-centered-mobile">
    <div className="columns">
      <div className="column is-two-fifths is-offset-one-quarter">
        <Title>
          Want to discuss your project with one of our expert team?{' '}
        </Title>
      </div>
      <div className="column">
        <Button className="has-text-weight-semibold">
          book a FREE call
        </Button>
      </div>
    </div>
  </Container>
);

export default BookFreeCall;
