import React from "react";
import { Grid } from "semantic-ui-react";
import Heading from "../../components/Header";
import "./style.css";

function AboutMe() {
  return (
    <Grid stackable centered id="about">
      <Grid.Row id="about-title-container">
        <Heading header="About Me" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column id="about-col">
          <p>
            I'm an enthusiastic full-stack software engineer specializing in
            Javascript, Python, & Java based frameworks who loves building
            robust, scalable applications.
          </p>

          <p>
            As a self-starter, I took on many roles while working at a tech
            startup, including both front and back end engineer, architecture
            lead, product manager, external systems integration specialist,
            de-facto dev-ops, and countless others. My professional engineering
            experience within the tech startup world has helped hone my
            technical abilities while teaching me to be agile and decisive when
            faced with daily challenges. Adopting a growth-oriented mindset and
            consistently fueling my curiosity engine have helped build a great
            start to my career, and I'm excited to see what the future holds.
          </p>

          <p>
            I thoroughly enjoy working with a team of engineers to build
            efficient, large-scale, and user-friendly applications. Please have
            a look at some of my work down below and feel free to check out out
            my GitHub page, LinkedIn profile, and resume via the links below the
            navigation menu.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default AboutMe;
