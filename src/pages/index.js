import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AdviceLine from '../components/AdviceLine';
import News from '../components/News';
import BookFreeCall from '../components/BookFreeCall';
import CardsContent from '../components/CardsContent';
import NewWebSite from '../components/NewWebsite';
import Purposeful from '../components/Purposeful';
import OurServices from '../components/OurServices';
import AdviceCentre from '../components/AdviceCentre';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <AdviceLine />
        <NewWebSite />
        <News />
        <Purposeful />
        <BookFreeCall />
        <CardsContent />
        <AdviceCentre />
        <OurServices />
      </Layout>
    );
  }
}
