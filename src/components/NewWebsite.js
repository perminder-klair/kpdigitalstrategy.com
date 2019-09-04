import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

const Container = styled.section`
  background-color: ${props => props.theme.BlackBis};
  margin-bottom: 3rem;
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
  .description {
    margin-top: 4rem;
    padding-right: 13rem;
    color: ${props => props.theme.primaryColor};
    @media screen and (max-width: 600px) {
      margin-top: 0rem;
      padding-right: 0rem;
    }
  }
  .RotateBox {
    margin: 0rem -28rem;
    transform: rotate(-90deg);
    display: flex;
    @media screen and (max-width: 600px) {
      margin: 0rem 0rem;
      transform: rotate(0deg);
    }
  }
  .icon {
    margin: 0rem 0.25rem;
    font-size: 23px;
    color: ${props => props.theme.SecondaryColor};
    background-color: transparent;
    transform: rotate(90deg);
    @media only screen and (max-width: 600px) {
      transform: rotate(0deg);
    }
  }
  .IconBox {
    margin: 0rem 0.25rem;
    display: flex;
  }
  .ContantBox {
    display: flex;
    width: 72%;
    margin: 1rem 7rem;
  }
  .RotateText {
    transform: rotate(-90deg);
    font-size: 14px;
    margin: 1rem -7rem;
    @media only screen and (max-width: 600px) {
      margin: 0rem 0rem;
      transform: rotate(0deg);
    }
  }
  .View {
    padding: 0.25rem 3rem;
    margin-top: 1rem;
  }
  .para {
    padding: 0.25rem 3rem;
    font-size: 1rem;
  }
  .RightColumn {
    align-self: flex-end;
  }
  h3 {
    font-size: 1rem;
  }
  .Latetstudy {
    padding: 2rem;
  }
`;

const TypingWrapper = styled(ReactTypingEffect)`
  margin-top: -1.2rem;
  color: ${props => props.theme.SecondaryColor};
`;

const NewWebSite = () => (
  <Container className="has-background-black section">
    <div className="columns">
      <div className="column is-1">
        <div className="RotateBox">
          <div className="IconBox">
            <i className="icon fab fa-facebook-square" />
            <i className="icon fab fa-instagram" />
            <i className="icon fab fab fa-linkedin" />
          </div>
          <h3 className="has-text-white has-text-weight-medium">
            branding design marketing analytics WebSite developement
          </h3>
        </div>
      </div>
      <div className="column">
        <div className="content">
          <h1 className="title is-size-1 has-text-weight-bold">Thinking Of</h1>
          <TypingWrapper
            className="is-capitalized is-size-1 has-text-weight-bold"
            speed="300ms"
            text={[
              'A New WebSite?',
              'A Rebrand?',
              'A Marketing Strategy',
              'A Logo Design',
            ]}
          />
          <div>
            <p className="description is-size-6 has-text-weight-bold">
              We align design, marketing and sales to make it easier <br />
              than ever to reach new business heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default NewWebSite;
