import React from 'react';
import styled from 'styled-components';
import { Button, Title, Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.RedDrak};
  .CardBottom {
    background-color: ${props => props.theme.primaryColor};
    padding: 0.25rem 0.25rem;
  }
`;
const UsingCard = () => (
  <Container className="has-text-centered section">
    <div className="container">
      <div className="">
        <Title>Website DevelopmentCard Using Gatsby Js </Title>
        <Subtitle>ACM ENVIROMENTAL PLC</Subtitle>
      </div>
      <div className="CardBottom">
        <p className="description">
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which
        </p>
        <Button Black>Read More</Button>
      </div>
    </div>
  </Container>
);

export default UsingCard;
