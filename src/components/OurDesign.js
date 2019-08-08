/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Button, Title, Subtitle } from './elements';
import Image from '../../static/images/sideimage.jpg';
import BusImage from '../../static/images/bus.png';
import BookImage from '../../static/images/book.png';
import TruckImage from '../../static/images/truck.png';
import BottlesImage from '../../static/images/bottles.png';
import BottelImage from '../../static/images/bottel.png';

const Container = styled.div`
  padding-bottom: 1rem;
  .columns {
    margin: -1rem 0rem !important;
  }
  .ButtonWrapper {
    padding: 1.6rem 0rem 1rem;
    background: ${props => props.theme.SecondaryColor};
    
  }
  .section {
    background-color: ${props => props.theme.backgroundDark};
  }
  .title {
    margin-bottom: 0.7rem !important;
  }
`;

const OurDesign = () => (
  <Container className="has-text-centered-mobile">
    <div className="HeadingWrapper has-text-centered section">
      <Title red>Some Our design project examples</Title>
      <Subtitle>Here are some examples of some of our latest design</Subtitle>
    </div>
    <div className="columns is-gapless is-0 ">
      <div className="column is-two-quarter">
        <img src={BusImage} />
      </div>
      <div className="column is-two-quarter">
        <img src={BookImage} />
      </div>
      <div className="column is-two-quarter">
        <img src={TruckImage} />
      </div>
    </div>
    <div className="columns is-gapless is-0">
      <div className="column is-half">
        <img src={BottlesImage} />
      </div>
      <div className="column is-half">
        <img src={BottelImage} />
      </div>
    </div>
    <div className="columns is-gapless is-0 ">
      <div className="column is-two-quarter">
        <img src={BusImage} />
      </div>
      <div className="column is-two-quarter">
        <img src={BookImage} />
      </div>
      <div className="column is-two-quarter">
        <img src={TruckImage} />
      </div>
    </div>
    <div className="ButtonWrapper has-text-centered">
      <Button>Learn more about our design & creative work</Button>
    </div>
  </Container>
);

export default OurDesign;
