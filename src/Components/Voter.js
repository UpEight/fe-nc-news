import React from 'react';
import * as api from '../api';

class Voter extends React.Component {
  state = {
    voteChange: 0,
    err: null
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <section className="voter">
        <button
          className="voter-button fa fa-caret-up"
          id="voter-button"
          value="1"
          onClick={this.handleClick}
          disabled={voteChange === 1 ? true : false}
          aria-hidden="true"
        ></button>
        <p className="vote-text" id="vote-text">
          {parseInt(votes) + parseInt(voteChange)}
        </p>
        <button
          className="voter-button fa fa-caret-down"
          id="voter-button"
          value="-1"
          onClick={this.handleClick}
          disabled={voteChange === -1 ? true : false}
        ></button>
      </section>
    );
  }

  handleClick = event => {
    const increment = event.target.value;
    this.updateVoteChange(increment);
    this.updateApiVoteTotal(increment);
  };

  updateVoteChange = increment => {
    this.setState(currentState => {
      return {
        voteChange: parseInt(currentState.voteChange) + parseInt(increment)
      };
    });
  };

  updateApiVoteTotal = increment => {
    const { articleType, commentType, postId } = this.props;
    let postType = '';
    articleType ? (postType = articleType) : (postType = commentType);
    api
      .changeVotesTotal(postType, postId, increment)
      .catch(err => this.setState({ voteChange: 0 }));
  };
}

export default Voter;
