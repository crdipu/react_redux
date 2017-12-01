import React from 'react';

import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import TodoFooter from './TodoFooter';


export default function TodoApp (props) {
    return (
     <div style={{textAlign: 'center'}}>

        <AddTodo store={props.store}/>

        <VisibleTodoList  store={props.store}/>

        <TodoFooter store={props.store}/> 

      </div>);
}