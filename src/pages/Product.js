import React from "react";
import config from "../utils/config";

import ContactHero from "../components/ContactHero";
import Seo from "../components/Seo";
import Portfolio from "../components/Portfolio";
import Brand from "../components/Brand";
import FeatureItem from "../components/FeatureItem";
import Strengths from "../components/Strengths";
import ServiceItem from "../components/ServiceItem";
import OurValue from "../components/OurValue";
import ReachUs from "../components/ReachUs";
import Layout from "../components/Layout";
import GetInTouch from "../components/GetInTouch";
import TestimonailData from "../components/TestimonailData";

export default class ProductPage extends React.Component {
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
          title="Strategic user friendly  
          website design
          "
          subtitle="Website design that enhances customer experience with improved  usability and ease of use. Our process enhances customer satisfaction and 
          loyalty with your brand.  "
          textarea={false}
        />
        <OurValue />
        <ServiceItem />

        <Strengths />
        <ReachUs />
        <Portfolio />
        <Brand />
        <TestimonailData />

        <GetInTouch />
      </Layout>
    );
  }
}
