import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoappreducer from '../reducers/';

const logger = (store) => {
    return (next) => {
        if(!console.group) {
            return next;
        }
        return (action) => {
            console.group(action.type);
            console.log('%c Prev state', 'color:gray', store.getState());
            console.log('%c Action', 'color:blue', action);
            const returnValue = next(action);
            console.log('%c Next state', 'color:green', store.getState());
            console.groupEnd(action.type);
            return returnValue;
        }
    }
}

const promise = (store) => {
    return (next) => {
        return (action) => {
        if (typeof action.then === 'function') {
            return action.then(next);
        }
        return next(action);
        };
    }
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware =>
        store.dispatch = middleware(store)(store.dispatch)
    );
}
const configureStore = () => {
    const store = createStore(todoappreducer);
    const middlewares = [promise];
    middlewares.push(logger);
    wrapDispatchWithMiddlewares(store, middlewares);
    return store;
};

export default configureStore;


