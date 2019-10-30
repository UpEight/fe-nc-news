import React from 'react';

class Voter extends React.Component {
  render() {
    const { votes } = this.props;
    return <p className="voter">{votes} votes</p>;
  }
}

export default Voter;
