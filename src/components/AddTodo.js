import React from 'react';
import Todo from './Todo'
import * as types from '../constants/types';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

let nextTodoId = 0;
/**
 * The context will be passed as the second argument to this function component
 * "{store}" is equivalent to {store} = context
 */

const AddTodoFunction = function (props) {
    let input;
    return (
        <div>
            <input ref={node => {input = node}} />
            <button onClick={() => {
                    props.dispatch(
                        {
                            type:types.ADD_TODO,
                            text: input.value,
                            id: nextTodoId++
                        }
                    )
                    input.value = '';
                }
            }
            >
                Add Todo
            </button>
        </div>
    );
  }

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoFunction);