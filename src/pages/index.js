import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import MobileNumber from '../components/MobileNumber';
import News from '../components/News';
import BookFreeCall from '../components/BookFreeCall';


export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <MobileNumber />
        <News />
        <BookFreeCall />
      </Layout>
    );
  }
}
