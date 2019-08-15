import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  background-color: transparent;
  .navbar-burger {
    display: block;
    color: ${props => props.theme.primaryColor};
  }
  .navbar-start {
    background-color: red;
    justify-content: center;
    z-index: 400;
  }
  aside {
    margin-top: 52px;
    position: absolute;
    background-color: ${props => props.theme.SecondaryColor};
    margin-left: -81px;
    width: 165px;
  }
`;

export default class DesktopBurger extends React.Component {
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
          <a
            href="/"
            role="button"
            className={
              View
                ? 'navbar-burger is-active'
                : 'navbar-burger  is-hidden-touch'
            }
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
          <div className={View ? 'navbar-start ' : 'navbar-start is-hidden'}>
            <aside className="menu">
              <ul className="menu-list is-size-6">
                <Link to="/studies" className="navbar-item has-text-white">
                  studies
                </Link>
                <a href="/" className="navbar-item has-text-white">
                  about
                </a>
              </ul>
            </aside>
          </div>
        </div>
      </Container>
    );
  }
}
