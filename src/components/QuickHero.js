import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.mainBrandColor};
  padding: 2.5rem 3rem;
  margin: 1rem;
  :hover {
    background-color: ${props => props.theme.mainBrandColor}!important;
    color: #ffffff;
  }
  .subtitle {
    margin-top: 2rem;
  }
`;

const QuickHero = props => (
  <Container>
    <div className="has-text-centered">
      <img src={props.image} alt="daily-mails-logo" />

      <h4 className="subtitle is-5 has-text-centered">{props.text}</h4>
    </div>
  </Container>
);

export default QuickHero;
