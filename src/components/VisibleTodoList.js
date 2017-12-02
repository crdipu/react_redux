import React from 'react';
import * as types from '../constants/types';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

export default class VisibleTodoList extends React.Component {
  componentDidMount() {
    const store = this.context.store;
    this.unSubscribe = store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  getVisibleTodos(
    todos,
    filter
    ){
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

  render() {
    const props = this.props;
    const store = this.context.store;
    const state = store.getState();
    return(
        <TodoList todos = {this.getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={(id) => {
                store.dispatch({
                type: types.TOGGLE_TODO,
                id: id
            });
        }}/>
    );
  }
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
};