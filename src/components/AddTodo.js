import React from 'react';
import Todo from './Todo'

export default function AddTodo(props) {
    let input;
    return (
        <div>
            <input ref={node => {input = node}} />
            <button onClick={() => {
                    props.onAddClick(input.value);
                    input.value = '';
                }
            }
            >
                Add Todo
            </button>
        </div>
    );
  }