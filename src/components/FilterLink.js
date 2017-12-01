import React from 'react';
import * as types from '../constants/types';
import NewLink from './NewLink';

export default class FilterLink extends React.Component {
  componentDidMount() {
    this.unSubscribe = this.props.store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    const props = this.props;
    const state = props.store.getState();
    return(
      <NewLink
        active={(props.filter==state.visibilityFilter)}
        onClick={()=>{
          props.store.dispatch({
            type: types.SET_VISIBILITY_FILTER,
            filter: props.filter
          })
        }}
      >
        {props.children}
      </NewLink>
    );
  }
}