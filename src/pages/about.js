import React from 'react';
import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AboutHomeHero from '../components/AboutHomeHero';
import OurValue from '../components/OurValue';
import InformationAbout from '../components/InformationAbout';
import ReachUs from '../components/ReachUs';
import TestimonailData from '../components/TestimonailData';
import GetInTouch from '../components/GetInTouch';

export const aboutQuery = graphql`
  query about {
    sanitySiteSettings {
      aboutPage {
        heroTitle
        heroSubtitle
        ourValues
      }
    }
  }
`;
export default class AboutUs extends React.Component {
  render() {
    const {
      data: { sanitySiteSettings: page },
    } = this.props;
    console.log(page);
    return (
      <Layout>
        <Seo
          title="Manchester Digital Marketing Agency"
          description="KP Digital Strategy"
          url={config.siteUrl}
          image={config.image}
        />
        <AboutHomeHero />
        <OurValue data={page.aboutPage.ourValues} />
        <InformationAbout
          title="Kelly Pierduta"
          subtitle="Founder"
          DescriptionOne="Lorem ipsum dolor sit amet, iuvaret honestatis vis eu. Cu quem phaedrum voluptaria sed, ne eum elit eloquentiam, qualisque scriptorem in eam. Qui an tollit similique consectetuer. Indoctum disputationi eu sea. Ad per adhuc nemore, et duo ubique contentiones."
          DescriptionTwo="Sententiae definiebas sit ei, id quem postea tacimates vel. Nullam utamur posidonium ius ne, cu quot fastidii hendrerit sed, ne mei sumo feugiat. Mandamus similique cu quo. Cum erat molestie in, mea tale zril ex."
        />
        <InformationAbout
          title="Danielle Pierduta"
          subtitle="Digital Marketing Executive"
          DescriptionOne="Lorem ipsum dolor sit amet, iuvaret honestatis vis eu. Cu quem phaedrum voluptaria sed, ne eum elit eloquentiam, qualisque scriptorem in eam. Qui an tollit similique consectetuer. Indoctum disputationi eu sea. Ad per adhuc nemore, et duo ubique contentiones."
          DescriptionTwo="Sententiae definiebas sit ei, id quem postea tacimates vel. Nullam utamur posidonium ius ne, cu quot fastidii hendrerit sed, ne mei sumo feugiat. Mandamus similique cu quo. Cum erat molestie in, mea tale zril ex."
        />
        {/* <ReachUs /> */}
        {/* <TestimonailData />
        <GetInTouch /> */}
      </Layout>
    );
  }
}
