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
              Display list of tiles (search bar, axios api call, Refs, grid css)
            </Link>
          </span>
          <br />
        </div>

        <div className="wrapper">
          <span>
            <Link to="/videos">
              Display Youtube Video (Youtube API call w/ async syntax, ui styling)
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

        <div className="wrapper">
        <span>end</span>
        </div>
      </div>
    )
  }
}
