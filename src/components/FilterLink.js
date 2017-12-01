import React from 'react';
import * as types from '../constants/types';

export default function FilterLink(props) {
    
    if(props.filter == props.visibilityFilter) {
        return (
            <span>{props.children}</span>
        )
    }
    return (
      <a href="#" onClick={e => {
            e.preventDefault();
            props.onClick(props.filter);
      }}>
        {props.children}
      </a>
    );
  }