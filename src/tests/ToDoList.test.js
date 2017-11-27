import deepFreeze from 'deep-freeze';
import * as types from '../constants/types';
import todos from '../reducers/';

test('Add ToDo test.', () => {
    const stateBefore = [];
    const action = {
        type: types.ADD_TODO,
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});

test('Test toggle ToDo', () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn React',
            completed: false
        }
    ];

    const action = {
        type : types.TOGGLE_TODO,
        id : 1
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn React',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});


