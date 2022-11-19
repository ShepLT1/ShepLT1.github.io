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
          <ExpertSection icon="desktop" title="Front End" details="React -- React Router -- Redux -- HTML -- CSS -- Axios -- Mobile Responsive" />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection icon="server" iconClass="server-align" title="Back End" details="Node -- Express -- REST API -- Mongoose -- User/Route Authentication -- Webhooks -- JWT" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="expert-row">
        <Grid.Column className="expert-col">
          <ExpertSection icon="database" iconClass="db-align" title="Data Management" details="MongoDB -- Mongoose -- NoSQL -- SQL -- MySQL -- Scalable Database Architecture" />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection icon="cog" iconClass="cog-align" title="General" details="MERN -- SERN -- Javascript -- Python -- OOP -- MVC Paradigm -- Git -- Heroku -- Computer Science -- Data Structures" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Expertise;