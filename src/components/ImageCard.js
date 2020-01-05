import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ImageCard = props => (
  <Container>
    <div className="column is-half">
      <img src={props.image} alt={props.alt} />
    </div>
  </Container>
);

export default ImageCard;
