import React from 'react';
import Todo from './Todo'
import * as types from '../constants/types';
import PropTypes from 'prop-types';

let nextTodoId = 0;
/**
 * The context will be passed as the second argument to this function component
 * "{store}" is equivalent to {store} = context
 */

export default function AddTodo(props, {store}) {
    let input;
    return (
        <div>
            <input ref={node => {input = node}} />
            <button onClick={() => {
                    store.dispatch(
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

  AddTodo.contextTypes = {
    store: PropTypes.object
  };