import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoappreducer from '../reducers/';
import {loadState, saveState} from './localStorage';

const configureStore = () => {
    const store = createStore(todoappreducer, loadState());
    
    store.subscribe(throttle(() => {
        saveState({todos:store.getState().todos});
    }, 1000));

    return store;
};

export default configureStore;


