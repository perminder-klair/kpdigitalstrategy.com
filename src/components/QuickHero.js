import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.backgroundColor};

  .column {
    align-self: center;
  }
  .main {
    margin: 0rem 1rem;
  }
`;

const images = [
  '/images/icons/branding-icon-text.png',
  '/images/icons/website-icon-select.png',
  '/images/icons/marketing-icon.png',
];

class QuickHero extends React.Component {
  render() {
    return (
      <Section className="section hero is-block is-normal">
        <div className="container">
          <div className="columns is-centered is-multiline is-variable is-9">
            {images.map(items => (
              <div className="column is-narrow has-text-centered">
                <div className="main">
                  <img src={items} alt="daily-mails-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default QuickHero;
