/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import Image from '../../static/images/sideimage.jpg';
import { Button, Title, Subtitle } from './elements';

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
      <Subtitle size={7}>
        Here are some examples of some of our latest design
      </Subtitle>
    </div>
    <div className="columns is-gapless is-0 ">
      <div className="column is-two-quarter">
        <img src={Image} />
      </div>
      <div className="column is-two-quarter">
        <img src={Image} />
      </div>
      <div className="column is-two-quarter">
        <img src={Image} />
      </div>
    </div>
    <div className="columns is-gapless is-0">
      <div className="column is-half">
        <img src={Image} />
      </div>
      <div className="column is-half">
        <img src={Image} />
      </div>
    </div>
    <div className="columns is-gapless is-0 ">
      <div className="column is-two-quarter">
        <img src={Image} />
      </div>
      <div className="column is-two-quarter">
        <img src={Image} />
      </div>
      <div className="column is-two-quarter">
        <img src={Image} />
      </div>
    </div>
    <div className="ButtonWrapper has-text-centered">
      <Button>Learn more about our design & creative work</Button>
    </div>
  </Container>
);

export default OurDesign;
