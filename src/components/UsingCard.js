import React from 'react';
import styled from 'styled-components';
import { Button, Title, Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.RedDrak};
  .CardBottom {
    background-color: ${props => props.theme.primaryColor};
    margin: 0.25rem 0.25rem;
  }
  .title {
    padding: 0.75rem 0rem;
    margin-bottom: 0rem !important;
  }
  .subtitle {
    color: ${props => props.theme.Black};
    font-weight: bolder !important;
    padding: 0.25rem 0rem;
    margin-top: 0rem !important;
    margin-bottom: 0.65rem;
  }
  .description {
    padding: 0rem 3rem;
  }
  .ButtonWrapper {
    padding: 1rem 0.25rem;
  }
`;
const UsingCard = () => (
  <Container className="has-text-centered ">
    <div className="container">
      <Title>Website DevelopmentCard Using Gatsby Js </Title>
      <Subtitle>ACM ENVIROMENTAL PLC</Subtitle>
      <div className="CardBottom">
        <p className="description">
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which
        </p>
        <div className="ButtonWrapper">
          <Button borderRed className="has-text-black has-text-weight-bold">
            Read More
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default UsingCard;
