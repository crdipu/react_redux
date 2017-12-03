import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as types from './constants/types';
import todoappreducer from './reducers/';
import TodoApp from './containers/TodoApp';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {loadState, saveState} from './lib/localStorage';
import throttle from 'lodash/throttle';

const store = createStore(todoappreducer, loadState());

store.subscribe(throttle(() => {
    saveState({todos:store.getState().todos});
}, 1000));

ReactDOM.render(
    <Provider store={store}> 
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);