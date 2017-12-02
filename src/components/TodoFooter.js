import React from 'react';
import {FilterLink} from './FilterLink';
import * as types from '../constants/types';

export default function TodoFooter(props) {
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter={types.SHOW_ALL}>All</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_ACTIVE}>Active</FilterLink>
            {' '}
            <FilterLink filter={types.SHOW_COMPLETED}>Completed</FilterLink>
        
        </p>
    );
  }