import React from "react";
import { Grid, Image, Icon, Popup, Button } from 'semantic-ui-react';
import CoverPhoto from '../../images/Zoom-cover-photo.png';
import Resume from '../../images/Luke-Shepherd.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Nav() {

  const popupStyle = {
    opacity: .5,
    height: 27.5,
    padding: 5
  }

  const showNav = () => {
    document.getElementById('nav-container').style.transform = 'translateX(0px)';
    document.getElementById('nav-toggle').style.display = 'none';
    document.getElementById('nav-collapse').style.display = 'flex';
  }

  const collapseNav = () => {
    document.getElementById('nav-container').style.transform = 'translateX(-250px)';
    document.getElementById('nav-toggle').style.display = 'flex';
    document.getElementById('nav-collapse').style.display = 'none';
  }

  return (
    <div>
      <Button id="nav-toggle" onClick={showNav}>
        <FontAwesomeIcon icon={faBars} size="lg" color="#83e7eb" />
      </Button>
      <Grid id="nav-container">
        <Grid.Row id="nav-row">
          <Grid.Column id="nav-column">
            <FontAwesomeIcon icon={faTimes} size="2x" color="rgb(172, 0, 86)" id="nav-collapse" onClick={collapseNav} />
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
                content='Github'
                size='tiny'
                position="top right"
                offset={[0, 10]}
                style={popupStyle}
                inverted
              />
              <Popup
                trigger={<a href="https://www.linkedin.com/in/luke-t-shepherd" target="_blank" rel="noopener noreferrer" className="link"><Icon name='linkedin' size="big" /></a>}
                content='LinkedIn'
                size='tiny'
                position="top center"
                offset={[0, 10]}
                style={popupStyle}
                inverted
              />
              <Popup
                trigger={<a href={Resume} target="_blank" rel="noopener noreferrer" className="link"><Icon name='file alternate outline' size="big" /></a>}
                content='Resume'
                size='tiny'
                position="top left"
                offset={[0, 10]}
                style={popupStyle}
                inverted
              />
            </div>
            <p id="copyright">&copy; 2020 Luke Shepherd</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Nav;
