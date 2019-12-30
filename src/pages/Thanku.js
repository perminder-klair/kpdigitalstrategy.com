import React from "react";
import config from "../utils/config";

import Seo from "../components/Seo";
import OurValue from "../components/OurValue";
import Layout from "../components/Layout";

export default class ThankuPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="columns">
          <div className="column has-text-centered">
            <section className="section">
              <div className="pic">
                <img
                  src="/images/icons/thank-you-page-image.png"
                  alt="thanku"
                  title="kpdigital strategy Design"
                />
              </div>
            </section>
            <h1 className="title">Thank you for contacting us</h1>
            <h2 className="subtitle is-6 has-text-danger">
              A member of our team will be in touch with you within 24 hours os
              submitting your request.
            </h2>
            <h2 className="subtitle is-7">
              We look forward to learning more about your enquiry.
            </h2>
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
        <OurValue />
      </Layout>
    );
  }
}
