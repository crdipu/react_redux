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

export default todo;