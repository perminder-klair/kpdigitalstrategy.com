import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AdviceLine from '../components/AdviceLine';
import News from '../components/News';
import BookFreeCall from '../components/BookFreeCall';
import CardsContent from '../components/CardsContent';
import NewWebSite from '../components/NewWebsite';
import Purposeful from '../components/Purposeful';
import AdviceCentre from '../components/AdviceCentre';
import AskedQuestions from '../components/AskedQuestions';
import OurDesign from '../components/OurDesign';
import MeetTeam from '../components/MeetTeam';
import CustomerReviews from '../components/CustomerReviews';
import StrategyProcess from '../components/StrategyProcess';
import BrandIdentity from '../components/BrandIdentity';
import TeamQualities from '../components/TeamQualities';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout isfooter>
        <Seo
          title="kpdigitalstrategy"
          description="home page of kpdigitalstrategy"
          keywords="website design Purposeful design marketing services"
          url={`"${config.siteUrl}"`}
        />
        <AdviceLine />
        <NewWebSite />
        <News />
        <Purposeful />
        <BookFreeCall />
        <CardsContent />
        <TeamQualities />
        <BrandIdentity />
        <CustomerReviews />
        <StrategyProcess />
        <MeetTeam />
        <OurDesign />
        <AskedQuestions />
        <AdviceCentre />
      </Layout>
    );
  }
}
