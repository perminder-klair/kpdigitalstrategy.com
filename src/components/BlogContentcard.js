import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .is-4 {
    background: url('https://econ70.com/wp-content/uploads/2019/05/working-women.jpg');
    border-top-left-radius: 1rem;
    padding-bottom: 8rem;
  }
  .first {
    background-color: ${props => props.theme.backgroundColorGrey};
  }
  .subtitle {
    padding: 1rem;
    line-height: 1.25;
  }
`;

const BlogContentcard = ({ text }) => (
  <Container className="container has-text-centered">
    <div className="columns">
      <div className="column is-4 has-text-centered" />
      <div className="column first is-7 has-text-left">
        <h1 className="subtitle">{text}</h1>
      </div>
    </div>
  </Container>
);

export default BlogContentcard;
