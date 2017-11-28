import React from 'react';
import * as types from '../constants/types';
import FilterLink from './FilterLink';
import TodoList from './TodoList';

let nextTodoId = 0;
export default class TodoApp extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <input ref={node => {this.input = node}} />
        <button onClick={() => {this.props.store.dispatch({
                    type:types.ADD_TODO,
                    text: this.input.value,
                    id: nextTodoId++
                })
                this.input.value = '';
            }
        }
        >
            Add Todo
        </button>
        <h3>{this.props.todos.length}</h3>
        <TodoList todos = {this.props.todos} onTodoClick={(id) => {
            this.props.store.dispatch({
                type: types.TOGGLE_TODO,
                id: id
            });
        }}/>
        {/* <ul>
            {
                this.props.todos.map(todo => 
                    <li key={todo.id}
                    onClick={() => {
                        this.props.store.dispatch({
                            type: types.TOGGLE_TODO,
                            id: todo.id
                        })
                    }}
                    style={{textDecoration: todo.completed?'line-through':'none'}}
                    >
                        {todo.text}
                    </li>
                )
            }
        </ul> */}
        <p>
            Show:
            {' '}
            <FilterLink filter={types.SHOW_ALL} store={this.props.store}>All</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_ACTIVE} store={this.props.store}>Active</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_COMPLETED} store={this.props.store}>Completed</FilterLink>
            
        </p>
      </div>);
  }
}