import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions/toggleTodo';
import * as types from '../constants/types';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers'
import {fetchTodos} from '../lib/api';

class VisibleTodoList extends React.Component {

    componentDidMount() {
        fetchTodos(this.props.filter).then(todos => {
            console.log(this.props.filter, todos);
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then(todos => {
                console.log(this.props.filter, todos);
            }); 
        }
    }

    render() {
        return <TodoList {...this.props} />
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
        }
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodo}
)(VisibleTodoList));

export default VisibleTodoList;