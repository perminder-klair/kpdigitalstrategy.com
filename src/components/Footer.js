import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import config from '../utils/config';

const Section = styled.section`
  color: ${props => props.theme.lightShades} !important;
  .title {
    color: ${props => props.theme.lightShades} !important;
  }
  .footer {
    background-color: ${props => props.theme.backgroundColor};
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
`;

const Icons = styled.div`
  .icon {
    color: ${props => props.theme.lightShades} !important;
    font-size: 1.7rem;
    margin-left: 10px;
  }
`;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4">CREATIVE & DESIGN</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/news-updates">News & Updates</Link>
              </li>
              <li>
                <a
                  href="https://packrs.freshdesk.com/support/tickets/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://packrs-334.freshstatus.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Stats
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">MARKETING STRATERGY</h4>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">WEB DESIGN</h4>
            <ul>
              <li>
                <a
                  href="https://perminderklair.freshteam.com/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link to="/business">Apply as Business</Link>
              </li>
              <li>
                <Link to="/partner">Apply as Rider</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="columns">
            <div className="column">
              <p>
                © 2019{' '}
                <a href="https://www.kpdigitalstrategy.com/">
                  KP Digital Strategy
                </a>
              </p>
            </div>
            <div className="column">
              <Icons className="has-text-right">
                <a
                  target="_blank"
                  href={config.facebook}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-facebook-square" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href={config.instagram}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-instagram" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href={config.twitter}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-twitter-square" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href={config.linkedin}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-linkedin" />
                  </span>
                </a>
              </Icons>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
