// external modules
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer'

const reducers = combineReducers({
  //changeMe: (state = null, action) => state
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

function mapReduxStateToProps(reduxState) {
  return {
    flat: reduxState.flats
  };
}

// render an instance of the component in the DOM
const root = document.getElementById('root')
createRoot(root).render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
