import React from "react";
import Heading from '../Header';
import { Grid } from 'semantic-ui-react';
import './style.css';

function Contact() {

  return (
    <Grid stackable centered id="contact">
      <Grid.Row id="contact-title-container">
        <Heading header="Contact" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column id="contact-col">
          <p>I am currently located in Seattle, Washington. Please feel free to reach out to me by email <span className="contact-info">luke.t.shepherd@gmail.com</span> or phone <span className="contact-info">(425)736-6565</span>.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Contact;