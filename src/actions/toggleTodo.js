import * as types from '../constants/types';

let nextTodoId = 0;
export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id: id
    }
}