import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    border-radius: 1rem;
    background-color: ${props => props.theme.darkShades};
    height: 36rem;
  }
  .title {
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

const ArticleCard = ({ image, alt, h2, title, subtitle }) => (
  <Container className="column is-4">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div className="media-content has-text-centered">
        <h2 className="subtitle is-6 has-text-danger">{h2}</h2>
        <h2 className="title is-6  has-text-white is-spaced">{title}</h2>
        <p className="subtitle is-7 has-text-white">{subtitle}</p>
        <button
          className="button is-danger is-rounded has-text-weight-bold"
          type="Read More"
        >
          Read More
        </button>
      </div>
    </div>
  </Container>
);

export default ArticleCard;
