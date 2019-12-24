import React from "react";

import config from "../utils/config";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MarketingAdvice from "../components/MarketingAdvice";
import FeaturesArticles from "../components/FeaturesArticles";
import KnowlegeCenter from "../components/KnowlegeCenter";
import BrandIdentity from "../components/BrandIdentity";
import ContactUs from "../components/ContactUs";

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
        <KnowlegeCenter />
        <BrandIdentity />
        <ContactUs />
      </Layout>
    );
  }
}
