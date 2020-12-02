import React from "react";
import { Icon } from 'semantic-ui-react';
import './style.css';

function Expertise(props) {

  return (
    <div className="expert-section">
      <Icon name={props.icon} className={props.iconClass} size="huge" />
      <h1>{props.title}</h1>
      <p>{props.details}</p>
    </div>
  );
}

export default Expertise;