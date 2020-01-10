import React from "react";
import config from "../utils/config";

import Seo from "../components/Seo";
import OurValue from "../components/OurValue";
import ImageCard from "../components/ImageCard";
import BrandIdentity from "../components/BrandIdentity";
import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout";

export default class CaseStudiesPage extends React.Component {
  render() {
    return (
      <Layout>
        <p className="title is-4 is-spaced has-text-centered">
          Our Case Studies
        </p>
        <p className="subtitle is-6 has-text-centered has-text-danger">
          Here is some of our latest work
        </p>

        <section className="columns is-gapless is-0 is-multiline">
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

        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <OurValue />
        <BrandIdentity />
        <ContactUs />
      </Layout>
    );
  }
}
