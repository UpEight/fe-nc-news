import React from 'react';
import * as api from '../../api';

class Voter extends React.Component {
  state = {
    voteChange: 0,
    err: null
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <section className="voter">
        <button
          className="button button-upvote"
          value="1"
          onClick={this.handleClick}
          disabled={voteChange === '1' || voteChange === '-1' ? true : false}
        >
          Up-Vote
        </button>
        <p className="vote-text">
          {parseInt(votes) + parseInt(voteChange)} votes
        </p>
        <button
          className="button button-downvote"
          value="-1"
          onClick={this.handleClick}
          disabled={voteChange === '-1' || voteChange === '1' ? true : false}
        >
          Down-Vote
        </button>
      </section>
    );
  }

  handleClick = event => {
    const increment = event.target.value;
    const { articleType, commentType, postId } = this.props;
    this.setState({ voteChange: increment });
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
