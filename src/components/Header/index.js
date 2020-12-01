import React from "react";
import { Header } from 'semantic-ui-react';
import "../mainStyle.css"

function Heading(props) {

  return (
    <Header as='h1' color="teal" id={props.id}>{props.header}</Header>
  );
}


export default Heading;