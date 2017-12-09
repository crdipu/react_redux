import * as api from '../lib/api';
import {receiveTodos} from './receiveTodos';

export const fetchTodos = (filter) => api
    .fetchTodos(filter)
    .then(response => receiveTodos(filter, response));