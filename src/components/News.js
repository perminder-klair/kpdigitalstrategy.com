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
    <div className="columns has-text-centered-mobile">
      <div>
        <img src="/images/wired.svg" alt="wired-logo" />
      </div>
      <div>
        <img src="/images/telegraph.svg" alt="telegraph-logo" />
      </div>
      <div>
        <img src="/images/the-times.svg" alt="the-times-logo" />
      </div>
      <div>
        <img src="/images/daily-mails.svg" alt="daily-mails-logo" />
      </div>
      <div>
        <img src="/images/forbes.svg" alt="forbes-logo" />
      </div>
    </div>
  </Container>
);

export default News;
