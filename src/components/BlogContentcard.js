import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  .is-4 {
    background: url('https://econ70.com/wp-content/uploads/2019/05/working-women.jpg');
    border-top-left-radius: 1rem;
  }
  .first {
    background-color: ${props => props.theme.backgroundColorGrey};
  }
  .text {
    padding: 1rem;
  }
`;

const BlogContentcard = () => (
  <Container className="container has-text-centered">
    <div className="columns">
      <div className="column is-4" />
      <div className="column first">
        <h1 className="text">Understanding our logo process</h1>
      </div>
    </div>
  </Container>
);

export default BlogContentcard;
