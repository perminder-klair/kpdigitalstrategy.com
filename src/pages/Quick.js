import React from 'react';
import Layout from '../components/Layout';
import config from '../utils/config';
import Seo from '../components/Seo';
import QuickQuestionOne from '../components/QuickQuestionOne';
import QuickQuestionThree from '../components/QuickQuestionThree';
import QuickQuestionFour from '../components/QuickQuestionFour';

export default class QuickPage extends React.Component {
  render() {
    return (
      <Layout>
        <QuickQuestionOne />
        <QuickQuestionThree />
        <QuickQuestionFour />
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
      </Layout>
    );
  }
}
