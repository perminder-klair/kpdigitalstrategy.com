/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  background-color: transparent;
  .navbar-burger {
    display: block;
    color: ${props => props.theme.primaryColor};
  }
  .navbar-start {
    background-color: transparent;
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
            role="button"
            className={
              View
                ? 'navbar-burger is-active'
                : 'navbar-burger  is-hidden-touch'
            }
            aria-label="menu"
            aria-expanded="false"
            onClick={() => this.Menu()}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={View ? 'navbar-menu is-active' : 'navbar-menu '}>
          <div className="navbar-start is-hidden">
            <a className="navbar-item has-text-white">Home</a>
            <a className="navbar-item has-text-white">About</a>
          </div>
        </div>
      </Container>
    );
  }
}
