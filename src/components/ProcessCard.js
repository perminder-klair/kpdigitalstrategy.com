import React from 'react';
import styled from 'styled-components';

import { Button, Subtitle } from './elements';
import Image from '../../static/images/userimage.png';

const Container = styled.div`
  background-color: #f54054;
  display: flex;
  .image {
    width: 500px;
    height: 223px;
  }
  .RightContainer {
    background-color: ${props => props.theme.darkGrey};
    padding: 1rem 1rem;
    @media screen and (max-width: 600px) {
      padding: 1rem 0.55rem;
    }
  }
  .discription {
    color: ${props => props.theme.primaryColor};
    font-size: 1rem;
  }
  .subtitle {
    font-size: 1.25rem !important;
    margin-bottom: 0.25rem;
  }
  .ButtonWrapper {
    padding: 1rem 0rem;
    @media screen and (max-width: 600px) {
      padding: 1rem 0rem;
    }
  }
`;

const ProcessCard = ({ subtitle, discription }) => (
  <Container>
    <div>
      <img
        src={Image}
        className="image"
        alt="user"
        title="kpdigital strategy"
      />
    </div>
    <div className="RightContainer">
      <Subtitle>{subtitle}</Subtitle>
      <p className="discription">{discription}</p>
      <div className="ButtonWrapper">
        <Button borderRed className="has-text-weight-semibold">
          learn more
        </Button>
      </div>
    </div>
  </Container>
);

export default ProcessCard;
