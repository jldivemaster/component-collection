import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {

  render() {
    return(
      <div>SongList</div>
    )
  };
}

// === This will show up as props within the component.====
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
