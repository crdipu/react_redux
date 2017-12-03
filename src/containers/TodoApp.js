import React from 'react';

import {VisibleTodoList} from './VisibleTodoList';
import {AddTodo} from './AddTodo';
import TodoFooter from '../components/TodoFooter';


export default function TodoApp (props) {
    return (
     <div style={{textAlign: 'center'}}>

        <AddTodo/>

        <VisibleTodoList/>

        <TodoFooter/> 

      </div>);
}