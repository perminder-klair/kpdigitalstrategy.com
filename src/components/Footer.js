/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import config from '../utils/config';

const Section = styled.section`
  background-color: ${props => props.theme.darkShades};
  .title {
    color: ${props => props.theme.lightShades} !important;
  }
  .logoImage {
    width: 18rem;
  }
  .mg {
    margin-top: 3rem;
  }
  .mb {
    margin-bottom: 20px;
  }
  .underline {
    text-decoration: underline;
  }
  .footer {
    background-color: ${props => props.theme.darkShades};
    padding: 3rem 1.5rem 3rem;
    .content {
      margin-top: 3rem;
      p {
        color: ${props => props.theme.lightShades} !important;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.2rem;
    }
  }
  a {
    color: #fff;
    :hover {
      color: #fff;
    }
  }
  img {
    margin-right: 6px;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    .column {
      width: 24%;
    }
  }
`;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column is-4">
            <ul>
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="KpDigital logo"
                  className="logoImage"
                />
              </Link>
              <Link to="" className="subtitle is-size-6 is-block mg">
                Get in touch
              </Link>
              <h4 className="subtitle is-size-6 is-block mb">
                Contact us at{' '}
                <a href="" className="underline">
                  hello@kpdigitalstrategy.com
                </a>
              </h4>
            </ul>
            <a target="_blank" href={config.facebook}>
              <img src="/images/team/twitter@2x.png" alt="twitter" />
            </a>
            <a target="_blank" href={config.instagram}>
              <img src="/images/team/facebook@2x.png" alt="facebook" />
            </a>
            <a target="_blank" href={config.twitter}>
              <img src="/images/team/instagram@2x.png" alt="instagram" />
            </a>
            <a target="_blank" href={config.linkedin}>
              <img src="/images/team/linkedin.png" alt="linkedin" />
            </a>
          </div>
          <div className="column is-3">
            <h4 className="title is-size-6">Services</h4>
            <ul>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/about">Branding design</Link>
                </li>
              </h4>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/news-updates">Digital marketing</Link>
                </li>
              </h4>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/news-updates">Website design & development</Link>
                </li>
              </h4>
            </ul>
          </div>
          <div className="column is-3">
            <h4 className="title is-size-6">Company</h4>
            <ul>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/faq">Meet the team</Link>
                </li>
              </h4>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/privacy-policy">About us</Link>
                </li>
              </h4>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/terms-and-conditions">Careers</Link>
                </li>
              </h4>
            </ul>
          </div>
          <div className="column is-3">
            <h4 className="title is-size-6">Legal</h4>
            <ul>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/business">Terms of use</Link>
                </li>
              </h4>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/partner">Privacy policy</Link>
                </li>
              </h4>
              <h4 className="subtitle is-size-6">
                <li>
                  <Link to="/partner">GDPR</Link>
                </li>
              </h4>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
