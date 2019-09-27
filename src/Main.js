import React from 'react';
import CommentCard from './components/CommentCard';
import BGTransform from './components/BGTransform';
import SeasonComponent from './components/SeasonComponent'

export default class Main extends React.Component {

  render(){
    return (
      <div>
        <span>Comment Cards with Accept/Reject Btns</span>
        <CommentCard />
        <br />
        <span>BG transforms on Mouse Move</span>
        <br />
        <div className="bg">
        <BGTransform />
        </div>
        <span>Displaying Season based on User Location w/ Loading Spinner (geolocation)</span>
        <br />
        <div className="season">
        <SeasonComponent />
        </div>
      </div>
    )
  }
}
