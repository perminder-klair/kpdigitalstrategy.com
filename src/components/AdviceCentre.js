/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';
import Subtitle from './elements/Subtitle';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 3.2rem 0rem 4rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem 3rem;
`;

const AdviceCentre = () => (
  <Container className="section">
    <div className=" has-text-centered">
      <h1 className="title has-text-weight-bold has-text-black is-size-4">
        Not sure where to begin ?
      </h1>
      <Subtitle size={6}>
        For help of enything you need to know about design and marketing
      </Subtitle>
      <ButtonWrapper>
        <Button isMedium>visit our advice centre</Button>
      </ButtonWrapper>
    </div>
  </Container>
);

export default AdviceCentre;
