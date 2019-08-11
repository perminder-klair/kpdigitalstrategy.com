/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Button, Subtitle } from './elements';
import Image from '../../static/images/userimage.png';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
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
  }
  .subtitle {
    font-size: 1.25rem !important;
    margin-bottom: 0.25rem;
  }
  .ButtonWrapper {
    padding: 1rem 1rem;
    @media screen and (max-width: 600px) {
      padding: 1rem 0rem;
    }
  }
`;
const ProcessCard = ({ subtitle, discription }) => (
  <Container>
    <div>
      <img src={Image} className="image" />
    </div>
    <div className="RightContainer">
      <Subtitle>{subtitle}</Subtitle>
      <p className="discription is-size-7">{discription}</p>
      <div className="ButtonWrapper">
        <Button borderRed secondary className="has-text-weight-semibold">
          learn more
        </Button>
      </div>
    </div>
  </Container>
);

export default ProcessCard;
