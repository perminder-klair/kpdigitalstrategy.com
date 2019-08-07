import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from './elements';
import MarketingCard from './MarketingCard';
import SearchIcon from '../../static/images/search.png';
import EmailIcon from '../../static/images/email.png';
import WebsiteIcon from '../../static/images/website.png';
import LeafletIcon from '../../static/images/leaflet.png';
import SocialIcon from '../../static/images/Social.png';
import LogoIcon from '../../static/images/logo.png';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  .ImagesContainer {
    padding: 3rem 0rem;
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
            <MarketingCard subtitle="logo" Icon={LogoIcon} />
          </div>
          <div className="column">
            <MarketingCard subtitle="Brochure & Leaflet" Icon={LeafletIcon} />
          </div>
          <div className="column">
            <MarketingCard subtitle="website" Icon={WebsiteIcon} />
          </div>
          <div className="column">
            <MarketingCard subtitle="Email newsletter" Icon={EmailIcon} />
          </div>
          <div className="column">
            <MarketingCard subtitle="Social media" Icon={SocialIcon} />
          </div>
          <div className="column">
            <MarketingCard subtitle="Infographic" Icon={SearchIcon} />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default BrandIdentity;
