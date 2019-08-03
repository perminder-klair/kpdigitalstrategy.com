/* eslint-disable jsx-a11y/alt-text */
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
`;
const CustomerReviews = () => (
  <Container className="has-text-centered-mobile section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-128x128">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div className="column">
          <Heading black>Meet the team</Heading>
          <Title>
            For help of enything you need to know about design and marketing
          </Title>
          <h2 className="has-text-black has-text-weight-medium is-size-5">
            Bring us to enything you design and marketing
          </h2>
        </div>
      </div>
    </div>
  </Container>
);

export default CustomerReviews;
