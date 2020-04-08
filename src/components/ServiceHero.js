import React from 'react';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';

const Container = styled.section``;

const ServiceHero = ({ data }) => (
  <Container>
    <div className="container">
      <section className="section">
        <div className="columns  is-multiline">
          {data.map(items => (
            <div className="column is-6">
              <ServiceCard
                title={items.category}
                subtitle={items.title}
                firstpara={items.description}
                secondpara={items.description}
                bgImage={items.Thumbnail.asset.url}
              />
            </div>
          ))}
          {/* <div className="column is-6">
            <ServiceCard
              title="Digital marketing"
              subtitle="Strategy & execution"
              firstpara="Competitor reseach and insights, strategic planning, goal setting."
              secondpara="Set up and optimisation of campaigns, on-going analysis & improvement. Digital Ads including Google, Bing & Social. Targeted email newslettes & LinkedIn outreach."
              bgImage="/images/service/laptop.jpg"
            />
          </div>
          <div className="column is-6">
            <ServiceCard
              title="Website design & development"
              subtitle="Drive engagement & business growth "
              firstpara="Bespoke built, responsive, secure, pixel-perfect website design and development GATSBY JS coded.  Wordpress. Contentful CMS options."
              secondpara="Lead generation, landing page creation. Built for business growth."
              bgImage="/images/service/code.jpg"
            />
          </div> */}
        </div>
      </section>
    </div>
  </Container>
);

export default ServiceHero;
