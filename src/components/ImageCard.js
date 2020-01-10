import React from "react";

import styled from "styled-components";

const Container = styled.div``;

const ImageCard = props => (
  <Container className="column is-6">
    <img src={props.image} alt={props.alt} />
  </Container>
);

export default ImageCard;
