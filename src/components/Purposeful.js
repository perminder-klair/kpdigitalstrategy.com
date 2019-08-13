import React from 'react';

import styled from 'styled-components';
import Image from '../../static/images/sideimage.jpg';
import { Button, Title, Subtitle, Heading } from './elements';

const Container = styled.div`
  .ContantBox {
    padding-right: 11rem;
    padding-left: 1rem;
    @media screen and (max-width: 600px) {
      margin-left: 0rem;
      padding: 0rem 0rem;
    }
  }
  .TitleWrapper {
    margin-top: 1rem;
  }
  .SubitleWrapper {
    padding: 1rem 0rem;
  }
  .ButtonWrapper {
    margin-left: 1rem;
    @media screen and (max-width: 600px) {
      margin-left: 0rem;
    }
  }
  .column {
    align-self: center;
    padding: 0rem 0.78rem;
  }
  .image {
    width: 683px;
    height: 686px;
  }
`;

const Purposeful = () => (
  <Container className="has-background-black">
    <div className="columns">
      <div className="column">
        <div>
          <div className="ContantBox">
            <Heading>
              Purposeful design and marketing services for aspirtational
              compaines
            </Heading>
            <div className="TitleWrapper">
              <Title red>
                We align design, marketing and sales to make it easier than ever
                to reach new business heights.
              </Title>
            </div>
            <div className="SubitleWrapper">
              <Subtitle>
                We are experiences team of designers and marketeers whoare ready
                to create brand identities,devise informed marketing strategues,
                create competlling email nirture track campaigns ,and develop
                pixel-perfect websites-to name judt afew of our services.
              </Subtitle>
            </div>
            <div className="SubitleWrapper">
              <Subtitle>
                We are unfraid of data & analytics our results are
                transparent.We are passionate problem solvers who define
                objetives pinpoint challenges and above all else are on your
                side celebrating yout every win
              </Subtitle>
            </div>
            <div className="SubitleWrapper">
              <Subtitle>
                No matter the size of your projects, or if you are just starting
                out,KP digital Strategy has everthing you need to unlock your
                brand's potential
              </Subtitle>
            </div>
          </div>
        </div>
        <div className="ButtonWrapper">
          <Button borderRed secondary className="is-size-7 has-text-white">
            View Our Portfolio
          </Button>
        </div>
      </div>

      <div className="column">
        <img src={Image} className="image" />
      </div>
    </div>
  </Container>
);

export default Purposeful;
