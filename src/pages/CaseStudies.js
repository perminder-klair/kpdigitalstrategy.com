import React from "react";
import config from "../utils/config";

import Seo from "../components/Seo";
import OurValue from "../components/OurValue";
import Layout from "../components/Layout";

export default class CaseStudiesSPage extends React.Component {
  render() {
    return (
      <Layout>
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
