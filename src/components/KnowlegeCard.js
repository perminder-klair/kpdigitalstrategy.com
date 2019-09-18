import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
  .card {
    border-radius: 1rem;
  }
  .title {
    line-height: 0.5;
    @media screen and (max-width: 600px) {
      line-height: 1;
    }
  }
  img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .media-content {
    padding: 3rem 2rem;
  }
  .button {
    padding: 0rem 3rem 0rem 3rem;
  }
`;

const KnowlegeCard = () => (
  <Container className="column is-half">
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by1">
          <img src="/images/dummy/image5.png" alt="Placeholder image" />
          <button
            className="button is-danger has-text-weight-bold"
            type="button"
          >
            Branding
          </button>
        </figure>
      </div>
      <div className="media-content has-text-centered">
        <h2 className="title is-5 has-text-black">
          Understanding our logo design process
        </h2>
        <p className="has-text-black">
          Our step by step guides talks you through the process of team take
          when developing a logo. Whether you have an idea of the logo you would
          like to create or whether you are open to exploration we are here to
          help.
        </p>
        <buttom className="button is-danger is-rounded has-text-weight-bold">
          Read More
        </buttom>
      </div>
    </div>
  </Container>
);

export default KnowlegeCard;
