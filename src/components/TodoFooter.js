import React from 'react';
import FilterLink from './FilterLink';
import * as types from '../constants/types';

export default function TodoFooter(props) {
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter={types.SHOW_ALL} visibilityFilter={props.visibilityFilter} onClick={props.onFooterClick}>All</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_ACTIVE} visibilityFilter={props.visibilityFilter} onClick={props.onFooterClick}>Active</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_COMPLETED} visibilityFilter={props.visibilityFilter} onClick={props.onFooterClick}>Completed</FilterLink>
        
        </p>
    );
  }