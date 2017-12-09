import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoappreducer from '../reducers/';

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch
    if(!console.group) {
        return rawDispatch;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c Prev state', 'color:gray', store.getState());
        console.log('%c Action', 'color:blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c Next state', 'color:green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}

const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    return (action) => {
      if (typeof action.then === 'function') {
        return action.then(rawDispatch);
      }
      return rawDispatch(action);
    };
};
const configureStore = () => {
    const store = createStore(todoappreducer);
    store.dispatch = addLoggingToDispatch(store);
    store.dispatch = addPromiseSupportToDispatch(store);
    return store;
};

export default configureStore;


