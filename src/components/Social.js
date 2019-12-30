import React from "react";
import styled from "styled-components";

import FeatureItem from "./FeatureItem";

const Container = styled.section`
  border-top: 1px solid #ffff;
  padding: 5rem 1.5rem;
  background-color: ${props => props.theme.primaryColor};
  .section {
    background-color: ${props => props.theme.backgroundColor};
  }
`;

const Social = () => (
  <Container className="section">
    <div className="container">
      <div className="columns is-variable is-3">
        <FeatureItem
          icon="/images/icons/branding-icon.png"
          title="Brand Identity"
          subtitle="We can work with you from start to finish to create a consistent brand both online and offline. Whether you are a start up business or looking to develop your existing identity, we can help."
          button="Find out more"
        />
        <FeatureItem
          icon="/images/icons/website-icon.png"
          title="Website development"
          subtitle="Our in house team create live visual mockups of your website to show how it will look across different devices. Developing pixel-perfect websites that are secure, responsive & professional."
          button="Find out more"
        />
      </div>
    </div>
  </Container>
);

export default Social;
