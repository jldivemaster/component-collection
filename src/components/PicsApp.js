import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';

export default class PicsApp extends React.Component {
  state = {
    images: []
  }
//====== API call using axios, separating call function into separate file.

   onSearchSubmit = (term) => {
     unsplash.get('/search/photos', {
       params: { query: term }

     }).then((resp) => {
       this.setState({ images: [...resp.data.results] })
     })
   };

  onPicSearch = () => {
    // cloudinary.get().then((resp) => {
    //   this.setState({ images: [...resp.data.results] })
    // })
  };

   renderPage() {
     return (
       <div>
       {this.state.page}
       </div>
     )
   }

  render() {
    console.log(this.state)
    return(
      <div className="pics">
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
          <ImageList images={this.state.images} />
        </div>
      </div>
    )
  }
}


//
