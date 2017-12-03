import * as types from '../constants/types';

let nextTodoId = 0;
export const clickOnFooterLink = (filter) => ({
        type: types.SET_VISIBILITY_FILTER,
        filter
    })