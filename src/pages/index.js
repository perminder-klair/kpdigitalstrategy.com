import React from "react";
import config from "../utils/config";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import ServiceItem from "../components/ServiceItem";
import ReachUs from "../components/ReachUs";
import Features from "../components/Features";
import Portfolio from "../components/Portfolio";
import Brand from "../components/Brand";
import Strengths from "../components/Strengths";
import Faq from "../components/Faq";
import OurValue from "../components/OurValue";
import Testimonail from "../components/Testimonail";
import GetInTouch from "../components/GetInTouch";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <HomeHero />
        <Brand />
        <OurValue />
        <ServiceItem />
        <Features />
        <ReachUs />
        <Portfolio />
        <Strengths />
        <Faq />
        <Testimonail />
        <GetInTouch />
      </Layout>
    );
  }
}
