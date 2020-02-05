import React from 'react';
import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import QuickHero from '../components/QuickHero';

export default class QuickPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns">
          <div className="column has-text-centered">
            <h1 className="title is-4">Quick quote form</h1>
            <h2 className="subtitle is-6 has-text-danger">
              A collection of resources to support your business growth
            </h2>
            <h2 className="subtitle is-7">
              We look forward to learning more about your enquiry.
            </h2>
            <QuickHero />


            <div className="ButtonWrapper has-text-centered">
              <button
                className="button is-danger is-rounded has-text-weight-bold"
                type="button"
              >
                See our FAQ’s
              </button>
            </div>
          </div>
        </div>

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
