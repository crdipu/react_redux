import { combineReducers } from 'redux';
import * as types from '../constants/types';

const createList = (filter) => {
    const ids = (state = [], action) => {
        if ( action.filter != filter ) {
            return state;
        }
        switch (action.type) {
            case types.RECEIVE_TODOS:
              return action.response.map(todo => todo.id);
            default:
              return state;
        }    
    };

    const isFetching = (state = false, action) => {
        if (filter !== action.filter) {
          return state;
        }
        switch (action.type) {
          case types.REQUEST_TODOS:
            return true;
          case types.RECEIVE_TODOS:
            return false;
          default:
            return state;
        }
    };

    return combineReducers({ids, isFetching});

}

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = state => state.isFetching;