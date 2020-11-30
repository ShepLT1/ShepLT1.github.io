import React from "react";
import { Image } from 'semantic-ui-react';
import './style.css';

function Project(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={props.src} className="projectImg" />
    </a>
  );
}


export default Project;