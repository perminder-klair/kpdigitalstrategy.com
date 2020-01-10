import React from "react";
import config from "../utils/config";
import FormProps from "../components/FormProps";
import Seo from "../components/Seo";
import Portfolio from "../components/Portfolio";
import Brand from "../components/Brand";
import Features from "../components/Features";
import Reliable from "../components/Reliable";
import ContactUs from "../components/ContactUs";
import ServiceItem from "../components/ServiceItem";
import ImageCard from "../components/ImageCard";
import Faq from "../components/Faq";
import OurValue from "../components/OurValue";
import Layout from "../components/Layout";
import Social from "../components/Social";

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
        <FormProps
          title="Digital Design
          Agency"
          subtitle="We align design, marketing and sales to empower business growth. "
          paragraph="We will be in touch within 24 hours."
          paragraph2="By submitting you agree to our contact terms and conditions."
          button="Get started"
        />
        <OurValue />
        <ServiceItem />
        <Features />
        <ContactUs />
        <Portfolio />
        <Reliable />
        <section className="section">
          <section className="columns is-variable is-1 is-multiline">
            <ImageCard image="/images/dummy/case-study-image.png" alt="test" />
            <ImageCard
              image="/images/dummy/steven-shaw-website@3x.png"
              alt="test"
            />
            <ImageCard
              image="/images/dummy/commbus-website-mockup@2x.png"
              alt="test"
            />
            <ImageCard
              image="/images/dummy/learn-realm-website-design.png"
              alt="test"
            />
          </section>
        </section>
        <Social />
        <Brand />
      </Layout>
    );
  }
}
