import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 3.2rem 0rem 4rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const AdviceCentre = () => (
  <Container className="section">
    <div className="has-text-centered">
      <h2 className="title size-3 has-text-black">Not sure where to begin ?</h2>
      <p>For help of enything you need to know about design and marketing</p>
      <ButtonWrapper>
        <button className="button is-outlined" type="button">
          visit our advice centre
        </button>
      </ButtonWrapper>
    </div>
  </Container>
);

export default AdviceCentre;
