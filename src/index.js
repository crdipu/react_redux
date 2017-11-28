import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as types from './constants/types';
import todoappreducer from './reducers/';
import TodoApp from './components/TodoApp';

const store = createStore(todoappreducer);
const getVisibleTodos = (
    todos,
    filter
) => {
    switch(filter) {
        case types.SHOW_ALL:
            return todos;
            break;
        case types.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
            break;
        case types.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
            break;
    }
}
const render = () => {
    console.log(store.getState());
    ReactDOM.render(
        <TodoApp store={store} todos={getVisibleTodos(
            store.getState().todos, 
            store.getState().visibilityFilter
        )}/>,
        document.getElementById("root")
    )
};

store.subscribe(render);
render();



