import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './lib/configureStore';
import Root from './components/Root';

ReactDOM.render(
    <Root store={configureStore()}/>,
    document.getElementById("root")
);