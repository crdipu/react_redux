import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions/toggleTodo';
import * as types from '../constants/types';
import TodoList from '../components/TodoList';

function getVisibleTodos( todos, filter ) {
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
        default:
            return todos;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            ownProps.match.params.filter || types.SHOW_ALL
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
                dispatch(toggleTodo(id));
        }
    }
}

export const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));