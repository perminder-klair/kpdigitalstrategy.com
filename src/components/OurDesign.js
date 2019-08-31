import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from './elements';
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
    font-size: 32px !important;
  }
  .button {
    background-color: transparent;
    font-size: 16px;
    border: 4px solid white;
    padding: 2rem 8rem;
    color: white;
    font-weight: 700;
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
        <img
          src={BusImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-two-quarter">
        <img
          src={BookImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-two-quarter">
        <img
          src={TruckImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
    </div>
    <div className="columns is-gapless is-0">
      <div className="column is-half">
        <img
          src={BottlesImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-half">
        <img
          src={BottelImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
    </div>
    <div className="columns is-gapless is-0 ">
      <div className="column is-two-quarter">
        <img
          src={BusImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-two-quarter">
        <img
          src={BookImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
      <div className="column is-two-quarter">
        <img
          src={TruckImage}
          alt="daily mails logo"
          title="kpdigital strategy Design"
        />
      </div>
    </div>
    <div className="ButtonWrapper has-text-centered">
      <a className="button">learn more about our design & creative work</a>
    </div>
  </Container>
);

export default OurDesign;
