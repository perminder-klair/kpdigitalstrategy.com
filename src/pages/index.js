import React from "react";
import config from "../utils/config";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import FeaturedLogos from "../components/FeaturedLogos";
import ServiceItem from "../components/ServiceItem";
import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import BrandIdentity from "../components/BrandIdentity";
import OurProcess from "../components/OurProcess";
import Team from "../components/OurTeam";
import Portfolio from "../components/Portfolio";
import Faq from "../components/Faq";
import AdviceCentre from "../components/AdviceCentre";
import OurValue from "../components/OurValue";

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
        {/*
        <FeaturedLogos />
        */}
        <OurValue />
        <ServiceItem />
        <Features />
        {/*
        <BrandIdentity />
         */}
        <ContactUs />
        {/*
        <OurProcess />
        <Team />
        */}
        <Portfolio />
        <Faq />
        <AdviceCentre />
      </Layout>
    );
  }
}
