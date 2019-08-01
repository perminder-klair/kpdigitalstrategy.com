import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import News from '../components/News';
import BookFreeCall from '../components/BookFreeCall';
import CardsContent from '../components/CardsContent';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <News />
        <BookFreeCall />
        <CardsContent />
      </Layout>
    );
  }
}
