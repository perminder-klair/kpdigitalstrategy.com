import React from 'react';
import styled from 'styled-components';
import { Button, Title } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.darkGrey};
`;
const Development = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <div className="">
        <Title>Want to discuss your project with one of our expert team</Title>
      </div>
      <Button>Read More</Button>
    </div>
  </Container>
);

export default Development;
