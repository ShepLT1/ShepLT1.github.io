import React from "react";
import { Grid } from 'semantic-ui-react';
import Nav from '../../components/Nav';
import About from '../../components/AboutMe';
import Expertise from '../../components/Expertise';
import Work from '../../components/Work';
import Contact from '../../components/Contact';
import SectionLine from '../../components/SectionLine';
import "./style.css";

function Portfolio() {

  return (
    <Grid centered stackable className="main-container" columns={2}>
      <Grid.Column width={4} id="nav-col">
        <Nav />
      </Grid.Column>
      <Grid.Column width={12} id="main-col">
        <About />
        <SectionLine />
        <Expertise />
        <SectionLine />
        <Work />
        <SectionLine />
        <Contact />
      </Grid.Column>
    </Grid>
  );
}

export default Portfolio;
