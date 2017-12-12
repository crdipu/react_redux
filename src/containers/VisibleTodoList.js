import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions/toggleTodo';
import * as types from '../constants/types';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers';
import {getIsFetching} from '../reducers';
import {fetchTodos} from '../actions/fetchTodos';
import {requestTodos} from '../actions/requestTodos';

class VisibleTodoList extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos, requestTodos } = this.props;
        requestTodos(filter);
        fetchTodos(filter);
    }

    render() {
        const { isFetching, onTodoClick, todos } = this.props;
        if (isFetching && !todos.length) {
          return <p>Loading...</p>;
        }
        return (<TodoList 
            todos={todos} 
            onTodoClick={onTodoClick}
            />);
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || types.SHOW_ALL
    return {
        todos: getVisibleTodos(state, filter),
        filter,
        isFetching: getIsFetching(state, filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        fetchTodos: (filter) => {
            dispatch(fetchTodos(filter));
        },
        requestTodos:(filter) => {
            dispatch(requestTodos(filter));
        }
    }
}

VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList));

export default VisibleTodoList;