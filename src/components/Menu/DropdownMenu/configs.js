// svg icons imported using svgr
import StarIcon from '../../Icons/star.svg';
import RightIcon from '../../Icons/right.svg';
import LeftIcon from '../../Icons/left-svgrepo-com.svg';
import AboutMeIcon from '../../Icons/account-svgrepo-com.svg';
import ProjectsIcon from '../../Icons/folder-svgrepo-com.svg'
import AnimationSettingsIcon from '../../Icons/setting-svgrepo-com.svg';
import FPSCheckbox from './checkboxes/FPSCheckbox';

import React from 'react';


import DropdownRow from './DropdownRow/DropdownRow.js';
import DropdownSideways from './DropdownRow/DropdownSideways.js';


const menuclassname = {
    enter: 'menu-original-enter',
    enterActive: 'menu-original-enter-active',
    exit: 'menu-original-exit',
    exitActive: 'menu-original-exit-active',
};


export function mainTransition(backgroundActions, setActiveMenu){
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;

    return {
        activeMenu: 'main',
        classNames: menuclassname,
        theseDropDownItems:[
            <DropdownRow 
                key='1'
                id="dropDownMainAboutMe"
                setActiveMenu={ setActiveMenu }
                ignoretransitionend="true"
                href="#content-about-me"
                leftIcon={ <AboutMeIcon /> } 
            >{ "About Me" }</DropdownRow>, 
            <DropdownRow 
                key='2'
                id="dropDownMainProjects"
                setActiveMenu={ setActiveMenu }
                leftIcon={ <ProjectsIcon /> } 
                rightIcon={ <RightIcon /> } 
                goToMenu={ () => { return "projects";} }
            >{ "Topics" }</DropdownRow>, 
            <DropdownRow 
                key='3'
                id="dropDownMainSettings"
                setActiveMenu={ setActiveMenu }
                leftIcon={ <AnimationSettingsIcon /> } 
                rightIcon={ <RightIcon /> } 
                goToMenu={ () => { 
                    let classNames = getAnimationClassNames();
                    let index = getCurrentAnimation();
                    return classNames[index];
                }} 
            >{ "Animation Settings" }</DropdownRow>
        ]
    };
};


export function projects(backgroundActions, setActiveMenu) { 
    return {
        activeMenu: 'projects',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow 
                key='1'
                id="dropDownProjectsGoBack"
                setActiveMenu={ setActiveMenu }
                ignoretransitionstart="true" 
                ignoretransitionend="true"
                leftIcon={ <LeftIcon /> } 
                goToMenu={ () => { return "main";} }
                goBack={ true }
            >{ "Back" }</DropdownRow>, 
            <DropdownRow 
                key='2'
                id="dropDownProjectsContactInfo"
                href="#content-contact-info"
                setActiveMenu={ setActiveMenu }
                leftIcon={ <StarIcon /> }
            >{ "Contact Info" }</DropdownRow>, 
            <DropdownRow
                key='3'
                id="dropDownProjectsCodingSkills"
                href="#content-coding-skills"
                setActiveMenu={ setActiveMenu }
                leftIcon={ <StarIcon /> } 
            >{ "Coding Skills" }</DropdownRow>, 
            <DropdownRow
                key='4'
                id="dropDownProjectsProjects"
                href="#content-projects"
                setActiveMenu={ setActiveMenu }
                leftIcon={ <StarIcon /> } 
            >{ "Projects" }</DropdownRow>
        ]
    };
};


export function settingsCube(backgroundActions, setActiveMenu) {
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;
    return {
        activeMenu: 'settings-cube',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow 
                key='1'
                id="dropDownSettingsCubeGoBack"
                setActiveMenu={ setActiveMenu }
                ignoretransitionstart="true"
                ignoretransitionend="true"
                leftIcon={ <LeftIcon /> } 
                goToMenu={ () => { return "main"; } } 
                goBack={ true }
            >{ "Back" }</DropdownRow>,  
            <DropdownSideways 
                key='2'
                id="dropDownSettingsCubeGoNext"
                setActiveMenu={ setActiveMenu }
                iconLinks={ true }
                leftIcon={<LeftIcon />} 
                leftAction={() => { 
                    goFloating();
                }}
                leftGoToMenu={() => { return "settings-floating"; }}
                rightIcon={<RightIcon />}
                rightAction={() => { 
                    goBirds(); 
                }}
                rightGoToMenu={() => { return "settings-birds"; }}
            >{"Cube"}</DropdownSideways>,
            <DropdownRow 
                key='3'
                id={ "dropDownSettingsTextInterfaceCheckbox" }
                setActiveMenu={ setActiveMenu }
            >{ <FPSCheckbox id="checkbox-checkbox"/> }</DropdownRow>, 
            <DropdownRow 
                key='4'
                id={ "dropDownSettingsCubeButterfly" }
                setActiveMenu={ setActiveMenu }
                leftIcon="🦋"
            >{ "Butterfly" }</DropdownRow>, 
            <DropdownRow 
                key='5'
                id={ "dropDownSettingsCubeSnake" }
                setActiveMenu={ setActiveMenu }
                leftIcon="🐍"
            >{ "Snake" }</DropdownRow>,
        ]
    };
};


export function settingsBirds(backgroundActions, setActiveMenu) {
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;
    return {
        activeMenu: 'settings-birds',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow 
                key='1'
                id={ "dropDownSettingsBirdsGoBack" }
                setActiveMenu={ setActiveMenu }
                ignoretransitionstart={ "true" }
                ignoretransitionend={ "true" }
                leftIcon={ <LeftIcon /> }
                goToMenu={ () => { return "main";} } 
                goBack={ true }
            >{ "Back" }</DropdownRow>, 
            <DropdownSideways 
                key='2'
                id={ "dropDownSettingsBirdsGoCube" }
                setActiveMenu={ setActiveMenu }
                iconLinks={ true } 
                leftIcon={ <LeftIcon /> } 
                leftAction={ () => { goCube() } } 
                leftGoToMenu={ () => { return "settings-cube"; } } 
                rightIcon={ <RightIcon /> } 
                rightAction={ () => { goFloating() } } 
                rightGoToMenu={ () => { return "settings-floating"; } }
            >{ "Birds" }</DropdownSideways>, 
            <DropdownRow 
                key='3'
                id={ "dropDownSettingsTextInterfaceCheckbox" }
                setActiveMenu={ setActiveMenu }
            >{ <FPSCheckbox id="checkbox-checkbox"/> }</DropdownRow>, 
            <DropdownRow 
                key='4'
                id={ "dropDownSettingsBirdsSnake" }
                setActiveMenu={ setActiveMenu }
                leftIcon="🐍"
            >{ "Snake" }</DropdownRow>,
        ]
    };
};


export function settingsFloating(backgroundActions, setActiveMenu) {
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;
    return {
        activeMenu: 'settings-floating',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow 
                key='1'
                id="dropDownSettingsFloatingGoBack"
                setActiveMenu={ setActiveMenu }
                ignoretransitionstart="true"
                ignoretransitionend="true"
                leftIcon={ <LeftIcon /> }
                goToMenu={ () => { return "main"; } }
                goBack={ true }
            >{ "Back" }</DropdownRow>, 
            <DropdownSideways 
                key='2'
                id="dropDownSettingsFloatingGoNext"
                setActiveMenu={ setActiveMenu }
                iconLinks={true}
                leftIcon={ <LeftIcon /> } 
                leftAction={ () =>{ goBirds() }} 
                leftGoToMenu={ () => { return "settings-birds"; }} 
                rightIcon={ <RightIcon /> } 
                rightAction={ () => { goCube() }} 
                rightGoToMenu={ () => { return "settings-cube"; }} 
            >{ "Floating" }</DropdownSideways>, 
            <DropdownRow 
                key='3'
                id="dropDownSettingsTextInterfaceCheckbox"
                setActiveMenu={ setActiveMenu }
            >{ <FPSCheckbox id="checkbox-checkbox"/> }</DropdownRow>, 
            <DropdownRow 
                key='4'
                id="dropDownSettingsBirdsSnake"
                setActiveMenu={ setActiveMenu }
                leftIcon="🐍"
            >{ "Snake" }</DropdownRow>, 
            <DropdownRow 
                key='5'
                id={ "dropDownSettingsBirdsHorse" }
                setActiveMenu={ setActiveMenu }
                leftIcon="🐎"
            >{ "Horse" }</DropdownRow>,
        ]
    };
};


export default { mainTransition, projects, settingsCube, settingsBirds, settingsFloating };
