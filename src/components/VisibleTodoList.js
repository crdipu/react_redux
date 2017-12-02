import React from 'react';
import * as types from '../constants/types';
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
                dispatch({
                type: types.TOGGLE_TODO,
                id: id
            });
        }
    }
}

export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);