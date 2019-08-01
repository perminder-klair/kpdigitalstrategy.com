import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .columns {
    margin-top: 0px;
    padding: 1.5rem 7rem;
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
        <img src="/images/times.svg" />
      </div>
      <div className="">
        <img src="/images/daily-mail.svg" />
      </div>
      <div className="">
        <img src="/images/fobres.svg" />
      </div>
    </div>
  </Container>
);

export default News;
