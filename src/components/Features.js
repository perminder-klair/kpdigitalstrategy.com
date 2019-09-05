import React from 'react';
import styled from 'styled-components';

import FeatureItem from './FeatureItem';

const Container = styled.section``;

const Features = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <FeatureItem
          icon="/images/icons/brand-round.png"
          title="Brand Identity"
          subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
          button="learn more"
        />
        <FeatureItem
          icon="/images/icons/website-round.png"
          title="Website development"
          subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
          button="learn more"
        />
        <FeatureItem
          icon="/images/icons/marketing-round.png"
          title="Strategic marketing"
          subtitle="Protect excerpt. Lorem ipsum dolor sit amet,
              conselorem ipsum dolor sit amet, consectetuer adipiscing alit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat."
          button="learn more"
        />
      </div>
    </div>
  </Container>
);

export default Features;
