import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './lib/configureStore';
import Root from './components/Root';
import {fetchTodos} from './lib/api';

fetchTodos('all').then(todos => {
    console.log(todos);
})

ReactDOM.render(
    <Root store={configureStore()}/>,
    document.getElementById("root")
);