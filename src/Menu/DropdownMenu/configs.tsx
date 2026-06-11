// The menu jsx components receive a javascript object and parse it for building the main menu and secondary menus.
// This file has the functions that return each of these components for the menu.
// We can change most of these values knowing that css transitions will remain working as intended.
//
// Also: main menu is Menu.js, secondary menus are DropdownMenu.js


// svg icons imported using svgr
import StarIcon from '../../Icons/star.svg?react';
import RightIcon from '../../Icons/right.svg?react';
import LeftIcon from '../../Icons/left-svgrepo-com.svg?react';
import AboutMeIcon from '../../Icons/account-svgrepo-com.svg?react';
import ProjectsIcon from '../../Icons/folder-svgrepo-com.svg?react'
import AnimationSettingsIcon from '../../Icons/setting-svgrepo-com.svg?react';
import FPSCheckbox from './checkboxes/FPSCheckbox';
import CubeCheckbox from './checkboxes/CubeCheckbox';
import FloatingSlider from './FloatingSlider/FloatingSlider';
import BirdFocus from './birdFocus/birdFocus';

// import React from 'react';


import DropdownRow from './DropdownRow/DropdownRow';
import DropdownSideways from './DropdownRow/DropdownSideways';
import type { BackgroundActions } from '../Menu';


// This are the css class names used by CSSTransitions.
const menuclassname = {
    enter: 'menu-original-enter',
    enterActive: 'menu-original-enter-active',
    exit: 'menu-original-exit',
    exitActive: 'menu-original-exit-active',
};

// This is the first dropdown menu that shows.
// Has "About Me", "Topics" and "Animation Settings" rows.
export function mainTransition(backgroundActions: BackgroundActions, setActiveMenu: (menu: string) => void) {

    return {
        activeMenu: 'main',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow
                key='1'
                id="dropDownMainAboutMe"
                setActiveMenu={setActiveMenu}
                ignoretransitionend="true"
                href="#content-about-me"
                leftIcon={<AboutMeIcon />}
            >{"About Me"}</DropdownRow>,
            <DropdownRow
                key='2'
                id="dropDownMainProjects"
                setActiveMenu={setActiveMenu}
                leftIcon={<ProjectsIcon />}
                rightIcon={<RightIcon />}
                goToMenu={() => { return "projects"; }}
            >{"Topics"}</DropdownRow>,
            <DropdownRow
                key='3'
                id="dropDownMainSettings"
                setActiveMenu={setActiveMenu}
                leftIcon={<AnimationSettingsIcon />}
                rightIcon={<RightIcon />}
                goToMenu={() => {
                    let classNames = backgroundActions.getAnimationClassNames();
                    let index = backgroundActions.getCurrentAnimation();
                    return classNames[index];
                }}
            >{"Animation Settings"}</DropdownRow>
        ]
    };
};

// Secondary menu dropdown.
// Has the rows "Back", "Contact Info", "Coding Skills", "Projects".
export function projects(_backgroundActions: BackgroundActions, setActiveMenu: (menu: string) => void) {
    return {
        activeMenu: 'projects',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow
                key='1'
                id="dropDownProjectsGoBack"
                setActiveMenu={setActiveMenu}
                ignoretransitionstart="true"
                ignoretransitionend="true"
                leftIcon={<LeftIcon />}
                goToMenu={() => { return "main"; }}
                goBack={true}
            >{"Back"}</DropdownRow>,
            <DropdownRow
                key='2'
                id="dropDownProjectsContactInfo"
                href="#content-contact-info"
                setActiveMenu={setActiveMenu}
                leftIcon={<StarIcon />}
            >{"Contact Info"}</DropdownRow>,
            <DropdownRow
                key='3'
                id="dropDownProjectsAboutMe"
                href="#content-about-me"
                setActiveMenu={setActiveMenu}
                leftIcon={<StarIcon />}
            >{"About Me"}</DropdownRow>,
            <DropdownRow
                key='4'
                id="dropDownProjectsWorkHistory"
                href="#content-work"
                setActiveMenu={setActiveMenu}
                leftIcon={<StarIcon />}
            >{"Work History"}</DropdownRow>,
            <DropdownRow
                key='5'
                id="dropDownProjectsCodingSkills"
                href="#content-coding-skills"
                setActiveMenu={setActiveMenu}
                leftIcon={<StarIcon />}
            >{"Coding Skills"}</DropdownRow>,
            <DropdownRow
                key='6'
                id="dropDownProjectsProjects"
                href="#content-projects"
                setActiveMenu={setActiveMenu}
                leftIcon={<StarIcon />}
            >{"Projects"}</DropdownRow>
        ]
    };
};

// Secondary menu dropdown.
// Has the rows "Back", Animation Selector, "FPS Checkbox" and "Cube Control".
export function settingsCube(backgroundActions: BackgroundActions, setActiveMenu: (menu: string) => void) {

    return {
        activeMenu: 'settings-cube',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow
                key='1'
                id="dropDownSettingsCubeGoBack"
                setActiveMenu={setActiveMenu}
                ignoretransitionstart="true"
                ignoretransitionend="true"
                leftIcon={<LeftIcon />}
                goToMenu={() => { return "main"; }}
                goBack={true}
            >{"Back"}</DropdownRow>,
            <DropdownSideways
                key='2'
                id="dropDownSettingsCubeGoNext"
                setActiveMenu={setActiveMenu}
                iconLinks={true}
                leftIcon={<LeftIcon />}
                leftAction={() => {
                    backgroundActions.goFloating();
                }}
                leftGoToMenu={() => { return "settings-floating"; }}
                rightIcon={<RightIcon />}
                rightAction={() => {
                    backgroundActions.goBirds();
                }}
                rightGoToMenu={() => { return "settings-birds"; }}
            >{"Cube"}</DropdownSideways>,
            <DropdownRow
                key='3'
                id={"dropDownSettingsTextInterfaceCheckbox"}
                setActiveMenu={setActiveMenu}
            >{<FPSCheckbox id="checkbox-checkbox" />}</DropdownRow>,
            <DropdownRow
                key='4'
                id={"dropDownSettingsCubeControl"}
                setActiveMenu={setActiveMenu}
            >{<CubeCheckbox id="checkbox-control" />}</DropdownRow>,
        ]
    };
};


// Secondary Menu dropdown.
// Has the rows "Back", Animation Selector, "FPS Checkbox", "Bird Focus radio".
export function settingsBirds(backgroundActions: BackgroundActions, setActiveMenu: (menu: string) => void) {

    return {
        activeMenu: 'settings-birds',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow
                key='1'
                id={"dropDownSettingsBirdsGoBack"}
                setActiveMenu={setActiveMenu}
                ignoretransitionstart={"true"}
                ignoretransitionend={"true"}
                leftIcon={<LeftIcon />}
                goToMenu={() => { return "main"; }}
                goBack={true}
            >{"Back"}</DropdownRow>,
            <DropdownSideways
                key='2'
                id={"dropDownSettingsBirdsGoCube"}
                setActiveMenu={setActiveMenu}
                iconLinks={true}
                leftIcon={<LeftIcon />}
                leftAction={() => { backgroundActions.goCube() }}
                leftGoToMenu={() => { return "settings-cube"; }}
                rightIcon={<RightIcon />}
                rightAction={() => { backgroundActions.goFloating() }}
                rightGoToMenu={() => { return "settings-floating"; }}
            >{"Birds"}</DropdownSideways>,
            <DropdownRow
                key='3'
                id={"dropDownSettingsTextInterfaceCheckbox"}
                setActiveMenu={setActiveMenu}
            >{<FPSCheckbox id="checkbox-checkbox" />}</DropdownRow>,
            <DropdownRow
                key='4'
                id={"dropDownSettingsBirdsBirdFocus"}
                setActiveMenu={setActiveMenu}
            >{<BirdFocus
                focusStork={() => { backgroundActions.focusStork(); }}
                focusParrot={() => { backgroundActions.focusParrot(); }}
                focusFlamingo={() => { backgroundActions.focusFlamingo(); }}
                getFocus={() => { return backgroundActions.getFocus() ?? 0; }}
            />}</DropdownRow>,
        ]
    };
};


// Secondary Menu dropdown.
// Has the rows "Back", Animation Selector, "FPS Checkbox", "Floating Slider".
export function settingsFloating(backgroundActions: BackgroundActions, setActiveMenu: (menu: string) => void) {

    return {
        activeMenu: 'settings-floating',
        classNames: menuclassname,
        theseDropDownItems: [
            <DropdownRow
                key='1'
                id="dropDownSettingsFloatingGoBack"
                setActiveMenu={setActiveMenu}
                ignoretransitionstart="true"
                ignoretransitionend="true"
                leftIcon={<LeftIcon />}
                goToMenu={() => { return "main"; }}
                goBack={true}
            >{"Back"}</DropdownRow>,
            <DropdownSideways
                key='2'
                id="dropDownSettingsFloatingGoNext"
                setActiveMenu={setActiveMenu}
                iconLinks={true}
                leftIcon={<LeftIcon />}
                leftAction={() => { backgroundActions.goBirds(); }}
                leftGoToMenu={() => { return "settings-birds"; }}
                rightIcon={<RightIcon />}
                rightAction={() => { backgroundActions.goCube(); }}
                rightGoToMenu={() => { return "settings-cube"; }}
            >{"Floating"}</DropdownSideways>,
            <DropdownRow
                key='3'
                id="dropDownSettingsTextInterfaceCheckbox"
                setActiveMenu={setActiveMenu}
            >{<FPSCheckbox id="checkbox-checkbox" />}</DropdownRow>,
            <DropdownRow
                key='4'
                id="dropDownSettingsFloatingSlider"
                setActiveMenu={setActiveMenu}
            >{
                    <FloatingSlider
                        setFloatingLength={backgroundActions.setFloatingLength}
                        getFloatingLength={backgroundActions.getFloatingLength}
                        getFloatingMaxLength={backgroundActions.getFloatingMaxLength}
                    />
                }</DropdownRow>,
        ]
    };
};


export default { mainTransition, projects, settingsCube, settingsBirds, settingsFloating };
