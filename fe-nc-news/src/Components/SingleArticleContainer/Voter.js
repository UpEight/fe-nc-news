import React from 'react';
import * as api from '../../api';

class Voter extends React.Component {
  state = {
    voteChange: 0,
    err: null,
    currentVoteTotal: this.props.votes
  };

  render() {
    const { voteChange, currentVoteTotal } = this.state;
    return (
      <section className="voter">
        <button
          className="voter-button fa fa-caret-up"
          id="voter-button"
          value="1"
          onClick={this.handleClick}
          disabled={voteChange === '1' ? true : false}
          aria-hidden="true"
        ></button>
        <p className="vote-text" id="vote-text">
          {currentVoteTotal}
        </p>
        <button
          className="voter-button fa fa-caret-down"
          id="voter-button"
          value="-1"
          onClick={this.handleClick}
          disabled={voteChange === '-1' ? true : false}
        ></button>
      </section>
    );
  }

  handleClick = event => {
    const increment = event.target.value;
    this.updateCurrentVoteTotal(increment);
    this.updateApiVoteTotal(increment);
  };

  updateCurrentVoteTotal = increment => {
    let currVotes = this.state.currentVoteTotal;
    currVotes = this.state.currentVoteTotal + parseInt(increment);
    this.setState({
      voteChange: increment,
      currentVoteTotal: currVotes
    });
  };

  updateApiVoteTotal = increment => {
    const { articleType, commentType, postId } = this.props;
    let postType = '';
    if (articleType) {
      postType = articleType;
    } else {
      postType = commentType;
    }
    api
      .changeVotesTotal(postType, postId, increment)
      .catch(err => this.setState({ voteChange: 0 }));
  };
}

export default Voter;
