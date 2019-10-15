import React from 'react';
import CommentCard from './components/CommentCard';
import BGTransform from './components/BGTransform';
import SeasonComponent from './components/SeasonComponent';
import PicsApp from './components/PicsApp';
import VideoApp from  './components/VideoApp';
import ReduxIndex from './reduxapp/ReduxIndex';
import BlogIndex from './reduxblogapp/BlogIndex';
import ContextApp from './contextapp/components/ContextApp';

export default class Main extends React.Component {

  render(){
    return (
      <div>
        <div className="wrapper">
          <span>Comment Cards with Accept/Reject Btns</span>
            <CommentCard />
          <br />
        </div>
        <div className="wrapper">
          <span>BG transforms on Mouse Move</span>
          <br />
          <div className="bg">
            <BGTransform />
          </div>
        </div>
        <div className="wrapper">
          <span>Displaying Season based on User Location w/ Loading Spinner (geolocation)</span>
          <br />
          <div className="season">
            <SeasonComponent />
          </div>
        </div>
        <div className="wrapper">
          <span>Display list of tiles (search bar, axios api call, Refs, grid css) </span>
          <br />
          <div className="pics">
            <PicsApp />
          </div>
        </div>
        <div className="wrapper">
          <span>Display Youtube Video (Youtube API call w/ async syntax, ui styling) </span>
          <br />
          <div className="video">
            <VideoApp />
          </div>
        </div>
        <div className="wrapper">
          <span>Display Songs List (Redux, ui styling) </span>
          <br />
          <div className="songs">
            <ReduxIndex />
          </div>
        </div>
        <div className="wrapper">
          <span>Display Blog Posts (Redux, axios call w/ Redux-Thunk) </span>
          <br />
          <div className="blog">
            <BlogIndex />
          </div>
        </div>
        <div className="wrapper">
          <span>Change language on form using Context system </span>
          <br />
          <div className="context">
            <ContextApp />
          </div>
        </div>
        <div className="wrapper">
        <span>end</span>
        </div>
      </div>
    )
  }
}
