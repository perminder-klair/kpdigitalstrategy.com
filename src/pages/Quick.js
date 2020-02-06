import React from 'react';
import Layout from '../components/Layout';
import config from '../utils/config';

import Seo from '../components/Seo';

import QuickItems from '../components/QuickItems';

export default class QuickPage extends React.Component {
  render() {
    return (
      <Layout>
        <QuickItems />
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
      </Layout>
    );
  }
}
