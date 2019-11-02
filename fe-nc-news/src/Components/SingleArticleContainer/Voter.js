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
    // <button class="btn">
    //       <i class="fa fa-home"></i>
    //     </button>
    return (
      <section className="voter">
        <button
          className="voter-button fa fa-caret-up"
          id="voter-button"
          value="1"
          onClick={this.handleClick}
          disabled={voteChange === '1' || voteChange === '-1' ? true : false}
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
          disabled={voteChange === '-1' || voteChange === '1' ? true : false}
        ></button>
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
