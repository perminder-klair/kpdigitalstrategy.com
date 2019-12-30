import React from "react";

import config from "../utils/config";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ContactHero from "../components/ContactHero";
import MyMapComponent from "../components/GoogleMaps";
import ContactForm from "../components/ContactForm";

export default class PortfoliosPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <ContactHero />
        <ContactForm />
        <MyMapComponent />
      </Layout>
    );
  }
}
