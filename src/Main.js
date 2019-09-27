import React from 'react';
import CommentCard from './components/CommentCard';
import BGTransform from './components/BGTransform';
import SeasonDisplay from './components/SeasonDisplay'

export default class Main extends React.Component {

  render(){
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

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
        <span>Displaying Season based on User Location</span>
        <br />
        <div className="season">
        <SeasonDisplay />
        </div>
      </div>
    )
  }
}
