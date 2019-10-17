import React from 'react';

import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactHero from '../components/ContactHero';
import MyMapComponent from '../components/GoogleMaps';
import ContactForm from '../components/ContactForm';
import CustomerReviews from '../components/CustomerReviews'

const Section = styled.div`
  .container {
    margin-top: 4rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    margin-top: 2rem;
  }
`;

const Contact = () => (
  <Layout>
    <ContactHero />
    <ContactForm />
    <MyMapComponent />
    <CustomerReviews/>
  </Layout>
);

export default Contact;
