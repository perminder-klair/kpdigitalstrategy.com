import React from 'react';
import styled from 'styled-components';
import { Button, Title, Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.RedDrak};
  padding: 0.25rem;
  .CardBottom {
    background-color: ${props => props.theme.primaryColor};
    padding: 0.25rem;
  }
  .title {
    padding: 0.75rem 0rem;
    margin-bottom: 0rem !important;
  }
  .subtitle {
    color: ${props => props.theme.Black};
    padding: 0.25rem 0rem;
    margin-top: 0rem !important;
    margin-bottom: 0.65rem;
  }
  .description {
    padding: 0rem 3rem;
  }
  .ButtonWrapper {
    padding: 0rem 0.25rem 0.5rem !important;
  }
`;
const UsingCard = () => (
  <Container className="has-text-centered ">
    <div className="container">
      <Title>Website DevelopmentCard Using Gatsby Js </Title>
      <h6 class="subtitle is-7 has-text-weight-bold">ACM ENVIROMENTAL PLC</h6>
      <div className="CardBottom">
        <Subtitle className="description ">
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which
        </Subtitle>
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
