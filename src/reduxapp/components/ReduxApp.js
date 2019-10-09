import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { selectSong } from '../actions';

const ReduxApp = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
          <SongDetail />
        </div>
      </div>
    </div>
)}

export default ReduxApp;
