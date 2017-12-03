import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Todo from '../components/Todo'
import {addTodo} from '../actions/addTodo';

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