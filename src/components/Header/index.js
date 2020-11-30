import React from "react";
import { Header } from 'semantic-ui-react';
import "../mainStyle.css"

function Heading(props) {

  return (
    <Header as='h1' color="teal">{props.header}</Header>
  );
}


export default Heading;