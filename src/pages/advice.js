import React from "react";

import config from "../utils/config";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import MarketingAdvice from "../components/MarketingAdvice";
import FeaturesArticles from "../components/FeaturesArticles";
import ContactUs from "../components/ReachUs";
import OurValue from "../components/OurValue";

export default class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <Hero
          title=" Design & Marketing Advice Centre"
          subtitle="  A collection of resources to support your business growth"
        />
        <MarketingAdvice />
        <FeaturesArticles />
        <OurValue />
        <Faq />
        <ContactUs />
      </Layout>
    );
  }
}
