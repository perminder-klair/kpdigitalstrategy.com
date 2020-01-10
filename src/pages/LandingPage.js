import React from "react";
import config from "../utils/config";

import ContactHero from "../components/ContactHero";
import Seo from "../components/Seo";
import Portfolio from "../components/Portfolio";
import Brand from "../components/Brand";
import Features from "../components/Features";
import Strengths from "../components/Strengths";
import ServiceItem from "../components/ServiceItem";
import Faq from "../components/Faq";
import OurValue from "../components/OurValue";
import Layout from "../components/Layout";
import Testimonail from "../components/Testimonail";

export default class LandingPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <ContactHero
          title="Digital Design
          Agency"
          subtitle="We align design, marketing and sales to empower business growth."
          textarea={false}
        />
        <OurValue />
        <ServiceItem />
        <Features />
        <Portfolio />
        <Strengths />
        <Faq />
        <Testimonail />
        <Brand />
      </Layout>
    );
  }
}
