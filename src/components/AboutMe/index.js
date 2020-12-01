import React from "react";
import { Grid } from 'semantic-ui-react';
import Heading from '../../components/Header';

function AboutMe() {

  return (
    <div id="about">
      <Grid.Row>
        <Heading header="About Me" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>I am a full-stack web developer proficient in Javascript-based languages. Prior to my web development education via the University of Washington, I obtained a Bachelor of Science Degree in Psychology with the intention of later applying to a graduate program to become a prosthetics and orthotics clinician. My University of Washington coursework in preparation for a prosthetics career included biology, chemistry, physics, and mathematics.</p>

          <p>After graduation, I was unfortunately unable to enroll in a prosthetics graduate program due to the development of back issues and the demanding physical nature of a prosthetics career. Since then, I have worked on the administrative side of the healthcare field and am currently employed as a Patient Care Coordinator for a gastroenterology clinic at Swedish Medical Group in Ballard. In my free time, I continue to develop web applications as I am seeking an entry level position as a full-stack engineer.</p>
        </Grid.Column>
      </Grid.Row>
    </div>
  );
}

export default AboutMe;