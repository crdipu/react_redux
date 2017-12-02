import React from 'react';
import Todo from './Todo'

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions/addTodo';


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
                    props.dispatch(addTodo(input.value))
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