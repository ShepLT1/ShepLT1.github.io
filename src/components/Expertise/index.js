import React from "react";
import { Grid } from "semantic-ui-react";
import Heading from "../../components/Header";
import ExpertSection from "../../components/ExpertSection";
import "./styles.css";

function Expertise() {
  return (
    <Grid stackable centered id="expertise">
      <Grid.Row>
        <Heading header="Expertise" />
      </Grid.Row>
      <Grid.Row columns={2} className="expert-row">
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="desktop"
            title="Front End"
            details="React -- React Router -- Redux -- HTML -- CSS -- Axios -- Mobile Responsive"
          />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="server"
            iconClass="server-align"
            title="Back End"
            details="Spring -- Node -- Express -- Mongoose -- Django -- Django REST Framework -- REST/Bulk API -- User/Route Authentication -- Webhooks -- JWT"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="expert-row">
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="database"
            iconClass="db-align"
            title="Data Management"
            details="MongoDB -- Mongoose -- NoSQL -- SQL -- PostgreSQL -- MySQL -- Scalable Database Architecture"
          />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="cog"
            iconClass="cog-align"
            title="General"
            details="Java -- JavaScript -- TypeScript -- Python -- AWS -- Heroku -- Docker -- Terraform -- Git -- CLI -- OOP -- MVC Paradigm -- Computer Science -- Data Structures -- Integrations"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Expertise;
