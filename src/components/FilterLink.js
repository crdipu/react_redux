import React from 'react';
import * as types from '../constants/types';
import NewLink from './NewLink';
import PropTypes from 'prop-types';

export default class FilterLink extends React.Component {
  componentDidMount() {
    const store = this.context.store;
    this.unSubscribe = store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    const props = this.props;
    const store = this.context.store;
    const state = store.getState();
    return(
      <NewLink
        active={(props.filter==state.visibilityFilter)}
        onClick={()=>{
          store.dispatch({
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

FilterLink.contextTypes = {
  store: PropTypes.object
};