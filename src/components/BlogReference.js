import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .columns {
    background-color: ${props => props.theme.backgroundColorGrey};
    display: flex;
  }
  .is-5 {
    padding: 0rem;
  }
  img {
    height: 8rem;
  }
  .subtitle {
    padding-top: 1rem;
  }
`;

const BlogReference = ({ data }) => (
  <Link to={`/blog/${data.slug.current}`}>
    <Container className="container">
      <div className="columns">
        <div className="column is-5">
          <img src={data.Thumbnail.asset.url} alt="/" />
        </div>
        <div className="column first is-7">
          <h1 className="subtitle is-6">{data.title}</h1>
        </div>
      </div>
    </Container>
  </Link>
);

export default BlogReference;
