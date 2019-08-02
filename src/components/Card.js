import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';
import Title from './elements/Title';
import Subtitle from './elements/Subtitle';

const Container = styled.div`
  .cards {
    background: transparent;
  }
  i {
    font-size: 5rem !important;
  }
`;
const Card = ({ title, subtitle, button, icon }) => (
  <Container>
    <div className="cards">
      <div className="card-icon has-text-centered">
        <i className={icon}></i>
      </div>
      <div className="media-content has-text-centered">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button>{button}</Button>
      </div>
    </div>
  </Container>
);

export default Card;
