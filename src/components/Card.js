import React from 'react';
import { Button, Title, Subtitle } from './elements';

const Card = ({ title, subtitle, button, Icon }) => (
  <div>
    <div>
      <img src={Icon} title="its a icon Brand Identity" alt="Avatar" />
    </div>
    <div className="media-content has-text-centered">
      <Title red>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button borderRed className="has-text-weight-semibold">
        {button}
      </Button>
    </div>
  </div>
);

export default Card;
