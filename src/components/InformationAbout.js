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
  personImage,
  linkedImg,
  alt,
}) => (
  <div>
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <img src={personImage} alt={alt} />
          </div>
          <div className="column">
            <h1 className="title is-size-5">{title}</h1>
            <h2 className="subtitle has-text-danger is-size-5">{subtitle}</h2>
            <p>{DescriptionOne}</p>
            <p>{DescriptionTwo}</p>
            <img src={linkedImg} alt={alt} className="iconImage" />
          </div>
        </div>
      </div>
    </Section>
    <Border />
  </div>
);
export default InformationAbout;
