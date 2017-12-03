import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clickOnFooterLink} from '../actions/clickOnFooterLink';
import * as types from '../constants/types';
import NewLink from '../components/NewLink';


const mapStateToProps = (state, ownProps) => {
  return {
    active: (ownProps.filter==state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
          dispatch(clickOnFooterLink(ownProps.filter));
      }
  }
}

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLink);
