import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as types from './constants/types';
import todoappreducer from './reducers/';
import TodoApp from './components/TodoApp';

const store = createStore(todoappreducer);

const render = () => {
    console.log(store.getState().todos);
    ReactDOM.render(
        <TodoApp store={store} todos={store.getState().todos}/>,
        document.getElementById("root")
    )
};

store.subscribe(render);
render();



