import React from 'react';
import styled from 'styled-components';
import { Heading, Title, Button } from './elements';

const Container = styled.div`
  .columns {
    justify-content: space-between;
  }
`;
const StrategyProcess = () => (
  <Container className="has-background-white section">
    <div className="container">
      <div className="has-text-centered HeadingWrapper">
        <Heading black>Meet the team</Heading>
        <Title red>
          For help of enything you need to know about design and marketing
        </Title>
        <Button>Spaek to us today</Button>
      </div>

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
    </div>
  </Container>
);

export default StrategyProcess;
