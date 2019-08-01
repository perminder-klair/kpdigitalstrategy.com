/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';

const Container = styled.div`
  .title {
    color: ${props => props.theme.primaryColor};
    margin-bottom: 0rem;
  }
  span {
    color: ${props => props.theme.SecondaryColor};
  }
  .content {
    padding: 8rem 0rem;
    @media screen and (max-width: 600px) {
      margin-left: 0rem;
      padding: 0rem 0rem;
    }
  }
  .columns {
    padding-bottom: 13rem;
  }
  .LeftBox {
    flex-direction: row;
    display: flex;
  }
  .description {
    margin-top: 4rem;
    color: ${props => props.theme.primaryColor};
  }
  .RotateBox {
    margin: 0rem -28rem;
    transform: rotate(-90deg);
    display: flex;
  }
  .icon {
    margin: 0rem 0.25rem;
    font-size: 23px;
    color: black;
    background-color: ${props => props.theme.SecondaryColor};
  }
  .IconBox {
    margin: 0rem 0.25rem;
  }
`;

const NewWebSite = () => (
  <Container className="has-background-black">
    <div className="columns">
      <div className="column is-1">
        <div className="RotateBox">
          <div className="IconBox">
            <i className="icon fab fa-facebook-square" />
            <i className="icon fab fa-twitter-square" />
            <i className="icon fab fa-instagram" />
          </div>
          <h3 className="has-text-white is-size-7 has-text-weight-medium">
            branding design marketing analytics WebSite developement
          </h3>
        </div>
      </div>
      <div className="column">
        <div className="content">
          <h1 className="title is-size-1 has-text-weight-bold">Thinking Of</h1>
          <Typing count={2}>
            <span className="is-capitalized is-size-1 has-text-weight-bold">
              A New WebSite?
            </span>
          </Typing>{' '}
          <div>
            <h4 className="description is-size-5 has-text-weight-bold">
              We align design, marketing and sales to make it easier than ever
              to reach new business heights.
            </h4>
          </div>
        </div>
      </div>
      <div className="column">Second column</div>
    </div>
  </Container>
);

export default NewWebSite;
