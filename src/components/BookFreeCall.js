import React from 'react';
import styled from 'styled-components';
import { Button, Title } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 3.5rem 0rem;
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
        <Button className="has-text-weight-semibold">book a FREE call</Button>
      </div>
    </div>
  </Container>
);

export default BookFreeCall;