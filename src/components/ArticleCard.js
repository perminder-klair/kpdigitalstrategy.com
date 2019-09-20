import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    border-radius: 1rem;
  }
  .title {
    line-height: 0.5;
  }
  img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .media-content {
    padding: 3rem 2rem;
  }
  .button {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const ArticleCard = () => (
  <Container className="column is-4">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="/images/dummy/image5.png" alt="dummy" />
        </figure>
      </div>
      <div className="media-content has-text-centered">
        <h2 className="title is-5 has-text-black">Understanding our logo</h2>
        <h2 className="title is-5  has-text-black">design process</h2>
        <p className="has-text-black">
          Our step by step guides talks you through the process of team take
          when developing a logo. Whether you have an idea of the logo you would
          like to create or whether you are open to exploration we are here to
          help.
        </p>
        <button
          className="button is-danger is-rounded has-text-weight-bold"
          type="button"
        >
          Read More
        </button>
      </div>
    </div>
  </Container>
);

export default ArticleCard;
