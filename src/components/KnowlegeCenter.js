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
        <KnowlegeCard />
        <KnowlegeCard />
        <KnowlegeCard />
        <KnowlegeCard />
        <KnowlegeCard />
        <KnowlegeCard />
      </div>
    </div>
  </Section>
);

export default KnowlegeCenter;
