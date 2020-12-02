import React from "react";
import { Grid } from 'semantic-ui-react';
import Nav from '../../components/Nav';
import About from '../../components/AboutMe';
import Expertise from '../../components/Expertise';
import Work from '../../components/Work';
import Contact from '../../components/Contact';
import Heading from '../../components/Header';
import "./style.css";

function Portfolio() {

  return (
    <Grid centered stackable className="main-container" columns={2}>
      <Grid.Column width={4}>
        <Nav />
      </Grid.Column>
      <Grid.Column width={12}>
        <About />
        <Expertise />
        <Heading header="My Work" id="work" />
        <Work />
        <Contact />
      </Grid.Column>
    </Grid>
  );
}

export default Portfolio;
