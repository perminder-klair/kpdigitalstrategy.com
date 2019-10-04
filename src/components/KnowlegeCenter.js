import React from 'react';
import styled from 'styled-components';

import KnowlegeCard from './KnowlegeCard';

const Section = styled.section``;

const KnowlegeCenter = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-3">Industry Leading</h1>
      <p className="has-text-danger">Knowledge, Advice & Guidance</p>
      <p> All categories</p>
      <div className="columns is-multiline is-variable is-6">
        <KnowlegeCard
          src="/images/categories/image-one.jpg"
          buttonclass="button is-danger has-text-weight-bold"
          buttontitle="Branding"
          link="/page/Branding"
        />
        <KnowlegeCard
          src="/images/categories/image-two.jpg"
          buttonclass="button is-link has-text-weight-bold"
          buttontitle="Digital Marketing"
          link="/page/Digital-Marketing"
        />
        <KnowlegeCard
          src="/images/categories/image-three.jpg"
          buttonclass="button is-secondary has-text-weight-bold"
          buttontitle="Website development"
          link="page/Website-Development"
        />
        <KnowlegeCard
          src="/images/categories/image-four.jpg"
          buttonclass="button is-primary has-text-weight-bold"
          buttontitle="Social Media"
          link="/page/Social-Media"
        />
        <KnowlegeCard
          src="/images/categories/image-five.jpg"
          buttonclass="button is-info has-text-weight-bold"
          buttontitle="Business Advice"
          link="/page/Business-Advice"
        />
        <KnowlegeCard
          src="/images/categories/image-six.jpg"
          buttonclass="button is-danger has-text-weight-bold"
          buttontitle="Branding"
          link="/page/Branding"
        />
      </div>
    </div>
  </Section>
);

export default KnowlegeCenter;
