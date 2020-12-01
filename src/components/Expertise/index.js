import React from "react";
import { Grid } from 'semantic-ui-react';
import Heading from '../../components/Header';

function AboutMe() {

  return (
    <div id="expertise">
      <Grid.Row>
        <Heading header="Proficiencies" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Computer Science</li>
            <li>UI/UX Design</li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </div>
  );
}

export default AboutMe;