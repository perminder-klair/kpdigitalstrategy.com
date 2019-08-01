import React from 'react';

import styled from 'styled-components';
import Image from '../../static/images/sideimage.jpg';
import Heading from './elements/Heading';
import Title from './elements/Title';
import Subtitle from './elements/Subtitle';

const Container = styled.div`
  .ContantBox {
    margin-top: 4rem;
    padding: 1rem 7rem;
  }
  .TitleWrapper {
    margin-top: 1rem;
  }
  .SubitleWrapper {
    padding: 1rem 0rem;
  }
`;

const Purposeful = () => (
  <Container className="has-background-black">
    <div className="columns">
      <div className="column">
        <div className="ContantBox">
          <Heading>
            Purposeful design and marketing services for aspirtational compaines
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
              We are unfraid of data & analytics our results are transparent.We
              are passionate problem solvers who define objetives pinpoint
              challenges and above all else are on your side celebrating yout
              every win
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

      <div className="column">
        <img src={Image} />
      </div>
    </div>
  </Container>
);

export default Purposeful;
