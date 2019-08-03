import React from 'react';
import styled from 'styled-components';
import { Heading, Title, Button } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 3rem 0rem;
  .columns {
    justify-content: space-evenly;
  }
  .title {
    margin-bottom: 1rem;
  }
  .HeadingWrapper {
    margin-top: 5rem;
  }
`;
const MeetTeam = () => (
  <Container className="has-text-centered-mobile section">
    <div className="container">
      <div className="columns">
        <div className="column is-2">
          <figure className="image">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div className="column is-2">
          <figure className="image is-square">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div className="column is-2">
          <figure className="image is-square">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
      </div>
      <div className="has-text-centered HeadingWrapper">
        <Heading black>Meet the team</Heading>
        <Title>
          For help of enything you need to know about design and marketing
        </Title>
        <Button>Spaek to us today</Button>
      </div>
    </div>
  </Container>
);

export default MeetTeam;
