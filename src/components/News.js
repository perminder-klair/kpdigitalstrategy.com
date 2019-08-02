import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .columns {
    padding: 2rem 7rem 2.3rem;
    justify-content: space-between;
  }
`;
const News = () => (
  <Container className="has-background-white">
    <div className="columns">
      <div className="">
        <img src="/images/wired.svg" />
      </div>
      <div className="">
        <img src="/images/telegraph.svg" />
      </div>
      <div className="">
        <img src="/images/the-times.svg" />
      </div>
      <div className="">
        <img src="/images/daily-mails.svg" />
      </div>
      <div className="">
        <img src="/images/forbes.svg" />
      </div>
    </div>
  </Container>
);

export default News;
