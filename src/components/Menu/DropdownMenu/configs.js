// svg icons imported using svgr
import StarIcon from '../../Icons/star.svg';
import RightIcon from '../../Icons/right.svg';
import LeftIcon from '../../Icons/left-svgrepo-com.svg';
import AboutMeIcon from '../../Icons/account-svgrepo-com.svg';
import ProjectsIcon from '../../Icons/folder-svgrepo-com.svg'
import AnimationSettingsIcon from '../../Icons/setting-svgrepo-com.svg';
import TextInterface from './TextInterface/TextInterface';

import React from 'react';

const menuclassname = {
    enter: 'menu-original-enter',
    enterActive: 'menu-original-enter-active',
    exit: 'menu-original-exit',
    exitActive: 'menu-original-exit-active',
};

// { goCube, goBirds }
// ['settings-cube', 'settings-birds']

// getCurrentAnimation(){
//     getAnimationClassNames(){

// { goCube, goBirds, getAnimationClassNames, getCurrentAnimation };

// classNames: "menu-primary"
export function mainTransition(backgroundActions){
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;

    return {
        activeMenu: 'main',
        // classNames: "menu-original",
        classNames: menuclassname,
        theseDropDownItems:[
            { 
                uniqueKey: '1', 
                id: "dropDownMainAboutMe", 
                ignoretransitionend: "true", 
                href: "#headerAboutMe",
                leftIcon: <AboutMeIcon />, 
                dDownText: "About Me" 
            }, { 
                uniqueKey: '2', 
                id: "dropDownMainProjects", 
                leftIcon: <ProjectsIcon />, 
                rightIcon: <RightIcon />, 
                goToMenu: () => { return "projects";}, 
                dDownText: "Projects" 
            }, { 
                uniqueKey: '3', 
                id: "dropDownMainSettings", 
                leftIcon: <AnimationSettingsIcon />, 
                rightIcon: <RightIcon />, 
                goToMenu: () => { 
                    let classNames = getAnimationClassNames();
                    let index = getCurrentAnimation();
                    return classNames[index];
                    // return "settings-cube";
                }, 
                dDownText: "Animation Settings" 
            }
        ]
    };
};

// classNames: "menu-secondary"
export function projects(backgroundActions) { 
    return {
        activeMenu: 'projects',
        // classNames: "menu-original",
        classNames: menuclassname,
        theseDropDownItems: [
            { 
                uniqueKey: '1', 
                id: "dropDownProjectsGoBack", 
                ignoretransitionstart: "true", 
                ignoretransitionend: "true", 
                leftIcon: <LeftIcon />, 
                goToMenu: () => { return "main";}, 
                dDownText: "Back", 
                goBack: true 
            }, { 
                uniqueKey: '2', 
                id: "dropDownProjectsHTML", 
                leftIcon: <StarIcon />, 
                dDownText: "HTML" 
            }, { 
                uniqueKey: '3', 
                id: "dropDownProjectsCSS", 
                leftIcon: <StarIcon />, 
                dDownText: "CSS" 
            }, { 
                uniqueKey: '4', 
                id: "dropDownProjectsJavascript",
                leftIcon: <StarIcon />, 
                dDownText: "JavaScript" 
            }, { 
                uniqueKey: '5', 
                id: "dropDownProjectsAwesome!", 
                leftIcon: <StarIcon />, 
                dDownText: "Awesome!" 
            }
        ]
    };
};



// classNames: "menu-secondary"
export function settingsCube(backgroundActions) {
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;
    return {
        activeMenu: 'settings-cube',
        // classNames: "menu-original",
        classNames: menuclassname,
        theseDropDownItems: [
            { 
                uniqueKey: '1', 
                id: "dropDownSettingsCubeGoBack", 
                ignoretransitionstart: "true", 
                ignoretransitionend: "true", 
                leftIcon: <LeftIcon />, 
                goToMenu: () => { return "main"; }, 
                dDownText: "Back", 
                goBack: true 
            }, { 
                uniqueKey: '2', 
                id: "dropDownSettingsCubeGoNext",
                iconLinks: true, 
                leftIcon: <LeftIcon />, 
                leftAction: () => { 
                    goFloating();
                },
                leftGoToMenu: () => { return "settings-floating"; }, 
                dDownText: "Cube", 
                rightIcon: <RightIcon />, 
                rightAction: () => { 
                    goBirds(); 
                }, 
                rightGoToMenu: () => { return "settings-birds"; } 
            }, { 
                uniqueKey: '3', 
                id: "dropDownSettingsTextInterfaceCheckbox", 
                dDownText: <TextInterface id="text-interface-checkbox"/>
            }, { 
                uniqueKey: '4', 
                id: "dropDownSettingsCubeButterfly", 
                leftIcon: "🦋", 
                dDownText: "Butterfly" 
            }, { 
                uniqueKey: '5', 
                id: "dropDownSettingsCubeSnake", 
                leftIcon: "🐍", 
                dDownText: "Snake" 
            },
        ]
    };
};
//  <TextInterface 
//                     id="text-interface-checkbox"
//                     name="text-interface-checkbox"
//                     value="interface" 

// classNames: "menu-primary"
export function settingsBirds(backgroundActions) {
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;
    return {
        activeMenu: 'settings-birds',
        // classNames: "menu-original",
        classNames: menuclassname,
        theseDropDownItems: [
            { 
                uniqueKey: '1', 
                id: "dropDownSettingsBirdsGoBack", 
                ignoretransitionstart: "true", 
                ignoretransitionend: "true", 
                leftIcon: <LeftIcon />, 
                goToMenu: () => { return "main";}, 
                dDownText: "Back", 
                goBack: true 
            }, { 
                uniqueKey: '2', 
                id: "dropDownSettingsBirdsGoCube",
                iconLinks: true, 
                leftIcon: <LeftIcon />, 
                leftAction: () => { goCube() }, 
                leftGoToMenu: () => { return "settings-cube"; }, 
                dDownText: "Birds", 
                rightIcon: <RightIcon />, 
                rightAction: () => { goFloating() }, 
                rightGoToMenu: () => { return "settings-floating"; } 
            }, , { 
                uniqueKey: '3', 
                id: "dropDownSettingsTextInterfaceCheckbox", 
                dDownText: <TextInterface id="text-interface-checkbox"/>
            }, { 
                uniqueKey: '4', 
                id: "dropDownSettingsBirdsSnake", 
                leftIcon: "🐍", 
                dDownText: "Snake" 
            },
        ]
    };
};

// 'settings-floating'
export function settingsFloating(backgroundActions) {
    let { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation } = backgroundActions;
    return {
        activeMenu: 'settings-floating',
        // classNames: "menu-original",
        classNames: menuclassname,
        theseDropDownItems: [
            { 
                uniqueKey: '1', 
                id: "dropDownSettingsFloatingGoBack", 
                ignoretransitionstart: "true", 
                ignoretransitionend: "true", 
                leftIcon: <LeftIcon />, 
                goToMenu: () => { return "main"; }, 
                dDownText: "Back", 
                goBack: true 
            }, { 
                uniqueKey: '2', 
                id: "dropDownSettingsFloatingGoNext",
                iconLinks: true, 
                leftIcon: <LeftIcon />, 
                leftAction: () =>{ goBirds() }, 
                leftGoToMenu: () => { return "settings-birds"; }, 
                dDownText: "Floating", 
                rightIcon: <RightIcon />, 
                rightAction: () => { goCube() }, 
                rightGoToMenu: () => { return "settings-cube"; } 
            }, { 
                uniqueKey: '3', 
                id: "dropDownSettingsTextInterfaceCheckbox", 
                dDownText: <TextInterface id="text-interface-checkbox"/>
            }, { 
                uniqueKey: '4', 
                id: "dropDownSettingsBirdsSnake", 
                leftIcon: "🐍", 
                dDownText: "Snake" 
            }, { 
                uniqueKey: '5', 
                id: "dropDownSettingsBirdsHorse", 
                leftIcon: "🐎" , 
                dDownText: "Horse" 
            },
        ]
    };
};


export default { mainTransition, projects, settingsCube, settingsBirds, settingsFloating };
