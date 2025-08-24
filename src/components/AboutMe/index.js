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
            I'm an enthusiastic full-stack software engineer specializing in programming languages such as Go, Python, Java, SQL, and Typescipt/Javascript. I love developing robust, scalable applications using tools and frameworks like Spring, Django, React, Redux, Docker, and AWS.
          </p>
          <p>
            I leverage a unique background in software engineering, psychology, & healthcare to build a more intuitive and delightful user experience. Known as an innovative problem-solver, I am passionate about creating, improving, and refining applications and workflows in order to deliver software of the highest quality. I am especially fond of robust back-end & database architecture & functionality. Most of my professional software engineering experience is in e-commerce, with a focus on product information management systems that include full-scale API integration with systems such as Salesforce & Quickbooks.
          </p>
          <p>
            As a software engineer, I worked for two years at a healthcare supply marketplace startup called Bttn and for three months as an intern at Remitly, a fintech company specializing in cross-border remittance payments. As a self-starter, I took on many additional roles while working at Bttn, including architecture lead, product manager, external systems integration specialist, de-facto dev-ops, and countless others. My professional engineering experience has helped hone my technical abilities while teaching me to be agile and decisive when faced with daily challenges. Adopting a growth-oriented mindset and consistently fueling my curiosity engine have helped build a great start to my career, and I'm excited to see what the future holds.
          </p>
          <p>
            I thoroughly enjoy working with a team of engineers to build efficient, large-scale, and user-friendly applications. Please have a look at some of my work down below and feel free to check out out my GitHub page, LinkedIn profile, and resume via the links below the navigation menu.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default AboutMe;
