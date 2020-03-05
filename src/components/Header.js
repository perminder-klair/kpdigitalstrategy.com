/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HamburgerMenu from 'react-hamburger-menu';

const Section = styled.section`
  padding: 1rem 0 0;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 1.5rem;
    }
  }
  .request {
    font-size: 13px;
    border-radius: 12px;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: 100;
  }
  .cont {
    font-size: 13px;
    border-radius: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 100;
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
  background-color: ${props => props.theme.backgroundColorLite};
  padding-top: 0.3rem;
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
  height: 110%;
  .list-item {
    font-size: 30px;
    padding-top: 1rem;
    border-bottom: none;
  }
  .contact {
    font-size: 30px;
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

  handleClick() {
    this.setState({
      open: !this.state.open,
      View: !this.state.View,
    });
  }

  render() {
    const { View } = this.state;
    return (
      <Section className="section">
        <div className="">
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
                    <Link
                      to="#"
                      className="button is-danger is-rounded request"
                    >
                      Request a quote
                    </Link>
                    <Link to="/contact" className="button is-rounded cont">
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
          <p className="has-text-weight-semibold has-text-black">
            Free Advice Hotline:
            <a className="has-text-black">+44 161 258 3622</a>
            <span>(From 8am to 5pm)</span>
          </p>
        </HeadDivider>
        <Dropdown className={View ? 'list has-text-centered' : 'is-hidden'}>
          <div className="list-item">
            <Link to="/OverView" className="has-text-white">
              Overview-Service
            </Link>
          </div>
          <div className="list-item">
            <Link to="/LandingPage" className="has-text-white">
              LandingPage
            </Link>
          </div>
          <div className="list-item">
            <Link to="/Quick" className="has-text-white">
              Quick
            </Link>
          </div>
          <div className="list-item">
            <Link to="/blogs" className="has-text-white">
              blogs
            </Link>
          </div>
          <div className="list-item">
            <Link to="/IndividualBlog" className="has-text-white">
              Individual-blog
            </Link>
          </div>
          <div className="list-item">
            <Link to="/AboutUs" className="has-text-white">
              About us
            </Link>
          </div>
          <div className="list-item">
            <Link to="/Thankyou" className="has-text-white">
              Thankyou Page
            </Link>
          </div>
          <div className="list-item">
            <Link to="/CaseStudies" className="has-text-white">
              Case-Studies
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
