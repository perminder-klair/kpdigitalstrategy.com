import React from 'react';
import config from '../utils/config';

import Seo from '../components/Seo';

import Layout from '../components/Layout';
import Thanku from '../components/Thanku';
// import OurValue from '../components/OurValue';

export default class ThankuPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <Thanku />
        {/* <OurValue /> */}
      </Layout>
    );
  }
}
