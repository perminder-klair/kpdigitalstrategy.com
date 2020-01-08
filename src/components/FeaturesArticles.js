import React from "react";
import styled from "styled-components";

import ArticleCard from "./ArticleCard";

const Section = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  border-top: 3px solid;
  margin-top: 2rem;
  .button {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const FeaturesArticles = () => (
  <Section className="section">
    <div className="container">
      <h1 className="title is-3">Featured</h1>
      <h2 className="subtitle is-5 has-text-danger">
        Articles on KP Digital Strategy
      </h2>
      <div className="columns is-multiline">
        <ArticleCard
          image="/images/dummy/infographic-blog-feature-image.png"
          alt="test"
          h2="Marketing Advice
          "
          title="
          10 reasons why you should use infographics in your marketing"
          subtitle="Information and graphic, or simply infographic, is a graphic presentation of certain data, information and/or knowledge. used to  market products or services."
        />
        <ArticleCard
          image="/images/dummy/web-performance-feature-image@2x.png"
          alt="test"
          h2="Website Advice"
          title="
          Web perforance and why it is 
          important for conversion
          "
          subtitle=" A delay in page load time will negatively affect conversion rates. Conversion rates being The percentage of landing page visitors who take the desired conversion action.
          "
        />
        <ArticleCard
          image="/images/dummy/google-ads-feature-image@2x.png"
          alt="test"
          h2="Markating Advice"
          title="

          Create a killer Google Ads campaign with these 5 top tips

          
          "
          subtitle=" Here are our top tips that will help you to keep your Google Adwords costs low but boost your quality score and improving you cost per acquisition.
          "
        />
        <ArticleCard
          image="/images/dummy/content-marketing-feature-image@3x.png"
          alt="test"
          h2="Markating Advice"
          title="

          5 essential steps to create your content marketing strategy 
          "
          subtitle=" Content marketing helps businesses plan and prepare for cost-effective sources of website traffic and new leads.  There are a multitude of content formats and channels to use.
          "
        />
        <ArticleCard
          image="/images/dummy/email-feature-image@3x.png"
          alt="test"
          h2="Website Advice"
          title="

          5 tips for creating a newsletter that people want to read
          "
          subtitle="  Marketing is changing all the time, however, the truth is that email marketing is still a very efficient and effective way of building a relationship with your customers.
          "
        />
        <ArticleCard
          image="/images/dummy/website-attraction-feature-image@3x.png"
          alt="test"
          h2="Markating Advice"
          title="

          How to attract people to 
          your website
          "
          subtitle=" The website of your company is a virtual space where potential customers can find all the information they need about your products and/or services.
          "
        />
        <ArticleCard
          image="/images/dummy/google-ads-feature-image@2x.png"
          alt="test"
          h2="Markating Advice"
          title="

          What is SEO?
          "
          subtitle=" Search engine optimisation or as it is better known SEO is the process of increasing your websites visibility in the search engines.
          "
        />
        <ArticleCard
          image="/images/dummy/seo-feature-image@2x.png"
          alt="test"
          h2="Website Advice"
          title="

          How organic search can help you 
          grow your business

          "
          subtitle="
          Organic search is when your websites pages appear in the search results for the key words you have optimised your pages for, that are relevant to the services you deliver to your clients.
          "
        />
        <ArticleCard
          image="/images/dummy/black-hat-seo@2x.png"
          alt="test"
          h2="Markating Advice"
          title=" What is black hat SEO? "
          subtitle="When
        looking at SEO there are 3 types of techniques that people use to make
        their page visible in the search engine, these are known as Black Hat,
        White Hat and Grey Hat SEO. "
        />
      </div>
      <div className="ButtonWrapper has-text-centered">
        <button
          className="button is-danger is-rounded has-text-weight-bold"
          type="button"
        >
          Load more
        </button>
      </div>
    </div>
  </Section>
);

export default FeaturesArticles;
