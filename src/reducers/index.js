import * as types from '../constants/types';
import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    all: createList(types.SHOW_ALL),
    active: createList(types.SHOW_ACTIVE),
    completed: createList(types.SHOW_COMPLETED),
});

const todos = combineReducers({byId, listByFilter});

export default todos;

export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
};