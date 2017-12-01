import React from 'react';
import * as types from '../constants/types';
import TodoList from './TodoList';

export default class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unSubscribe = this.props.store.subscribe(()=>{
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
    const state = props.store.getState();
    return(
        <TodoList todos = {this.getVisibleTodos(state.todos, state.visibilityFilter)} onTodoClick={(id) => {
                props.store.dispatch({
                type: types.TOGGLE_TODO,
                id: id
            });
        }}/>
    );
  }
}