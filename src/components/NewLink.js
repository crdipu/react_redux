import React from 'react';

export default function NewLink(props) {
    
    if(props.active) {
        return (
            <span>{props.children}</span>
        )
    }
    return (
      <a href="#" onClick={e => {
            e.preventDefault();
            props.onClick();
      }}>
        {props.children}
      </a>
    );
  }