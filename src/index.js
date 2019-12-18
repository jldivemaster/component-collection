// Import React & ReactDOM dependencies
import React from 'react';
import  ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./App.css";
import Main from './Main';
import CommentCard from './components/CommentCard';
import BGTransform from './components/BGTransform';
import SeasonComponent from './components/SeasonComponent';
import PicsApp from './components/PicsApp';
import VideoApp from  './components/VideoApp';
import ReduxIndex from './reduxapp/ReduxIndex';
import BlogIndex from './reduxblogapp/BlogIndex';
import ContextApp from './contextapp/components/ContextApp';
import HooksApp from './components/HooksApp';
import PhotoGallery from './components/PhotoGallery';
import MapView from './components/MapView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Create a  React Component

const App = () => {

  return (
    <div>
    <BrowserRouter>
     <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/commentcards" component={CommentCard} />
        <Route path="/bgtransform" component={BGTransform} />
        <Route path="/seasondisplay" component={SeasonComponent} />
        <Route path="/pics" component={PicsApp} />
        <Route path="/gallery" component={PhotoGallery} />
        <Route path="/videos" component={VideoApp} />
        <Route path="/songs" component={ReduxIndex} />
        <Route path="/posts" component={BlogIndex} />
        <Route path="/context" component={ContextApp} />
        <Route path="/hooks" component={HooksApp} />
        <Route path="/map" component={MapView} />
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )
}

// Show  Component on screen
ReactDOM.render(<App />, document.querySelector('#root'))

serviceWorker.register();
