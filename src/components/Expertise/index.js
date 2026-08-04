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
            details="React -- Redux -- Tanstack Query -- HTML -- CSS -- Mobile Responsive -- Data Caching"
          />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="server"
            iconClass="server-align"
            title="Back End"
            details="Go -- Spring -- Django -- Node/Express -- APIs -- Integrations -- JWT Handling"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="expert-row">
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="database"
            iconClass="db-align"
            title="Data Management"
            details="SQL -- NoSQL -- PostgreSQL -- MySQL -- DynamoDB -- MongoDB"
          />
        </Grid.Column>
        <Grid.Column className="expert-col">
          <ExpertSection
            icon="cog"
            iconClass="cog-align"
            title="General"
            details="Go -- Java -- Python -- TS/JS -- AWS -- Docker -- Git -- CLI -- DSA -- CS -- System Design -- AI Integration"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Expertise;
