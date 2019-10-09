import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

// ===Call action creator here to make API call. =====
  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    return (
      <div>PostList</div>
    )
  };
}

export default connect(null, { fetchPosts })(PostList);
