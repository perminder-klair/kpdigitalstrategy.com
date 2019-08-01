import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';

const Container = styled.div`
<<<<<<< HEAD
  margin: 0 auto;
  padding-top: 0;
=======

>>>>>>> 1a74f2dd04909e1e0f59a760714719e91bd02c87
`;

const Section = styled.section`
  padding: 0rem 2rem;
<<<<<<< HEAD
  background-color: ${props => props.theme.bodyBackground};
=======
>>>>>>> 1a74f2dd04909e1e0f59a760714719e91bd02c87
`;

const IndexLayout = ({ children }) => (
  <div className="">
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <Section className="section has-background-black">
      <Header />
      <Container>{children}</Container>
    </Section>
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
