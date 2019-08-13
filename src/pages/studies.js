import React from 'react';

import Layout from '../components/Layout';
import HomeCaseStudies from '../components/HomeCaseStudies';
import DesignCase from '../components/DesignCase';
import ProjectsType from '../components/ProjectsType';
import BrandIdentity from '../components/BrandIdentity';
import BookFreeCall from '../components/BookFreeCall';
import Development from '../components/Development';

const studies = () => (
  <Layout>
    <Seo
      title="kpdigitalstrategy"
      description="Welcome to GatsbyJs v2"
      keywords=""
      url={`${config.siteUrl}`}
    />
    <HomeCaseStudies />
    <DesignCase />
    <ProjectsType />
    <Development />
    <BrandIdentity />
    <BookFreeCall />
  </Layout>
);

export default studies;
