import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColorGrey};
  padding-bottom: 2px;
  .image {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

class BrandIdentityItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: this.props.icon
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: this.props.hovericon
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: this.props.icon
    });
  }

  render() {
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
        <p className="has-text-weight-semibold">{subtitle}</p>
      </Container>
    );
  }
}

export default BrandIdentityItem;
