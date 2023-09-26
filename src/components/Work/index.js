import React from "react";
import { Grid } from "semantic-ui-react";
import Project from "../Project";
import BreakawayThumbnail from "../../images/breakaway.png";
import PlannerThumbnail from "../../images/day-planner.png";
import MTGThumbnail from "../../images/mtg-deck-builder.png";
import WeatherThumbnail from "../../images/weather-forecast.png";
import SherpaThumbnail from "../../images/5sherpas.png";
import HobbyThumbnail from "../../images/hobby-trend.png";
import Heading from "../Header";
import "../mainStyle.css";
import "./style.css";

function Work() {
  return (
    <Grid stackable centered id="work">
      <Grid.Row>
        <Heading header="My Work" />
      </Grid.Row>
      <Grid.Row columns={2} className="project-row">
        <Grid.Column className="project-col">
          <Project
            link="https://github.com/ShepLT1/hobby-trend"
            repo="https://github.com/ShepLT1/hobby-trend"
            src={HobbyThumbnail}
            title="Hobby Trend"
            brief="Hobby Trend digitally manages collections and tracks market trends for collection-based hobbies."
          />
        </Grid.Column>
        <Grid.Column className="project-col">
          <Project
            link="https://github.com/ShepLT1/deck-builder-mtg"
            repo="https://github.com/ShepLT1/deck-builder-mtg"
            src={MTGThumbnail}
            title="MTG Deck Builder"
            brief="MTG Deck Builder is a backend application that allows users to create custom Magic: The Gathering cards and 60-card decks."
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="project-row">
        <Grid.Column className="project-col">
          <Project
            link="https://breakaway-vacay.herokuapp.com/"
            repo="https://github.com/MVC-5/breakaway"
            src={BreakawayThumbnail}
            title="Breakaway"
            brief="Breakaway increases productivity by creating a culture of taking breaks. Allows managers to track employee PTO and employees to share breakaways."
          />
        </Grid.Column>
        <Grid.Column className="project-col">
          <Project
            link="https://www.5sherpas.com/"
            repo="https://github.com/MVC-5/5sherpas"
            src={SherpaThumbnail}
            title="5sherpas"
            brief="The 5sherpas app generates suggestions for constructive activities based on your personal development goals and tracks your weekly progress."
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="project-row">
        <Grid.Column className="project-col">
          <Project
            link="https://sheplt1.github.io/Day-Planner/"
            repo="https://github.com/ShepLT1/Day-Planner"
            src={PlannerThumbnail}
            title="Day Planner"
            brief="Day Planner allows the user to save events for each work hour of a selected workday. Events are color-coded based on past, current, or upcoming."
          />
        </Grid.Column>
        <Grid.Column className="project-col">
          <Project
            link="https://sheplt1.github.io/hows-the-weather/"
            repo="https://github.com/ShepLT1/hows-the-weather"
            src={WeatherThumbnail}
            title="How's the Weather"
            brief="How's the Weather utilizes search functionality to find current and projected weather conditions for user-selected cities."
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Work;
