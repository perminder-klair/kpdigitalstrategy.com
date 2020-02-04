import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.backgroundColorLite};
  h1 {
    margin-top: 1rem;
  }
  img {
    width: 135px;
  }
  .column {
    align-self: center;
  }
  .main {
    margin: 0rem 2rem;
  }
`;

const images = [
  '/images/icons/official-epic-risk-management-landscape-logo@2x.png',
  '/images/icons/dom-logo-colour.png',
  '/images/icons/commbus-official-logo-no-tagline@2x.png',
  '/images/icons/official-epic-risk-management-landscape-logo@2x.png',
];

class Brand extends React.Component {
  render() {
    return (
      <Section className="section hero is-block is-normal">
        <div className="container">
          <div className="columns is-centered is-multiline is-variable is-9">
            <div className="column is-narrow has-text-centered">
              <div className="main">
                <h1 className="title is-4 has-text-black">Trusted by</h1>
              </div>
            </div>
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

export default Brand;
