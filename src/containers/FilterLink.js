import React from 'react';
import {NavLink} from 'react-router-dom';


const FilterLink = (props) => {
  return (
    <NavLink 
      to={props.filter === 'all'? '' : props.filter }
    >
      {props.children}
    </NavLink>
  );  
}

export default FilterLink;