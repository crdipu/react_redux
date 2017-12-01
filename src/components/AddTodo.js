import React from 'react';
import Todo from './Todo'
import * as types from '../constants/types';

let nextTodoId = 0;

export default function AddTodo(props) {
    let input;
    return (
        <div>
            <input ref={node => {input = node}} />
            <button onClick={() => {
                    props.store.dispatch(
                        {
                            type:types.ADD_TODO,
                            text: input.value,
                            id: nextTodoId++
                        }
                    )
                    input.value = '';
                }
            }
            >
                Add Todo
            </button>
        </div>
    );
  }