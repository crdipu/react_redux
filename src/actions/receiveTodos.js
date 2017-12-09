import * as types from '../constants/types';

export const receiveTodos = (filter, response) => ({type: types.RECEIVE_TODOS, filter, response})
