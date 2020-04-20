import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  img {
    width: -webkit-fill-available;
  }
`;
const Border = styled.div`
  border-top: 1px solid;
`;
const BrandHeaderCase = ({ data }) => (
  <Section>
    <Border />
    <div className="columns is-multiline is-variable is-3">
      <div className="column is-half">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              {data.adddetails.map(item => (
                <div className="column">
                  <h1 className="title is-size-6 is-spaced">{item.title}</h1>
                  <p className="subtitle is-size-6 is-spaced">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {data.images.map(item => (
        <div className="column is-half">
          <img
            src={item.asset.url}
            alt="daily mails logo"
            title="kpdigital strategy Design"
          />
        </div>
      ))}
    </div>
  </Section>
);

export default BrandHeaderCase;
