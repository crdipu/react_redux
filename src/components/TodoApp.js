import React from 'react';
import * as types from '../constants/types';

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
        <ul>
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
        </ul>
      </div>);
  }
}