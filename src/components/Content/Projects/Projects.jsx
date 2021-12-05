import React, { useState, useEffect } from 'react';

import { CSSTransition } from 'react-transition-group';

import RightIcon from '../../Icons/right.svg';
import LeftIcon from '../../Icons/left-svgrepo-com.svg';

// const projectImage =  from '../../Icons/project_images/address_book_gtk.svg'

import projectImage from '../../Icons/project_images/address_book_gtk.png';

import './projects.css';

import { goLeft, goRight} from './cssUpdates';

import { getCSS } from '../../other_functions/cssFunctions';


// This are the css class names used by CSSTransitions.
const projectclassname = {
  enter: 'content-projects-enter',
  enterActive: 'content-projects-enter-active',
  exit: 'content-projects-exit',
  exitActive: 'content-projects-exit-active',
};

const convertedSpeed = parseInt(getCSS('--content-projects-speed'), 10) + 50;


// function Project(props){

//   // Transition ignores will not apply to the text in the middle
//   return (
//       <div 
//           className="content-projects-item" 
//           id={props.id}>
//       <a 
//           href={props.hrefLeft} 
//           className="content-project-icon-button" 
//           onClick={
//               () => {
//                   // Run leftAction function (if it exists).
//                   props.leftAction && props.leftAction();
//                   // Switch transition to make it go to the left.
//                   goLeft();
//                   // Set the next active menu to leftGoToMenu (if it exists).
//                   props.leftGoToProject && props.setActiveProject(props.leftGoToProject());
//               }
//           }>
//               {props.leftIcon}
//           </a>
//           <div className="content-projects">
//               {props.children}
//           </div>
          
//           <a 
//               href={props.hrefRight} 
//               className="content-projects-icon-button" 
//               onClick={
//               () => {
//                   // Run rightAction function (if it exists).
//                   props.rightAction && props.rightAction();
//                   // Switch transition to make it go to the right.
//                   goRight();
//                   // Set the next active Menu to rightGoToMenu (if it exists).
//                   props.rightGoToProject && props.setActiveProject(props.rightGoToProject());
//               }
//           }>
//               {props.rightIcon}
//           </a>
//       </div>
//   );
// }

// function projectFirst(backgroundActions, setActiveProject) {

//   return {
//       activeProject: 'projects-first',
//       classNames: projectclassname,
//       theseDropDownItems: [
//           <Project 
//               key='2'
//               id="dropDownSettingsCubeGoNext"
//               setActiveProject={ setActiveProject }
//               iconLinks={ true }
//               leftIcon={<LeftIcon />} 
//               leftAction={() => { 
//                   // backgroundActions.goFloating();
//               }}
//               leftGoToProject={() => { return "settings-floating"; }}
//               rightIcon={<RightIcon />}
//               rightAction={() => { 
//                   // backgroundActions.goBirds(); 
//               }}
//               rightGoToProject={() => { return "settings-birds"; }}
//           >{ "Cube" }</Project>,
//       ]
//   };
// };



export default function Projects(props) {
  const [activeProject, setActiveProject] = useState('projects-first');
  const actives = ["projects-first", "projects-second"];
  let activeIndex = 0;

  function leftArrow(){
    activeIndex-=1;
    if (activeIndex < 0){
      activeIndex = actives.length -1;
    }
    let newActive = actives[activeIndex];
    console.log(`Setting new active: ${newActive}`);
    setActiveProject(newActive);
  }

  function rightArrow(){
    activeIndex+=1;
    if (activeIndex >= actives.length){
      activeIndex = 0;
    }

    let newActive = actives[activeIndex];
    console.log(`Setting new active: ${newActive}`);
    setActiveProject(newActive);
  }


  function Project(props){
    const thisActiveProject = (activeProject === props.activeProject);
  
          
    return (
      <CSSTransition
        in={ thisActiveProject }
        timeout={ convertedSpeed }
        classNames={ projectclassname } 
        unmountOnExit>
          { props.children }
      </CSSTransition>
    );
  }

  function ProjectFirst() {
    // const setActiveProject = props.setActiveProject;

    return (
      <Project
        activeProject={ actives[0] }
        rightGoToProject={()=>{ return "projects-second"; }}
        leftGoToProject={()=>{ return "projects-second"; }}>
          <p>First Project</p>
      </Project>
    );
  };

  // <a 
  //           className="content-projects-icon-button content-projects-icon-button-left" 
  //           onClick={
  //           () => {
  //             // // Run leftAction function (if it exists).
  //             // props.leftAction && props.leftAction();
  //             // // Switch transition to make it go to the right.
  //             // goLeft();
  //             // // Set the next active Menu to rightGoToMenu (if it exists).
  //             // props.leftGoToProject && setActiveProject(props.leftGoToProject());
  //             leftArrow();
  //           }
  //         }>
  //             <LeftIcon />
  //         </a>

  //       <div className="content-projects-main">
  //         <ProjectFirst />
  //         <ProjectSecond />
  //       </div>
  //       <a 
  //           className="content-projects-icon-button content-projects-icon-button-right" 
  //           onClick={
  //           () => {
  //             // // Run rightAction function (if it exists).
  //             // props.rightAction && props.rightAction();
  //             // // Switch transition to make it go to the right.
  //             // goRight();
  //             // // Set the next active Menu to rightGoToMenu (if it exists).
  //             // props.rightGoToProject && setActiveProject(props.rightGoToProject());
  //             rightArrow();
  //           }
  //         }>
  //             <RightIcon />
  //         </a>

  function ProjectSecond() {
    // const setActiveProject = props.setActiveProject;

    return (
      <Project
        activeProject={ actives[1] }
        rightGoToProject={()=>{ return "projects-first"; }}
        leftGoToProject={()=>{ return "projects-first"; }}>
          <p>Second Project</p>
      </Project>
    );
  };

  // content-middle-projects
  // content-projects-container
  // content-projects-header
  // content-projects-left
  // content-projects-content
  // content-projects-right
  // content-projects-footer


  return (

    <div className="content-middle-projects">
      <div className="content-projects-container">
        
        <div className="content-projects-left">
          <a 
            className="content-projects-icon-button" 
            onClick={
            () => {
              // Run rightAction function (if it exists).
              // props.rightAction && props.rightAction();
              // Switch transition to make it go to the right.
              // goRight();
              // Set the next active Menu to rightGoToMenu (if it exists).
              // props.rightGoToProject && props.setActiveProject(props.rightGoToProject());
            }
          }>
            <LeftIcon />
          </a>
        </div>

        <div className="content-projects-right">
          <a 
            className="content-projects-icon-button" 
            onClick={
            () => {
              // Run rightAction function (if it exists).
              // props.rightAction && props.rightAction();
              // Switch transition to make it go to the right.
              // goRight();
              // Set the next active Menu to rightGoToMenu (if it exists).
              // props.rightGoToProject && props.setActiveProject(props.rightGoToProject());
            }
          }>
            <RightIcon />
          </a>
        </div>
        
        <div className="content-projects-content">
          
          <div className="content-projects-content-title">
            <p>header</p>
          </div>
          <div className="content-projects-content-image">
          <img src={ projectImage } />
          </div>
          
          <div className="content-projects-content-description">
            <p>Vivamus feugiat est mi, at vulputate tortor aliquam at. Donec non tincidunt massa, eu scelerisque est. Maecenas auctor orci eu eros molestie sollicitudin. Donec nec efficitur arcu. Nullam nisi neque, venenatis dignissim tristique vitae, iaculis ut mi. Pellentesque eleifend ex turpis, quis porta odio commodo at. Proin congue posuere imperdiet. Nunc tellus arcu, euismod at diam a, lacinia rutrum augue. Donec tellus libero, rhoncus ac est eu, bibendum blandit sem. Sed accumsan vel diam sed tempor. Morbi sed ornare ante. Suspendisse nec justo at massa consequat fringilla vitae vitae leo. Aliquam eu gravida elit. Cras eu arcu quis lectus semper viverra sed eget arcu.</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}


