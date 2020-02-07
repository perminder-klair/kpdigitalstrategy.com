import React from 'react';
import Layout from '../components/Layout';
import config from '../utils/config';
import Seo from '../components/Seo';
import QuickQuestion1 from '../components/QuickQuestion1';
import QuickQuestion2 from '../components/QuickQuestion2';
import QuickQuestion3 from '../components/QuickQuestion3';

export default class QuickPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <QuickQuestion1 />
          <QuickQuestion2 />
          <QuickQuestion3 />
          <Seo
            title="Manchester Digital Marketing Agency"
            description="KP Digital Strategy"
            url={config.siteUrl}
            image={config.image}
          />
        </div>
      </Layout>
    );
  }
}
