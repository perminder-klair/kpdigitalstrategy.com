import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .media {
    background-color: ${props => props.theme.backgroundColor};
    padding: 1.2rem;
    .media-left {
      min-width: 20%;
      align-items: center;
      justify-content: center;
      display: flex;
      height: 100%;
      margin-top: 2rem;
    }
  }
`;

const Icon = styled.i`
  font-size: 4rem;
  color: ${props => props.theme.mainBrandColor};
`;

const QualityItem = ({ title, text, icon }) => (
  <Container className="column is-half">
    <div className="media">
      <div className="media-left">
        <figure className="">
          <Icon
            className={icon}
            alt="the services icon"
            title="kpdigital strategy services icon"
          />
        </figure>
      </div>
      <div className="media-content">
        <h3 className="title size-3">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  </Container>
);

export default QualityItem;
