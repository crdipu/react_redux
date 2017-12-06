import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions/toggleTodo';
import * as types from '../constants/types';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers'
import {fetchTodos} from '../lib/api';
import {receiveTodos} from '../actions/receiveTodos';

class VisibleTodoList extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            this.fetchData();        
        }
    }
    
    fetchData() {
        const {filter, receiveTodos} = this.props;
        fetchTodos(filter).then(todos => {
            receiveTodos(filter, todos);
        }); 
    }

    render() {
        return (<TodoList {...this.props} />);
    }
}


const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || types.SHOW_ALL
    return {
        todos: getVisibleTodos(
            state,
            filter
            ),
        filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
                dispatch(toggleTodo(id));
        },
        receiveTodos: (filter, response) => {
            dispatch(receiveTodos(filter, response));
        }
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList));

export default VisibleTodoList;