import React from 'react';
import styled from 'styled-components';

import {
  FacebookShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from 'react-share';

const Container = styled.div`
  .icon {
    margin-left: 1.25rem;
    margin-top: 1rem;
  }
`;

const Share = ({ url, quote }) => (
  <Container>
    <p className="subtitle is-6 has-text-centered">Share:</p>
    <span className="icon is-block-desktop is-size-3 has-text-danger is-inline-mobile">
      <i className="fab fa-instagram " />
    </span>
    <span className="icon is-block-desktop is-size-3 has-text-danger is-inline-mobile">
      <FacebookShareButton url={url} quote={quote} hashtag="kp-digital">
        <i className="fab fa-facebook-square" />
      </FacebookShareButton>
    </span>
    <span className="icon is-block-desktop is-size-3 has-text-danger is-inline-mobile">
      <WhatsappShareButton url={url} quote={quote} hashtag="kp-digital">
        <i className="fab fa-whatsapp-square" />
      </WhatsappShareButton>
    </span>
    <span className="icon is-block-desktop is-size-3 has-text-danger is-inline-mobile">
      <PinterestShareButton url={url} quote={quote} hashtag="kp-digital">
        <i className="fab fa-pinterest-square" />
      </PinterestShareButton>
    </span>
  </Container>
);

export default Share;
