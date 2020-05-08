/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import config from '../utils/config';

const Section = styled.section`
background-color: ${props => props.theme.darkShades};
.logoImage {
    width: 18rem;
    margin-bottom: 2rem;
}
  }
  .title {
    margin-bottom: 1rem;
  }
  .is-block {
    padding-bottom: 1rem;
  }
  .underline {
    text-decoration: underline;
  }
  .icon{
    margin-right: 6px;
  }
  a{
    color: inherit;
  }
`;
const Footer = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <ul>
            <li>
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="KpDigital logo"
                  className="logoImage"
                />
              </Link>
            </li>
            <li>
              <Link to="" className="subtitle is-size-6 is-block">
                Get in touch
              </Link>
            </li>
            <li>
              <div className="subtitle is-size-6 is-block ">
                Contact us at{' '}
                <a href="" className="underline has-text-white">
                  hello@kpdigitalstrategy.com
                </a>
              </div>
            </li>
          </ul>
          <a target="_blank" href={config.facebook}>
            <img
              src="/images/team/twitter@2x.png"
              alt="twitter"
              className="icon"
            />
          </a>
          <a target="_blank" href={config.instagram}>
            <img
              src="/images/team/facebook@2x.png"
              alt="facebook"
              className="icon"
            />
          </a>
          <a target="_blank" href={config.twitter}>
            <img
              src="/images/team/instagram@2x.png"
              alt="instagram"
              className="icon"
            />
          </a>
          <a target="_blank" href={config.linkedin}>
            <img
              src="/images/team/linkedin.png"
              alt="linkedin"
              className="icon"
            />
          </a>
        </div>
        <div className="column is-3">
          <h1 className="title is-size-6">Services</h1>
          <ul>
            <li>
              <Link
                to="/service/branding"
                className="subtitle is-size-6 is-block"
              >
                Branding design
              </Link>
            </li>
            <li>
              <Link
                to="/service/marketing"
                className="subtitle is-size-6 is-block"
              >
                Digital marketing
              </Link>
            </li>
            <li>
              <Link
                to="/service/websites"
                className="subtitle is-size-6 is-block"
              >
                Website design & development
              </Link>
            </li>
          </ul>
        </div>
        <div className="column is-3">
          <h4 className="title is-size-6">Company</h4>
          <ul>
            <li>
              <Link to="/about" className="subtitle is-size-6 is-block">
                Meet the team
              </Link>
            </li>
            <li>
              <Link to="/about" className="subtitle is-size-6 is-block">
                About us
              </Link>
            </li>
            <li>
              <Link to="" className="subtitle is-size-6 is-block">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="column is-2">
          <h4 className="title is-size-6">Legal</h4>
          <ul>
            <li>
              <Link to="/generic" className="subtitle is-size-6 is-block">
                Terms of use
              </Link>
            </li>
            <li>
              <Link to="/generic" className="subtitle is-size-6 is-block">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/generic" className="subtitle is-size-6 is-block">
                GDPR
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);
export default Footer;
