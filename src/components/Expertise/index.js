import React from "react";
import { Grid } from 'semantic-ui-react';
import Heading from '../../components/Header';
import ExpertSection from '../../components/ExpertSection';

function Expertise() {

  return (
    <Grid stackable centered id="expertise">
      <Grid.Row>
        <Heading header="Expertise" />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <ExpertSection icon="desktop" title="Front End" details="React -- React Hooks -- React Router -- Semantic UI -- HTML -- CSS -- JQuery -- Bootstrap" />
        </Grid.Column>
        <Grid.Column>
          <ExpertSection icon="server" iconClass="server-align" title="Back End" details="MySQL -- MongoDB -- Node -- Express -- Sequelize -- Mongoose -- AJAX -- JSON -- Web Services API" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <ExpertSection icon="cog" iconClass="cog-align" title="Other Tools" details="OOP -- MVC Paradigm -- Git -- GitHub -- Heroku -- TDD -- Computer Science" />
        </Grid.Column>
        <Grid.Column>
          <ExpertSection icon="lock" iconClass="lock-align" title="Security" details="Session Storage -- Bcrypt -- Passport.js -- Protected Routes -- Credential Validation with Redux.js" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Expertise;