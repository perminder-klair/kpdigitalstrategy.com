import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';

const Container = styled.div`

`;
const Section = styled.section`
  padding: 0rem 2rem;
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