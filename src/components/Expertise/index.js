import React from "react";
import { Grid } from 'semantic-ui-react';
import Heading from '../../components/Header';
import ExpertSection from '../../components/ExpertSection';
import './styles.css';

function Expertise() {

  return (
    <Grid stackable centered id="expertise">
      <Grid.Row>
        <Heading header="Expertise" />
      </Grid.Row>
      <Grid.Row columns={2} className="expert-row">
        <Grid.Column className="expert-col">
          <ExpertSection icon="desktop" title="Front End" details="React -- React Redux -- HTML -- CSS -- JQuery -- Bootstrap -- AJAX -- Semantic UI" />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection icon="server" iconClass="server-align" title="Back End" details="MySQL -- MongoDB -- Node -- Express -- Sequelize -- Mongoose -- JSON -- Web Services API" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="expert-row">
        <Grid.Column className="expert-col">
          <ExpertSection icon="cog" iconClass="cog-align" title="Other Tools" details="OOP -- MVC Paradigm -- Git -- GitHub -- Heroku -- TDD -- Computer Science -- Data Structures" />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection icon="lock" iconClass="lock-align" title="Security" details="Session Storage -- Bcrypt -- Passport.js -- Protected Routes -- Credential Validation" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Expertise;