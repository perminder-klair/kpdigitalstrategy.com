import React from 'react';
import styled from 'styled-components';
import { Title } from './elements';
import AnswerModal from './AnswerModal';

const Container = styled.div`
  background-color: #1e2126;
  .Icon {
    font-size: 2rem;
    margin: 0rem 2rem;
    color: ${props => props.theme.SecondaryColor};
  }
`;
const TitleWrapper = styled.div`
  margin: 0rem 3rem;
`;
class CardQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { Questions } = this.props;

    return (
      <Container className="container">
        <div className="columns">
          <div className="column is-four-fifths">
            <TitleWrapper>
              <Title>{Questions}</Title>
            </TitleWrapper>
          </div>
          <div className="column">
            <a className="" onClick={this.toggleDiv}>
              <i className="Icon fas fa-chevron-circle-down is-pulled-right" />
            </a>
          </div>
        </div>
        {this.state.show && <AnswerModal />}
      </Container>
    );
  }
}

export default CardQuestions;
