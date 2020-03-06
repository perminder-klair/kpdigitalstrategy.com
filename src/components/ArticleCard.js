import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Block from './PortableText';

const Container = styled.div`
  .card {
    border-radius: 1rem;
    background-color: ${props => props.theme.darkShades};
    height: 40rem;
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

const ArticleCard = ({ data }) => {
  return (
    <Container className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={data.Thumbnail.asset.url} alt="kp-digital" />
          </figure>
        </div>
        <div className="media-content has-text-centered">
          <h2 className="subtitle is-6 has-text-danger is-spaced">
            {data.category}
          </h2>
          <h2 className="title is-5  has-text-white is-spaced">{data.title}</h2>
          <p className="subtitle is-6 has-text-white">
            <Block input={data._rawBody} />
          </p>
          <Link
            to={`/blog/${data.slug.current}`}
            className="button is-danger is-rounded has-text-weight-bold"
            type="Read More"
          >
            Read More
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ArticleCard;
