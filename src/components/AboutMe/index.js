import React from "react";
import { Grid } from 'semantic-ui-react';
import Heading from '../../components/Header';
import './style.css';

function AboutMe() {

  return (
    <Grid stackable centered id="about">
      <Grid.Row id="about-title-container">
        <Heading header="About Me" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column id="about-col">
          <p>I'm an enthusiastic full-stack web developer proficient in Javascript-based technologies who loves getting down and dirty with some solid code.</p>


          <p>Technology has fascinated me ever since I volunteered to set up the family computer as a young kid. My affection for creation also began at a young age, where I spent hours in my room building anything I could imagine out of legos. Web development allows me to combine these interests and I am eager to follow my growing passion.</p>

          <p>I have demonstrated my abilities to work with a team and think critically while building user-friendly web applications. Please have a look at some of my work down below and feel free to check out out my GitHub page, LinkedIn profile, and resume via the links below the navigation menu.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default AboutMe;