import React from 'react';
import styled from 'styled-components';
import { Button, Title } from './elements';
import Image from '../../static/images/userimage.png';

const Container = styled.div`
  background-color: ${props => props.theme.SecondaryColor};
  display: flex;
  .image {
  }
`;
const ProcessCard = () => (
  <Container className="has-text-centered-mobile">
    <img src={Image} className="image" />
    <p className="Instrution">
      Dont't worry if you're a step or two ahead of us No where you are with
      your branding and marketing, we can tailor our services to your project.
    </p>
    <Button className="has-text-weight-semibold">learn more</Button>
  </Container>
);

export default ProcessCard;
