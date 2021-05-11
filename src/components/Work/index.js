import React from "react";
import { Grid } from 'semantic-ui-react';
import Project from '../Project';
import BreakawayThumbnail from '../../images/breakaway.png'
import PlannerThumbnail from '../../images/day-planner.png'
import ShoppiesThumbnail from '../../images/shoppies.png'
import WeatherThumbnail from '../../images/weather-forecast.png'
import SherpaThumbnail from '../../images/5sherpas.png'
import BuyBotThumbnail from '../../images/bestest-buy-bot.png'
import Heading from '../Header';
import "../mainStyle.css";
import "./style.css"

function Work() {

  return (
    <Grid stackable centered id="work" >
      <Grid.Row>
        <Heading header="My Work" />
      </Grid.Row>
      <Grid.Row columns={2} className="project-row">
        <Grid.Column className="project-col">
          <Project link="https://www.5sherpas.com/" repo="https://github.com/MVC-5/5sherpas" src={SherpaThumbnail} title="5sherpas" brief="The 5sherpas app generates suggestions for constructive activities based on your personal development goals and tracks your weekly progress." />
        </Grid.Column>
        <Grid.Column className="project-col">
          <Project link="https://github.com/ShepLT1/bestest-buy-bot/" repo="https://github.com/ShepLT1/bestest-buy-bot/" src={BuyBotThumbnail} title="Best Buy Purchase Bot" brief="Developed to compete with scalpers, the Bestest Buy Bot autonomously purchases high-demand products while utilizing node.js, puppeteer, pm2, and discord web hooks." />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="project-row">
        <Grid.Column className="project-col">
          <Project link="https://breakaway-vacay.herokuapp.com/" repo="https://github.com/MVC-5/breakaway" src={BreakawayThumbnail} title="Breakaway" brief="Breakaway increases productivity by creating a culture of taking breaks. Allows managers to track employee PTO and employees to share breakaways." />
        </Grid.Column>
        <Grid.Column className="project-col">
          <Project link="https://sheplt1.github.io/Day-Planner/" repo="https://github.com/ShepLT1/Day-Planner" src={PlannerThumbnail} title="Day Planner" brief="Day Planner allows the user to save events for each work hour of a selected workday. Events are color-coded based on past, current, or upcoming." />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2} className="project-row">
        <Grid.Column className="project-col">
          <Project link="https://sheplt1.github.io/the-shoppies/" repo="https://github.com/ShepLT1/the-shoppies" src={ShoppiesThumbnail} title="The Shoppies" brief="Shopify fall internship challenge: Movie awards for entrepreneurs. Basic front-end application that utilizes React Redux to manage state and avoid tedious props drilling." />
        </Grid.Column>
        <Grid.Column className="project-col">
          <Project link="https://sheplt1.github.io/hows-the-weather/" repo="https://github.com/ShepLT1/hows-the-weather" src={WeatherThumbnail} title="How's the Weather" brief="How's the Weather utilizes search functionality to find current and projected weather conditions for user-selected cities." />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Work;