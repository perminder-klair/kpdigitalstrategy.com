import React from 'react';
import styled from 'styled-components';

import { Subtitle } from './elements';

const Container = styled.div`
  background-color: ${props => props.theme.darkGrey};
  .subtitle {
    font-weight: 500 !important;
    font-size: 1rem !important;
    padding-bottom: 1rem;
  }
  .image {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

class MarketingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: this.props.icon,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: this.props.hovericon,
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: this.props.icon,
    });
  }

  render() {
    const { icon } = this.props;
    const { hovericon } = this.props;
    const { subtitle } = this.props;
    return (
      <Container className="has-text-centered">
        <figure className="image is-96x96">
          <img
            src={this.state.imgSrc}
            title="its a icon Brand Identity"
            alt="Avatar"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </figure>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    );
  }
}

export default MarketingCard;
