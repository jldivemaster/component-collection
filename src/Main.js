import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {

  render(){
    return (
      <div className="ui container">
        <h2>React Components:</h2>
        <div className="wrapper">
          <span>
            <Link to='/commentcards'>
              Comment Cards with Accept/Reject Btns
            </Link>
          </span>

          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/bgtransform">
              Background transforms on Mouse Move
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/seasondisplay">
              Displaying Season based on User Location w/ Loading Spinner (geolocation)
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/pics">
              Display list of tiled pics (search bar, axios api call, Refs, grid css)
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/gallery">
              Photo Gallery from 'react-photo-gallery'
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/videos">
              Embedded Youtube Videos (Youtube API call w/ async syntax, ui styling)
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/songs">
              Display Songs List (Redux, ui styling)
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/posts">
              Display Blog Posts (Redux, axios call w/ Redux-Thunk)
            </Link>
          </span>
          <br />

        </div>

        <div className="wrapper">
          <span>
            <Link to="/context">
              Change language on form using Context system
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/hooks">
              Posts/Todos List with Hooks
            </Link>
          </span>
          <br />
        </div>
        <div className='lr_embed' style={{ position: 'relative', paddingBottom: '50%', height: '0', overflow: 'hidden' }}><iframe id='iframe' src='https://lightroom.adobe.com/embed/shares/af043268f38b48699ac4a8fa830936a8/slideshow?background_color=%232D2D2D&color=%23999999' frameBorder='0' style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} ></iframe></div>
        <div className="wrapper">
        <span>end</span>
        </div>
      </div>
    )
  }
}
