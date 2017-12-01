import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as types from './constants/types';
import todoappreducer from './reducers/';
import TodoApp from './components/TodoApp';

const store = createStore(todoappreducer);

ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById("root")
);



