/* eslint-disable import/no-unresolved */
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
<<<<<<< HEAD
import MobileNumber from '../components/MobileNumber';
import News from '../components/News';
import BookFreeCall from '../components/BookFreeCall';

=======
import AdviceLine from '../components/AdviceLine';
import NewWebSite from '../components/NewWebSite';
>>>>>>> 1a74f2dd04909e1e0f59a760714719e91bd02c87

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
<<<<<<< HEAD
        <MobileNumber />
        <News />
        <BookFreeCall />
=======
        <AdviceLine />
        <NewWebSite />
>>>>>>> 1a74f2dd04909e1e0f59a760714719e91bd02c87
      </Layout>
    );
  }
}
