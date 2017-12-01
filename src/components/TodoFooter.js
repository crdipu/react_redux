import React from 'react';
import FilterLink from './FilterLink';
import * as types from '../constants/types';

export default function TodoFooter(props) {
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter={types.SHOW_ALL} store={props.store}>All</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_ACTIVE} store={props.store}>Active</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_COMPLETED} store={props.store}>Completed</FilterLink>
        
        </p>
    );
  }