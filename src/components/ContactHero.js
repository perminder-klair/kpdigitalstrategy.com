import React from 'react';
import styled from 'styled-components';

const Section = styled.section``;

const ContactHero = () => (
  <Section className="section">
    <div className="container">
      <section className="hero has-text-centered">
        <div className="hero-body">
          <h2 className="title is-1 is-size-3-mobile">Contact us</h2>
          <h2 className="has-text-danger has-text-weight-bold">
            Send us an email or drop us a line, We would love to hear from you
          </h2>
        </div>
      </section>
    </div>
  </Section>
);

export default ContactHero;
