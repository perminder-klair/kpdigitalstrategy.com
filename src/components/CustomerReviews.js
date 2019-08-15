import React from 'react';
import styled from 'styled-components';
import { Title } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  padding: 4rem 0rem;
  .columns {
    justify-content: space-evenly;
  }
  .title {
    margin-bottom: 0.35rem;
  }
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .headline {
    color: ${props => props.theme.darkGrey};
  }
  .discription {
    padding-right: 14rem;
    @media screen and (max-width: 600px) {
      padding-right: 0rem;
    }
  }
`;
const CustomerReviews = () => (
  <Container className="has-text-centered-mobile section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-128x128 center">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              className="is-rounded center"
              title="its a icon Brand Identity"
              alt="Bulma Avatar"
            />
          </figure>
        </div>
        <div className="column">
          <h1 className="headline is-size-4 has-text-weight-bold">
            In the last 30 days we've received
          </h1>
          <Title>60 postive customer reviews</Title>
          <h2 className="has-text-black has-text-weight-bold is-size-6 discription">
            Bring us to 200 positve design and marketing outcomes over the past
            year for business all over the UK
          </h2>
        </div>
      </div>
    </div>
  </Container>
);

export default CustomerReviews;
