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
`;

const Brand = styled.i`
  color: ${props => props.theme.blackDark};
  font-size: 3rem;
`;

const MarketingCard = ({ subtitle, Icon }) => (
  <Container className="has-text-centered">
    <Brand className={Icon} />
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default MarketingCard;
