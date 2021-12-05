import React, { useState, useEffect } from 'react';

import { CSSTransition } from 'react-transition-group';

import './projects.css';

import { goLeft, goRight} from '../cssUpdates';

import { getCSS } from '../../other_functions/cssFunctions';


// This are the css class names used by CSSTransitions.
const projectclassname = {
  enter: 'content-projects-original-enter',
  enterActive: 'content-projects-original-enter-active',
  exit: 'content-projects-original-exit',
  exitActive: 'content-projects-original-exit-active',
};

const convertedSpeed = parseInt(getCSS('--content-projects-speed'), 10) + 50;


function Project(props){

  // Transition ignores will not apply to the text in the middle
  return (
      <div 
          className="content-projects-item" 
          id={props.id}>
      <a 
          href={props.hrefLeft} 
          className="content-project-icon-button" 
          onClick={
              () => {
                  // Run leftAction function (if it exists).
                  props.leftAction && props.leftAction();
                  // Switch transition to make it go to the left.
                  goLeft();
                  // Set the next active menu to leftGoToMenu (if it exists).
                  props.leftGoToProject && props.setActiveProject(props.leftGoToProject());
              }
          }>
              {props.leftIcon}
          </a>
          <div className="content-projects">
              {props.children}
          </div>
          
          <a 
              href={props.hrefRight} 
              className="content-projects-icon-button" 
              onClick={
              () => {
                  // Run rightAction function (if it exists).
                  props.rightAction && props.rightAction();
                  // Switch transition to make it go to the right.
                  goRight();
                  // Set the next active Menu to rightGoToMenu (if it exists).
                  props.rightGoToProject && props.setActiveProject(props.rightGoToProject());
              }
          }>
              {props.rightIcon}
          </a>
      </div>
  );
}

function projectFirst(backgroundActions, setActiveProject) {

  return {
      activeProject: 'projects-first',
      classNames: projectclassname,
      theseDropDownItems: [
          <Project 
              key='2'
              id="dropDownSettingsCubeGoNext"
              setActiveProject={ setActiveProject }
              iconLinks={ true }
              leftIcon={<LeftIcon />} 
              leftAction={() => { 
                  // backgroundActions.goFloating();
              }}
              leftGoToProject={() => { return "settings-floating"; }}
              rightIcon={<RightIcon />}
              rightAction={() => { 
                  // backgroundActions.goBirds(); 
              }}
              rightGoToProject={() => { return "settings-birds"; }}
          >{ "Cube" }</Project>,
      ]
  };
};



function CSSTransitionList(props){
  const thisActiveProject = (activeProject === props.activeProject);
  const thisClassNames = props.classNames;

  // array of dropDownItem attributes
  const dropDownItems = props.theseDropDownItems;


  return (
      <CSSTransition
          in={thisActiveProject}
          timeout={ convertedSpeed }
          classNames={thisClassNames}
          unmountOnExit>
          <div className="content-projects">
              {dropDownItems}
          </div>
      </CSSTransition>
  );
}


export default function Projects(props) {
    const [activeProject, setActiveProject] = useState('main');
    const projectRef = useRef(null);

  useEffect(()=>{

  },[activeProject])


  return (
    <div className="content-middle">
        
    </div>
  );
}
