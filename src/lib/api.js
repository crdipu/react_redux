import {v4} from 'node-uuid';
import * as types from '../constants/types';


const fakeDatabase = {
    todos:[
        {
            id: v4(),
            text: "Test 1",
            completed: true
        },
        {
            id: v4(),
            text: "Test 2",
            completed: false
        },
        {
            id: v4(),
            text: "Test 3",
            completed: true
        },
        {
            id: v4(),
            text: "Test 4",
            completed: false
        }
    ]
}

const delay = (ms) => {
    return new Promise( resolve => setTimeout(resolve, ms));
}

export const fetchTodos = (filter) => {
    return delay(1000).then(() => {
       switch(filter) {
            case types.SHOW_ALL:
                return fakeDatabase.todos;
            case types.SHOW_ACTIVE:
                return fakeDatabase.todos.filter(t => !t.completed);
            case types.SHOW_COMPLETED:
                return fakeDatabase.todos.filter(t => t.completed);
            default:
                return fakeDatabase.todos;
       } 
    });
}