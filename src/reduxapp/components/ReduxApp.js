import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { selectSong } from '../actions';

const ReduxApp = () => {
  return (
    <div>
      <SongList />
      <SongDetail />
    </div>
)}

export default ReduxApp;
