import React from 'react';
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map(
                todo => <Todo key={todo.id} {...todo} onClick={() => props.onTodoClick(todo.id)} />
            )}
        </ul>
    );
  }