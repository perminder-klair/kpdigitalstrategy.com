import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import DesktopBurger from './DesktopBurger';
import Logo from '../../static/images/logokp.png';

const Container = styled.nav`
  background-color: ${props => props.theme.BlackBis};
  padding: 1rem 0rem;
  @media screen and (max-width: 600px) {
    padding: 0rem 0rem;
  }
  .button {
    background-color: transparent;
    border-radius: 0px;
    margin-right: 0.9rem !important;
    padding: 1rem 2rem;
    @media screen and (max-width: 600px) {
      background-color: transparent;
      color: white !important;
    }
  }
  .navbar-item img {
    max-height: 2.75rem;
    @media screen and (max-width: 600px) {
      max-height: 2.1rem;
    }
  }
  .navbar-burger {
    padding-top: 1rem;
  }
  span {
    width: 25px;
    height: 3px;
    position: initial;
    margin: 5px 1px;
    left: calc(12% - 11px);
  }
  .navbar-burger.is-active span:nth-child(3) {
    -webkit-transform: translateY(-11px) rotate(-45deg);
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      background-color: #ec333d;
      position: absolute;
      width: 100%;
      height: auto;
      transition: 0.7s;
    }
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      View: false,
    };
  }

  Menu() {
    const { View } = this.state;
    this.setState({
      View: !View,
    });
  }

  render() {
    const { View } = this.state;
    return (
      <Container
        className="navbar"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src={Logo}
              alt="kpdigital strategy logo"
              title="kpdigital strategy group icon"
            />
          </a>
          <a
            href="#"
            role="button"
            className={View ? 'navbar-burger is-active' : 'navbar-burger'}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => this.Menu()}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={View ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start is-hidden-desktop">
            <Link to="/studies" className="navbar-item has-text-white">
              studies
            </Link>
            <a href="/" className="navbar-item has-text-white">
              About
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons ">
                <a
                  href="/"
                  className="button has-text-white has-text-weight-medium is-size-7">
                  Get an instant quote
                </a>
                <a
                  href="/"
                  className="button has-text-white has-text-weight-medium is-size-7">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <DesktopBurger />
      </Container>
    );
  }
}
