import { createStore, applyMiddleware } from 'redux';   
import logger from 'redux-logger';
import promise from 'redux-promise';
import throttle from 'lodash/throttle';
import todoappreducer from '../reducers/';

const configureStore = () => {
    const middlewares = [promise];
    middlewares.push(logger);
    
  
    return createStore(
      todoappreducer,
      applyMiddleware(...middlewares)
    );
  };

export default configureStore;


