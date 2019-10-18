import React from 'react';
import VideoSearchBar from './VideoSearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class VideoApp extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
   }

   componentDidMount() {
     this.onTermSubmit('Disturbed')
   };

  onTermSubmit = async term => {
      const response = await youtube.get('/search', {
        params: {
          q: term
        }
      })
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
       })
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  };

  render(){
    return(
      <div className="video">
      <div className="ui container">
        <VideoSearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}  />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect} />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
