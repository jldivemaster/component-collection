import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Unforgiven 2', duration: '5:30' },
    { title: 'Stricken', duration: '3:45' },
    { title: 'So Cold', duration: '4:15' },
    { title: 'What Ive Done', duration: '3:50' },
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
