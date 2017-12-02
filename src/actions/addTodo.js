import * as types from '../constants/types';

let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type:types.ADD_TODO,
        text,
        id: nextTodoId++
    }
}