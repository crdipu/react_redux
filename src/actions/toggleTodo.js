import * as types from '../constants/types';

let nextTodoId = 0;
export const toggleTodo = (id) => ({
        type: types.TOGGLE_TODO,
        id: id
    })