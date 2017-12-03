import * as types from '../constants/types';
import { combineReducers } from 'redux';
import todo from './todo';


const byId = (state = {}, action) => {
    switch(action.type) {
        case types.ADD_TODO:
        case types.TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            }
        default :
            return state;
    }
}

export const allIds = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return [...state, action.id];
        default:
            return state;
    }
}

const todos = combineReducers({byId, allIds}); 

export default todos;

const getAllTodos = (state) => {
    return state.allIds.map(id => state.byId[id]);
}

export const getVisibleTodos = ( state, filter ) => {

    const allTodos = getAllTodos(state);

    switch(filter) {
        case types.SHOW_ALL:
            return allTodos;
            break;
        case types.SHOW_ACTIVE:
            return allTodos.filter(t => !t.completed);
            break;
        case types.SHOW_COMPLETED:
            return allTodos.filter(t => t.completed)
            break;
        default:
            return allTodos;
    }
}