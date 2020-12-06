import React from "react";
import { Grid, Image, Icon, Popup } from 'semantic-ui-react';
import CoverPhoto from '../../images/Zoom-cover-photo.png';
import Resume from '../../images/Luke-Shepherd-Resume.pdf';
import "./style.css";

function Nav() {

  const popupStyle = {
    opacity: .5,
    height: 27.5,
    padding: 5
  }

  return (
    <Grid id="nav-container">
      <Grid.Row id="nav-row">
        <Grid.Column id="nav-column">
          <a href="#">
            <Image src={CoverPhoto} id="cover-photo" circular />
          </a>
          <h1 id="name">Luke Shepherd</h1>
          <p id="brief"><i>Full-Stack Web Developer</i></p>
          <div className="nav-item-container">
            <a href="#about" className="nav-item">About Me</a>
          </div>
          <div className="nav-item-container">
            <a href="#expertise" className="nav-item">Expertise</a>
          </div>
          <div className="nav-item-container">
            <a href="#work" className="nav-item">My Work</a>
          </div>
          <div className="nav-item-container">
            <a href="#contact" className="nav-item">Contact</a>
          </div>
          <div id="links-container">
            <Popup
              trigger={<a href="https://github.com/ShepLT1" target="_blank" rel="noopener noreferrer" className="link"><Icon name='github' size="big" /></a>}
              content='Github Profile'
              size='tiny'
              position="top right"
              offset={[0, 7.5]}
              style={popupStyle}
              inverted
            />
            <Popup
              trigger={<a href="https://www.linkedin.com/in/luke-t-shepherd" target="_blank" rel="noopener noreferrer" className="link"><Icon name='linkedin' size="big" /></a>}
              content='LinkedIn Profile'
              size='tiny'
              position="top center"
              offset={[0, 7.5]}
              style={popupStyle}
              inverted
            />
            <Popup
              trigger={<a href={Resume} target="_blank" rel="noopener noreferrer" className="link"><Icon name='file alternate outline' size="big" /></a>}
              content='Resume'
              size='tiny'
              position="top left"
              offset={[0, 7.5]}
              style={popupStyle}
              inverted
            />
          </div>
          <p id="copyright">&copy; 2020 Luke Shepherd</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Nav;
