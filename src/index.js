/**
 * we need to disable complaining about the fact we are using
 * the file doesn't have default export
 */
/*eslint-disable import/default */

//styles
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/build/toastr.css';
//babel
import 'babel-polyfill';
//react
import React from 'react';
import { render } from 'react-dom';
//redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
//routes
import routes from './routes';
//action creators
import { loadCourses } from './store/actions/courseActions';
import { loadAuthors } from './store/actions/authorActions';

const store = configureStore();
store.dispatch( loadCourses() );
store.dispatch( loadAuthors() );

const onHandleError = (error) => {
    store.dispatch(addError(error.message));
}

window.React = React;
window.store = store;
window.addEventListener("error", onHandleError);

render(
  <Provider store={store}>
      {routes} 
  </Provider>,
  document.getElementById('app')
);