import React from "react";
import config from "../utils/config";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import FeaturedLogos from "../components/FeaturedLogos";
import ServiceItem from "../components/ServiceItem";
import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import Social from "../components/Social";
import BrandIdentity from "../components/BrandIdentity";
import OurProcess from "../components/OurProcess";
import Team from "../components/OurTeam";
import Portfolio from "../components/Portfolio";
import Brand from "../components/Brand";
import Reliable from "../components/Reliable";
import Faq from "../components/Faq";
import OurValue from "../components/OurValue";
import Purposeful from "../components/Purposeful";

import ImageCard from "../components/ImageCard";
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
        <Reliable />
        <Faq />
        <Social />

        <Purposeful />
        <ImageCard />
      </Layout>
    );
  }
}
