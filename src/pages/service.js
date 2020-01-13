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

import Testimonail from "../components/Testimonail";

export default class ServicePage extends React.Component {
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
          title="Website design
          & development"
          subtitle="We provide a full suite of website design and development services to provide you with a bespoke solution that drives engagement.  "
          textarea={false}
        />
        <OurValue />
        <ServiceItem />
        <section className="section">
          <p className="title is-4 has-text-centered is-spaced">
            Fully managed website solutions
          </p>
          <p className="subtitle is-6 has-text-centered">
            One point of contact for design, development and on-going marketing
            for your website.
          </p>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-3">
              <FeatureItem
                icon="/images/icons/branding-icon.png"
                title="Website design & UX"
                subtitle="Choose from either static or live visualisations of your website design across different devices so that you know exactly how your website will look.


              Find out more"
                button="Find out more"
              />
              <FeatureItem
                icon="/images/icons/website-icon.png"
                title="Website development"
                subtitle="Our in house team create live visual mockups of your website to show how it will look across different devices. Developing pixel-perfect websites that are secure, responsive & professional."
                button="Find out more"
              />
              <FeatureItem
                icon="/images/icons/e-commerce-icon.png"
                title="E-Commerce development"
                subtitle="Our e-commerce solutions are built with the end user in mind to give an effortless online shopping experience. With fast load speeds and enhanced mobile device experience to drive online revenue.

              Find out more"
                button="Find out more"
              />
            </div>
          </div>
          <div className="container">
            <div className="columns is-variable is-3">
              <FeatureItem
                icon="/images/icons/hosting-icon.png"
                title="Website hosting"
                subtitle="We store our website builds on a secure UK server that is equipped with a firewall and anti-virus protection. A dedicated server gives fast load speeds for improved SEO."
                button=" Get in touch"
              />
              <FeatureItem
                icon="/images/icons/support-icon.png"
                title="Website support"
                subtitle="Our service level agreements are in place to give you our clients a fast, responsive service that resolves issues and applies updates promptly."
                button="
              Get in touch"
              />
            </div>
          </div>
        </section>
        <ReachUs />
        <Portfolio />
        <Strengths />

        <Testimonail />
        <Brand />
        <GetInTouch />
      </Layout>
    );
  }
}
