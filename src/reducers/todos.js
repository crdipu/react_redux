import * as types from '../constants/types';

const todo = (state, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case types.TOGGLE_TODO:
            if(state.id != action.id) {
                return state;
            }
            return Object.assign({}, state, {completed : !state.completed});
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case types.TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default :
            return state;
    }
}

export default todos;

export const getVisibleTodos = ( state, filter ) => {
    
    switch(filter) {
        case types.SHOW_ALL:
            return state;
            break;
        case types.SHOW_ACTIVE:
            return state.filter(t => !t.completed);
            break;
        case types.SHOW_COMPLETED:
            return state.filter(t => t.completed)
            break;
        default:
            return state;
    }
}