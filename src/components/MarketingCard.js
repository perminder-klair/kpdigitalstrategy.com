import React from 'react';
import styled from 'styled-components';
import { Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.darkGrey};
  padding: 1rem 1rem;
  .subtitle {
    font-weight: 500 !important;
    font-size: 1rem !important;
    padding-top: 1rem;
  }
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MarketingCard = ({ subtitle, Icon }) => (
  <Container className="has-text-centered">
    <figure className="image is-96x96">
      <img src={Icon} />
    </figure>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default MarketingCard;
