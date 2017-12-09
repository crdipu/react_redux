import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions/toggleTodo';
import * as types from '../constants/types';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers'
import {fetchTodos} from '../actions/fetchTodos';

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
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter);
    }

    render() {
        return (<TodoList {...this.props}/>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const filter = ownProps.match.params.filter || types.SHOW_ALL
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },
        fetchTodos: (filter) => {
            dispatch(fetchTodos(filter));
        }
    }
}

VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList));

export default VisibleTodoList;