import * as types from '../constants/types';

export const requestTodos = (filter) => ({
    type: types.REQUEST_TODOS,
    filter,
});