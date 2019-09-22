/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HamburgerMenu from 'react-hamburger-menu';

const Section = styled.section`
  padding: 1rem 0;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 2rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    flex-shrink: initial !important;

    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .BurgerMenu {
    margin: 1rem;
  }
`;

const HeadDivider = styled.div`
  background-color: ${props => props.theme.mainBrandColor};
  padding: 0.3rem 0;
  p {
    color: ${props => props.theme.backgroundColorLite};
    text-align: center;
    margin-bottom: 0;
  }
`;

const Dropdown = styled.div`
  background-color: rgba(255, 56, 96, 94%);
  position: absolute;
  z-index: 1;
  width: 100%;
  .list-item {
    padding-top: 1rem;
    border-bottom: none;
  }
  .contact {
    padding-left: 3rem;
    padding-right: 3rem;
    background: transparent;
    color: white;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      View: false,
    };
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const SmoothScroll = require('smooth-scroll');
      const scroll = new SmoothScroll('a[href*="#"]');
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
      View: !this.state.View,
    });
  }

  render() {
    const { isActive, View } = this.state;
    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/logo.png" alt="KpDigital logo" />
              </Link>
              <div className="BurgerMenu is-hidden-desktop">
                <HamburgerMenu
                  isOpen={this.state.open}
                  menuClicked={this.handleClick.bind(this)}
                  width={26}
                  height={20}
                  strokeWidth={1}
                  rotate={0}
                  color="#FFFFFF"
                  borderRadius={0}
                  animationDuration={0.6}
                />
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons is-hidden-mobile">
                    <Link to="/blog" className="button is-danger is-rounded">
                      Get an instant quote
                    </Link>
                    <Link to="/contact" className="button is-rounded">
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="BurgerMenu">
                  <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={26}
                    height={20}
                    strokeWidth={1}
                    rotate={0}
                    color="#FFFFFF"
                    borderRadius={0}
                    animationDuration={0.6}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <HeadDivider>
          <p className="has-text-weight-semibold">
            Free Advice Hotline:
            <a className="has-text-white">+44 161 258 3622</a>
            <span>(From 8am to 5pm)</span>
          </p>
        </HeadDivider>
        <Dropdown className={View ? 'list has-text-centered' : 'is-hidden'}>
          <div className="list-item">
            <Link to="/blog" className="has-text-white">
              Case Studies
            </Link>
          </div>
          <div className="list-item">
            <Link to="/blog" className="has-text-white">
              Services
            </Link>
          </div>
          <div className="list-item">
            <Link to="/blog" className="has-text-white">
              Advice Center
            </Link>
          </div>
          <div className="list-item">
            <Link to="/blog" className="has-text-white">
              About us
            </Link>
          </div>
          <div className="list-item">
            <Link
              to="/contact"
              className="button is-rounded is-outlined has-text-weight-semibold contact"
            >
              Contact
            </Link>
          </div>
        </Dropdown>
      </Section>
    );
  }
}
