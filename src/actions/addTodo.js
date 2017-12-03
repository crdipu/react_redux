import * as types from '../constants/types';
import {v4} from 'node-uuid';

export const addTodo = (text) => ({
        type:types.ADD_TODO,
        text,
        id: v4()
})
