import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.Black};
  p {
    color: ${props => props.theme.primaryColor};
    text-align: center;
    padding: 1rem 0rem;
    @media screen and (max-width: 600px) {
      font-size: 12px !important;
    }
  }
  .IconBox {
    justify-content: space-between;
    display: flex;
    margin: 0.2rem 0rem;
    @media screen and (max-width: 600px) {
      margin: 0.75rem 0rem;
    }
  }
  .icon {
    margin: 0.75rem 0.25rem;
    font-size: 29px;
    color: ${props => props.theme.SecondaryColor};
    background-color: transparent;
    @media screen and (max-width: 600px) {
      margin: 0rem 0rem;
    }
  }
`;
const SecondFooter = () => (
  <Container>
    <div className="IconBox is-pulled-right">
      <i className="icon is-medium fab fab fa-linkedin" />
      <i className="icon is-medium fab fa-instagram" />
      <i className="icon is-medium fab fa-facebook-square" />
    </div>
    <div>
      <p className="subtilte is-size-6 has-text-weight-medium is-uppercase">
        © kp Digital Strategy 2014-2019
      </p>
    </div>
  </Container>
);

export default SecondFooter;
