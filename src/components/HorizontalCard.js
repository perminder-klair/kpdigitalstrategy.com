import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from './elements';

const Container = styled.div`
  padding: 3%;
  background: ${props => props.theme.blackDark};
  .media-left {
    text-align: center;
    align-self: center;
    margin-right: 2rem;
    margin-left: 1.1rem;
    width: ${props => (props.width ? props.width : '')};
  }
  .title {
    margin-bottom: 3%;
  }
`;
const Icon = styled.i`
  font-size: 4rem;
  color: ${props => props.theme.SecondaryColor};
`;

const HorizontalCard = ({ title, subtitle, icon }) => (
  <Container>
    <div className="media">
      <div className="media-left">
        <figure className="">
          <Icon
            className={icon}
            alt="the services icon"
            title="kpdigital strategy services icon"
          />
        </figure>
      </div>
      <div className="media-content">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </div>
  </Container>
);

export default HorizontalCard;
