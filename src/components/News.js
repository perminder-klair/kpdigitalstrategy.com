import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.WhiteDark};
  .columns {
    padding: 2rem 8rem 2.3rem;
    justify-content: space-between;
  }
`;
const News = () => (
  <Container className="">
    <div className="columns has-text-centered-mobile">
      <div>
        <img
          src="/images/wired.svg"
          alt="wired-logo"
          title="kpdigital strategy group icon"
        />
      </div>
      <div>
        <img
          src="/images/telegraph.svg"
          alt="telegraph-logo"
          title="kpdigital strategy group icon"
        />
      </div>
      <div>
        <img
          src="/images/the-times.svg"
          alt="the-times-logo"
          title="kpdigital strategy group icon"
        />
      </div>
      <div>
        <img
          src="/images/daily-mails.svg"
          alt="daily-mails-logo"
          title="kpdigital strategy group icon"
        />
      </div>
      <div>
        <img
          src="/images/forbes.svg"
          alt="forbes-logo"
          title="kpdigital strategy group icon"
        />
      </div>
    </div>
  </Container>
);

export default News;
