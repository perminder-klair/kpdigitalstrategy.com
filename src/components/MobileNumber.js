import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem;
  span {
    color: ${props => props.theme.primaryColor};
  }
`;
const MobileNumber = () => (
  <Container className="has-background-white has-text-centered">
    <h6 className="title is-7 has-text-black-bis">
      Free advice line:<span>+44 161 258 3622</span> (From 8am to 5pm)
    </h6>
  </Container>
);

export default MobileNumber;
