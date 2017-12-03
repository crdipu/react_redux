import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions/toggleTodo';
import * as types from '../constants/types';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers'


const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(
            state,
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
    {onTodoClick: toggleTodo}
)(TodoList));