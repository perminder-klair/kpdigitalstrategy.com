import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from './elements';
import MarketingCard from './MarketingCard';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  .ImagesContainer {
    padding: 3rem 0rem;
  }
  .Marketing {
  }
`;

const BrandIdentity = () => (
  <Container className="section">
    <div className="container">
      <div className="has-text-centered HeadingWrapper">
        <Title red>Looking to improve your brand identity & marketing ?</Title>
        <Subtitle red>
          select an option below to get a quick quote for our services
        </Subtitle>
      </div>
      <div className="ImagesContainer">
        <div className="columns">
          <div className="column">
            <MarketingCard subtitle="logo" Icon="fas fa-window-maximize" />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Brochure & Leaflet"
              Icon="fas fa-window-maximize"
            />
          </div>
          <div className="column">
            <MarketingCard subtitle="website" Icon="fas fa-window-maximize" />
          </div>
          <div className="column">
            <MarketingCard subtitle="Email newsletter" Icon="fas fa-user-tie" />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Social media"
              Icon="fas fa-window-maximize"
            />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Infographic"
              Icon="fas fa-window-maximize"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default BrandIdentity;
