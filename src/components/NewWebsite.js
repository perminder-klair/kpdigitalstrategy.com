import React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';
import { Button } from './elements';

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
    @media screen and (max-width: 600px) {
      margin: 2rem 0rem;
      height: 23rem;
      width: 19rem;
    }
  }
  .RotateText {
    transform: rotate(-90deg);
    font-size: 11px;
    margin: 3.75rem -7rem;
    display: flex;
  }
  .ContantText {
    background-color: ${props => props.theme.SecondaryColor};
    padding: 0.25rem 1.25rem;
    height: auto;
  }
  .View {
    padding: 0.25rem 3rem;
    margin-top: 1rem;
  }
  .para {
    padding: 0.25rem 3rem;
    font-size: 16px;
  }
  .RightColumn {
    align-self: flex-end;
  }
  h3 {
    font-size: 16px;
  }
`;
const ButtonWrapper = styled.div`
  margin: 1rem 3rem;
`;
const TypingWrapper = styled(Typing)`
  margin-top: -1.2rem;
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
          <TypingWrapper count={2}>
            <span className="is-capitalized is-size-1 has-text-weight-bold">
              A New WebSite?
            </span>
          </TypingWrapper>
          <div>
            <p className="description is-size-6 has-text-weight-bold">
              We align design, marketing and sales to make it easier than ever
              to reach new business heights.
            </p>
          </div>
        </div>
      </div>
      <div className="column RightColumn">
        <div className="ContantBox">
          <div className="ContantText">
            <h5 className="RotateText has-text-white has-text-weight-bold is-uppercase">
              epic risk managemant rebrand
            </h5>
          </div>
          <div className="Latetstudy has-background-white is">
            <h2 className="View has-text-black is-size-5 has-text-weight-bold">
              View Our Latest case study
            </h2>
            <p className="para has-text-black has-text-weight-normal">
              Porjects exption able content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to
            </p>
            <ButtonWrapper>
              <Button borderRed className="has-text-black has-text-weight-bold">
                read more
              </Button>
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default NewWebSite;
