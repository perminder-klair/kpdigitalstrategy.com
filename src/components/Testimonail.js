/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.section`
    section {
    
      height: 368.5px;
      
    }
    .container {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding-bottom: 1rem;
    }
    img {
      margin: 2rem 0rem;
      height: 60px;
    width: 82px;
    }
    p {
      margin-bottom: 2rem;
    }
  }
`;

const Testimonial = ({ title, subtitle, button, icon }) => (
  <Container className="column is-half">
    <div className="section">
      <div className="container">
        <img src={icon} title={title} alt={title} />
        <div className="media-content has-text-centered">
          <h2 className="title is-4  has-text-white">{title}</h2>
          <p>{subtitle}</p>
          <Link className="is-size-6 has-text-weight-bold">{button}</Link>
        </div>
      </div>
    </div>
  </Container>
);
export default Testimonial;
