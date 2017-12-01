import React from 'react';
import * as types from '../constants/types';
import FilterLink from './FilterLink';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoFooter from './TodoFooter';

let nextTodoId = 0;
export default function TodoApp (props) {
    return (
     <div style={{textAlign: 'center'}}>
        <AddTodo onAddClick={(addTodoText)=>{
                        props.store.dispatch(
                            {
                                type:types.ADD_TODO,
                                text: addTodoText,
                                id: nextTodoId++
                            }
                        )
                    }
                }/>
        <h3>{props.todos.length}</h3>
        <TodoList todos = {props.todos} onTodoClick={(id) => {
                props.store.dispatch({
                type: types.TOGGLE_TODO,
                id: id
            });
        }}/>
        <TodoFooter 
            store={props.store}
        /> 
      </div>);
}