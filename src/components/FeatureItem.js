/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  p {
    margin-top: 1rem;
  }
`;

const FeatureItem = ({ logo, title, subtitle }) => (
  <Section className="section">
    <div className="container">
      <img src={logo} title={title} alt={title} />
      <p className="is-size-6 has-text-weight-medium has-text-white">{title}</p>
      <p className="is-size-7 has-text-weight-medium has-text-white has-text-weight-light">
        {subtitle}
      </p>
    </div>
  </Section>
);
export default FeatureItem;
