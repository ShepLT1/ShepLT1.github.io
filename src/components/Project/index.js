import React from "react";
import { Image, Button, Icon } from 'semantic-ui-react';
import './style.css';

function Project(props) {

  return (
    <div className="project-div">
      <Image src={props.src} className="projectImg" />
      <div className="project-info">
        <div className="project-info-content">
          <h1 className="project-info-header">{props.title}</h1>
          <p><i>{props.brief}</i></p>
          <div className="btn-div">
            <Button animated='vertical' id="project-button" href={props.repo} target="_blank" rel="noopener noreferrer">
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
              <Button.Content visible>
                <Icon name='github' />
              </Button.Content>
            </Button>
            <Button animated='vertical' id="project-button" href={props.link} target="_blank" rel="noopener noreferrer">
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
              <Button.Content visible>
                <Icon name='globe' />
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Project;