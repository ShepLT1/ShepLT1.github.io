import React from "react";
import Heading from "../Header";
import { Grid } from "semantic-ui-react";
import "./style.css";

function Contact() {
  return (
    <Grid stackable centered id="contact">
      <Grid.Row id="contact-title-container">
        <Heading header="Contact" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column id="contact-col">
          <p>
            I am currently located in Portland, Oregon. Please feel free to
            reach out to me.
          </p>
          <a
            href="mailto:luke.t.shepherd@gmail.com"
            className="contact-info"
            id="email-link"
          >
            luke.t.shepherd@gmail.com
          </a>
          <p className="contact-info">(425) 736-6565</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Contact;
