import React from 'react';
import {Provider} from 'react-redux';
import TodoApp from '../containers/TodoApp';


const Root = (props) => {
    return (
        <Provider store={props.store}> 
            <TodoApp />
        </Provider>
    );
}

export default Root;