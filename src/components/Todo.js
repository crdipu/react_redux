import React from 'react';

export default function Todo(props) {
    return (
        <li
        onClick={props.onClick}
        style={{textDecoration: props.completed?'line-through':'none'}}
        >
            {props.text}
        </li>
    );
  }