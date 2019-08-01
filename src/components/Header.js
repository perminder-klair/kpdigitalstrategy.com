/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .button {
    background-color: transparent;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Container
        className="navbar has-background-grey"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger is-active"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start" />

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button has-text-white has-text-weight-normal">
                  get an instant quote
                </a>
                <a className="button has-text-white has-text-weight-normal">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
