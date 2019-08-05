import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  h3 {
    color: ${props => props.theme.primaryColor};
  }
`;
const OurServices = () => (
  <Container className="section">
    <div className="container">
      <h3 className="is-size-4 has-text-weight-medium is-uppercase is-pulled-right">
        © kp Digital Strategy
      </h3>
    </div>
  </Container>
);

export default OurServices;
