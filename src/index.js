import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as types from './constants/types';
import todoappreducer from './reducers/';
import TodoApp from './components/TodoApp';
import PropTypes from 'prop-types';

const store = createStore(todoappreducer);

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: PropTypes.object
};

ReactDOM.render(
    <Provider store={store}> 
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);



