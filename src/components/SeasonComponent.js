import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export default class SeasonComponent extends React.Component {
state = {
      lat: null,
      long: null,
      errorMsg: ''
    };


  componentDidMount()  {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      },
      err => {
        this.setState({
          errorMsg: err.message
        })
      }
    );
  }

  // ======More error handling for geolocation ==========
  // switch(error.code) {
  //       case error.PERMISSION_DENIED:
  //           return "User denied the request for Geolocation."
  //           break;
  //       case error.POSITION_UNAVAILABLE:
  //           return "Location information is unavailable."
  //           break;
  //       case error.TIMEOUT:
  //           return "The request to get user location timed out."
  //           break;
  //       case error.UNKNOWN_ERROR:
  //           return "An unknown error occurred."
  //           break;
  //   }

  renderContent = () => {
    if(this.state.errorMsg && !this.state.lat){
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if(!this.state.errorMsg && this.state.lat){
      return (<div>
          <h3>Lat: {this.state.lat}</h3>
          <h3>Long: {this.state.long}</h3>
          <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        </div>
      )
    }

    return <Spinner message="Please accept location request" />
  }

  render(){
    return (
      <div className="bordered">
        {this.renderContent()}
      </div>
    )
  }
}
