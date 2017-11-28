import React from 'react';
import * as types from '../constants/types';

export default function FilterLink(props) {
    if(props.filter == props.store.getState().visibilityFilter) {
        return (
            <span>{props.children}</span>
        )
    }
    return (
      <a href="#" onClick={e => {
            e.preventDefault();
            props.store.dispatch(
                {
                    type: types.SET_VISIBILITY_FILTER,
                    filter: props.filter
                }
            )
      }}>
        {props.children}
      </a>
    );
  }