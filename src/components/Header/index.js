import React from "react";
import { Header } from 'semantic-ui-react';
import "./style.css"

function Heading(props) {

  return (
    <div>
      <Header as='h1' textAlign="center" id={props.id}>{props.header}</Header>
      <div className="title-line"></div>
    </div>
  );
}


export default Heading;