import React from 'react';
import styled from 'styled-components';
import { Button, Title, Subtitle } from './elements';

const Container = styled.div`
  .cards {
    background: transparent;
  }
  .media-content {
    margin-top: 1.5rem;
  }
`;

const Card = ({ title, subtitle, button, Icon }) => (
  <Container>
    <div className="cards">
      <div className="column">
        <img src={Icon} />
      </div>
      <div className="media-content has-text-centered">
        <Title red>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button borderRed className="has-text-weight-semibold">
          {button}
        </Button>
      </div>
    </div>
  </Container>
);

export default Card;
