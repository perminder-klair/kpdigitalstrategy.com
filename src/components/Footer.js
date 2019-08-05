import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.Black};
  p {
    color: ${props => props.theme.primaryColor};
    margin: 0.51rem 1rem;
  }
  .IconBox {
    justify-content: space-between;
    display: flex;
    margin: 0.25rem 0rem;
  }
  .icon {
    margin: 0rem 0.25rem;
    font-size: 20px;
    color: ${props => props.theme.SecondaryColor};
    background-color: transparent;
  }
`;
const OurServices = () => (
  <Container>
    <div className="IconBox is-pulled-right">
      <i className="icon fab fab fa-linkedin" />
      <i className="icon fab fa-instagram" />
      <i className="icon fab fa-facebook-square" />
    </div>
    <p className="subtilte is-size-7 has-text-weight-medium is-uppercase is-pulled-right">
      © kp Digital Strategy 2014-2019
    </p>
  </Container>
);

export default OurServices;
