import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';
import Title from './elements/Title';
import Subtitle from './elements/Subtitle';

const Container = styled.div`
  .card {
    background: transparent;
}
`;
const Card = ({ title, subtitle, button, icon }) => (
  <Container>
    <div className="card">
      <div className="card-image has-text-centered">
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
