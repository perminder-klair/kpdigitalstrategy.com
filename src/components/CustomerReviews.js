/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Heading, Title } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 3rem 0rem;
  .columns {
    justify-content: space-evenly;
  }
  .title {
    margin-bottom: 0.15rem;
  }
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
const CustomerReviews = () => (
  <Container className="has-text-centered-mobile section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-128x128 center">
            <img
              className="is-rounded center"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
        <div className="column">
          <Heading black>In the last 30 days we've received</Heading>
          <Title>60 postive customer reviews</Title>
          <h2 className="has-text-black has-text-weight-bold is-size-5">
            Bring us to 200 positve design and marketing outcomes over the past
            year for business all over the UK
          </h2>
        </div>
      </div>
    </div>
  </Container>
);

export default CustomerReviews;
