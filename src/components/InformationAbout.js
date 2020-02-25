import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .iconImage {
    height: 3rem;
  }
`;
const Border = styled.div`
  border-top: 2px solid;
  margin-bottom: 6rem;
  margin-top: 4rem;
`;
const InformationAbout = ({
  title,
  subtitle,
  DescriptionOne,
  DescriptionTwo,
}) => (
  <div>
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <img
              src="/images/team/case-study-image@2x.png"
              alt="About Imformation"
            />
          </div>
          <div className="column">
            <h1 className="title is-size-5">{title}</h1>
            <h2 className="subtitle has-text-danger is-size-5">{subtitle}</h2>
            <p>{DescriptionOne}</p>
            <p>{DescriptionTwo}</p>
            <img
              src="/images/team/linkedin@2x.png"
              alt="icon-image"
              className="iconImage"
            />
          </div>
        </div>
      </div>
    </Section>
    <Border />
  </div>
);
export default InformationAbout;
