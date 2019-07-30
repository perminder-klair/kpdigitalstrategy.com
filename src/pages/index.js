import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Container = styled.div``;
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to GatsbyJs v1"
          url={`${config.siteUrl}`}
        />
        <Container>dwed</Container>
      </Layout>
    );
  }
}
