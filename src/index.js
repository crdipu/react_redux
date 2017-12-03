import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as types from './constants/types';
import todoappreducer from './reducers/';
import TodoApp from './containers/TodoApp';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

const store = createStore(todoappreducer);

ReactDOM.render(
    <Provider store={store}> 
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);



