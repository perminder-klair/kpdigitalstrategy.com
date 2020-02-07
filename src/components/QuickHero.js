import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .box {
    align-self: center;

    background-color: ${props => props.theme.backgroundColor};
  }
  .subtitle {
    margin-top: 1rem;
  }
  .container {
    border: 2px solid ${props => props.theme.mainBrandColor};
    padding: 2rem 3rem;
  }
`;

const QuickHero = props => (
  <Section className="section">
    <div className="container">
      <div className="box has-text-centered">
        <img src={props.image} alt="daily-mails-logo" />
        <h4 className="subtitle is-5">{props.text}</h4>
      </div>
    </div>
  </Section>
);

export default QuickHero;
