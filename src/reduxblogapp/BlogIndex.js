import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import BlogApp from './components/BlogApp';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk))

const BlogIndex = () => {
  return (
    <div className="blog">
      <Provider store={store}>
        <BlogApp />
      </Provider>
    </div>
  )
};

export default BlogIndex;
