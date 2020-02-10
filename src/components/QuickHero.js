import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.theme.backgroundColor};
  }
  .subtitle {
    margin-top: 1rem;
  }
  .container {
    border: 2px solid ${props => props.theme.mainBrandColor};
    height: 13rem;
    width: 13rem;
    padding: 3rem 1rem 1rem 1rem;
    margin: 1rem;
    :hover {
      background-color:${props => props.theme.mainBrandColor}!important;
      color: #ffffff;
  }


`;

const QuickHero = props => (
  <Container>
    <div className="container has-text-centered">
      <img src={props.image} alt="daily-mails-logo" />

      <h4 className="subtitle is-5 has-text-centered">{props.text}</h4>
    </div>
  </Container>
);

export default QuickHero;
