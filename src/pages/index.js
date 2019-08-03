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
import AskedQuestions from '../components/AskedQuestions';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="kpdigitalstrategy"
          description="Welcome to GatsbyJs v2"
          url={`${config.siteUrl}`}
        />
        <AdviceLine />
        <NewWebSite />
        <News />
        <Purposeful />
        <BookFreeCall />
        <CardsContent />
        <AskedQuestions />
        <AdviceCentre />
        <OurServices />
      </Layout>
    );
  }
}
