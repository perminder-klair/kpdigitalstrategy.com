import React from 'react';
import styled from 'styled-components';

import KnowlegeCard from './KnowlegeCard';

const Section = styled.section``;

const KnowlegeCenter = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-3">Industry Leading</h1>
      <p className="has-text-danger">Knowledge, Advice & Guidance</p>
      <p> All categories > Digital Marketing</p>
      <div className="columns is-multiline is-variable is-6">
        <KnowlegeCard
          src="/images/categories/image-one.jpg"
          bclass="button is-danger has-text-weight-bold"
          btitle="Branding"
        />
        <KnowlegeCard
          src="/images/categories/image-two.jpg"
          bclass="button is-link has-text-weight-bold"
          btitle="Digital Marketing"
        />
        <KnowlegeCard
          src="/images/categories/image-three.jpg"
          bclass="button is-secondary has-text-weight-bold"
          btitle="Website development"
        />
        <KnowlegeCard
          src="/images/categories/image-four.jpg"
          bclass="button is-primary has-text-weight-bold"
          btitle="Social Media"
        />
        <KnowlegeCard
          src="/images/categories/image-five.jpg"
          bclass="button is-info has-text-weight-bold"
          btitle="Business Advice"
        />
        <KnowlegeCard
          src="/images/categories/image-six.jpg"
          bclass="button is-danger has-text-weight-bold"
          btitle="Branding"
        />
      </div>
    </div>
  </Section>
);

export default KnowlegeCenter;
