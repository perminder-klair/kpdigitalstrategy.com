/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';
import Footer from './Footer';
import OurServices from './OurServices';
import SecondFooter from './SecondFooter';

const Container = styled.div`
  font-family: ${props => props.theme.roboto};
`;

const Section = styled.div`
  padding: 0rem 2rem;
`;

const IndexLayout = ({ children, isfooter }) => (
  <div className="">
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <Section className="has-background-black">
      <Header />
      <Container>{children}</Container>
      <OurServices />
      {isfooter ? <Footer /> : <SecondFooter />}
    </Section>
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
