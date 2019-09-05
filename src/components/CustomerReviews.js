import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.mainBrandColor};
  .image {
    display: block;
    margin-left: auto;
    margin-right: 3rem;
    @media screen and (max-width: 600px) {
      margin-right: auto;
    }
  }
  p {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
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
          <p className="is-size-4 has-text-weight-semibold has-text-black">
            In the last 30 days we've received
          </p>
          <p className="is-size-4 has-text-weight-semibold">
            60 postive customer reviews
          </p>
          <p className="has-text-black has-text-weight-semibold">
            Bring us to 200 positve design and marketing outcomes over the past
            year for business all over the UK
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default CustomerReviews;
