import React from 'react';
import { Map, GoogleApiWrapper, Marker, MarkerWithLabel } from 'google-maps-react';
import APIKey from '../api/GoogleMap';


class MapView extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        lat: null,
        long: null,
        accuracy: null,
        timestamp: null,
        errorMsg: '',
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    };

    // displayMarkers = () => {
    //   return this.state.stores.map((store, index) => {
    //     return <Marker key={index} id={index} position={{
    //      lat: store.latitude,
    //      lng: store.longitude
    //    }}
    //    onClick={() => console.log("You clicked me!")} />
    //   })
    // };


  componentDidMount()  {
    window.navigator.geolocation.getCurrentPosition(
      position => {
      console.log(position)
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        })
      },
      err => {
        this.setState({
          errorMsg: err.message
        })
      }
    )
  };

  showInMap = () => {
    let latlon = this.state.lat + "," + this.state.long;
    console.log(latlon);
    let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&sensor=false&key=${APIKey}`;
    return <img src={img_url}></img>;
  };

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
      return (
        <div>
          <h3>Lat: {this.state.lat}</h3>
          <h3>Long: {this.state.long}</h3>
          <h3>Accurate within: {this.state.accuracy} meters</h3>
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.state.lat, lng: this.state.long}}
          >
            <Marker position={{ lat: this.state.lat, lng: this.state.long}} />

          </Map>

        </div>
      )
    }
  };

  render(){
    console.log(this.state)
    return (
      <div className="bordered">
        {this.renderContent()}
      </div>
    )
  };

}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCrqrvkBfmjEgOAtXvbhLgz9Fy20UrwwZE'
})(MapView);
