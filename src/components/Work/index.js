import React from "react";
import { Grid } from 'semantic-ui-react';
import Project from '../Project';
import BreakawayThumbnail from '../../images/breakaway.png'
import COVIDThumbnail from '../../images/covid.jpeg'
import PlannerThumbnail from '../../images/day-planner.png'
import FitnessThumbnail from '../../images/fitness-app.jpeg'
import WeatherThumbnail from '../../images/weather-forecast.png'
import SherpaThumbnail from '../../images/5sherpas.png'
import Heading from '../Header';
import "../mainStyle.css";
import "./style.css"

function Work() {

  return (
    <Grid stackable centered id="work" >
      <Grid.Row>
        <Heading header="My Work" />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project link="https://www.5sherpas.com/" repo="https://github.com/MVC-5/5sherpas" src={SherpaThumbnail} title="5sherpas" brief="The 5sherpas app generates suggestions for constructive activities based on your personal development goals and tracks your weekly progress." />
        </Grid.Column>
        <Grid.Column>
          <Project link="https://breakaway-vacay.herokuapp.com/" repo="https://github.com/MVC-5/breakaway" src={BreakawayThumbnail} title="Breakaway" brief="Breakaway increases productivity by creating a culture of taking breaks. Allows managers to track employee PTO and employees to share breakaways." />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/Day-Planner/" repo="https://github.com/ShepLT1/Day-Planner" src={PlannerThumbnail} title="Day Planner" brief="Day Planner allows the user to save events for each work hour of a selected workday. Events are color-coded based on past, current, or upcoming." />
        </Grid.Column>
        <Grid.Column>
          <Project link="https://ls-fitness-witness.herokuapp.com/?id=5f938a806451f30017fe87c5" repo="https://github.com/ShepLT1/fitness-witness" src={FitnessThumbnail} title="Fitness Witness" brief="Fitness Witness is a fitness tracker application that allows user to add exercises to a previous or new workout and view stats for multiple workouts." />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/hows-the-weather/" repo="https://github.com/ShepLT1/hows-the-weather" src={WeatherThumbnail} title="How's the Weather" brief="How's the Weather utilizes search functionality to find current and projected weather conditions for user-selected cities." />
        </Grid.Column>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/covid-tracker/" repo="https://github.com/ShepLT1/covid-tracker" src={COVIDThumbnail} title="COVID-19 Tracker" brief="COVID-19 Tracker is a one-stop shop for relevant COVID-19 data, news, and an interactive map based on user-selected location." />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Work;