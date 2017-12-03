import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoApp from '../containers/TodoApp';


const Root = (props) => {
    return (
        <Provider store={props.store}> 
            <Router>
                <Route path='/' component={TodoApp} />
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;