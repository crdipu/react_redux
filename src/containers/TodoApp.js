import React from 'react';
import * as types from '../constants/types';
import {VisibleTodoList} from './VisibleTodoList';
import {AddTodo} from './AddTodo';
import TodoFooter from '../components/TodoFooter';


export default function TodoApp (params) {
  console.log(params.match.params.filter);
    return (
     <div style={{textAlign: 'center'}}>

        <AddTodo/>

        <VisibleTodoList filter={params.match.params.filter || types.SHOW_ALL}/>

        <TodoFooter/> 

      </div>);
}