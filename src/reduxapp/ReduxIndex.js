import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxApp from './components/ReduxApp';
import reducers from './reducers';


// === Usually the index.js file that calls ReactDOM.render =====
const ReduxIndex = () => {
  return (
    <div className="songs">
      <Provider store={createStore(reducers)}>
        <ReduxApp />
      </Provider>
    </div>
)};

export default ReduxIndex;
