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
import HoverWebsite from '../../static/images/redbox.png';
import searchhover from '../../static/images/searchhover.png';
import leaflethover from '../../static/images/leaflethover.png';
import logohover from '../../static/images/logohover.png';
import EmailHover from '../../static/images/emailhover.png';
import Socialhover from '../../static/images/socialhover.png';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundDark};
  .ImagesContainer {
    padding: 2rem 0rem;
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
            <MarketingCard
              subtitle="logo"
              icon={LogoIcon}
              hovericon={logohover}
            />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Brochure & Leaflet"
              icon={LeafletIcon}
              hovericon={leaflethover}
            />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="website"
              icon={WebsiteIcon}
              hovericon={HoverWebsite}
            />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Email newsletter"
              icon={EmailIcon}
              hovericon={EmailHover}
            />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Social media"
              icon={SocialIcon}
              hovericon={Socialhover}
            />
          </div>
          <div className="column">
            <MarketingCard
              subtitle="Infographic"
              icon={SearchIcon}
              hovericon={searchhover}
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default BrandIdentity;
