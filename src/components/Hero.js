import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const Hero = props => (
  <Section className="section">
    <div className="container">
      <section className="hero has-text-centered">
        <div className="hero-body">
          <h2 className="title is-3 is-size-3-mobile is-spaced">
            {props.title}
          </h2>
          <h2 className="subtitle is-6  has-text-weight-semibold has-text-danger">
            {props.subtitle}
          </h2>
        </div>
      </section>
    </div>
  </Section>
);

export default Hero;
