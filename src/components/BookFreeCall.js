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
  <Container className="">
    <div class="columns">
  <div class="column is-two-fifths


is-offset-one-quarter">
  <Title red>Want to discuss your project with one of our expert team? </Title>
  </div>
  <div class="column"><Button borderWhite>book a FREE call</Button>
 </div>
  
</div>
  </Container>
);

export default BookFreeCall;
