import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';
import Title from './elements/Title';
import Subtitle from './elements/Subtitle';

const Container = styled.div`
  .cards {
    background: transparent;
  }
  .column {
    background: ${props => props.theme.primaryColor};
    height: 11rem;
    width: 11rem;
    margin: 0px 5.5px;
    border-radius: 6rem;
    padding: 3.5rem 3rem;
  }
  .media-content {
    margin-top: 1.5rem;
  }
`;
const Icon = styled.i`
  font-size: 4rem;
  color: #0c1117;
`;
const Card = ({ title, subtitle, button, icon }) => (
  <Container>
    <div className="cards">
      <div className="column">
        <Icon className={icon}></Icon>
      </div>
      <div className="media-content has-text-centered">
        <Title red>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button borderRed className="has-text-weight-semibold">{button}</Button>
      </div>
    </div>
  </Container>
);

export default Card;
