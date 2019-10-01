import React from 'react';
import CommentCard from './components/CommentCard';
import BGTransform from './components/BGTransform';
import SeasonComponent from './components/SeasonComponent';
import PicsApp from './components/PicsApp';

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
        <div>end
        </div>
      </div>
    )
  }
}
