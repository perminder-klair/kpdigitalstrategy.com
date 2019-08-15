import React from 'react';
import styled from 'styled-components';

import { Button, Title, Heading } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 3.2rem 0rem 4rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
`;

const AdviceCentre = () => (
  <Container className="section">
    <div className="has-text-centered">
      <Heading black>Not sure where to begin ?</Heading>
      <Title>
        For help of enything you need to know about design and marketing
      </Title>
      <ButtonWrapper>
        <Button>visit our advice centre</Button>
      </ButtonWrapper>
    </div>
  </Container>
);

export default AdviceCentre;
