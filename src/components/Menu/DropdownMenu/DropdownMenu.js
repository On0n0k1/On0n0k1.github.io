import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

// Manual configs telling what to build
import { mainTransition, projects, settingsCube, settingsBirds, settingsFloating } from './configs';
import { goLeft, goRight} from './cssUpdates';
import { getCSS } from '../../other_functions/cssFunctions';


import './dropdownMenu.css';

// Used in CSSTransition timeout. That way we can just change the variable in the css and have it change here as well.
// Added 50 milliseconds just to be sure that the transition is finished before it ends.
const convertedSpeed = parseInt(getCSS('--menu-speed'), 10) + 50;
// console.log(`${convertedSpeed}`);


function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    // const mainTransitionRef = useRef(null);
    // const projectsRef = useRef(null);
    // const settingsCubeRef = useRef(null);
    // const settingsBirdsRef = useRef(null);

    // Using refs like these make the warning go away, but the transition css classes stop working.
    // This is react-transitions-group developers' fault for making such a messy tool. 
    // I'm not trying to fix this warning any more.
    // { CSSTransitionList(mainTransition(backgroundActions), {dropdownRef}) }
    // { CSSTransitionList(projects(backgroundActions), {dropdownRef}) }
    // { CSSTransitionList(settingsCube(backgroundActions), {dropdownRef}) }
    // { CSSTransitionList(settingsBirds(backgroundActions), {dropdownRef}) }

    // const goBirds = props.goBirds;
    // const goCube = props.goCube;
    const backgroundActions = props.backgroundActions;

    // When dropdown first renders, update height value
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);


    // function that will updated height and call react to re-render the children
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }


    // Represents one line of the dropdown menu
    function DropdownItem(props){

        if((props.iconLinks === true)) {
            // Transition ignores will not apply to the text in the middle
            return (
                <div 
                    className="menu-item" 
                    id={props.id} 
                    ignoretransitionstart={props.ignoretransitionstart}
                    ignoretransitionend={props.ignoretransitionend}
                >
                <a 
                    href={props.hrefLeft} 
                    className="menu-icon-button" 
                    onClick={
                        () => {
                            props.leftAction && props.leftAction();
                            goLeft();
                            props.leftGoToMenu && setActiveMenu(props.leftGoToMenu());
                        }
                    }>
                        {props.leftIcon}
                    </a>
                    <div className="menu-text">
                        {props.children}
                    </div>
                    
                    <a 
                        href={props.hrefRight} 
                        className="menu-icon-button" 
                        onClick={
                        () => {
                            props.rightAction && props.rightAction();
                            goRight();
                            props.rightGoToMenu && setActiveMenu(props.rightGoToMenu());
                        }
                    }>
                        {props.rightIcon}
                    </a>
                </div>
            );
        }

        let moveDirection = goRight;
        if (props.goBack === true){
            moveDirection = goLeft;
        }

        return (
            <a 
                id={props.id} 
                href={props.href} 
                className="menu-item" 
                ignoretransitionstart={props.ignoretransitionstart} 
                ignoretransitionend={props.ignoretransitionend}
                onClick={
                () => {
                    moveDirection();
                    props.goToMenu && setActiveMenu(props.goToMenu());
                }
            }>
                <span className="menu-icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="menu-icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    // represents one of the animated dropdown menus.
    function CSSTransitionList(props){
        const thisActiveMenu = (activeMenu === props.activeMenu);
        const thisClassNames = props.classNames;

        // array of dropDownItem attributes
        const dropDownItems = props.theseDropDownItems;

        // list of dropdownitems
        const theseDropDownItems = dropDownItems.map((dDown) => {

            return (
                <DropdownItem 
                    id={dDown.id}
                    ignoretransitionstart={dDown.ignoretransitionstart}
                    ignoretransitionend={dDown.ignoretransitionend}
                    leftIcon={dDown.leftIcon}
                    rightIcon={dDown.rightIcon}
                    iconLinks={dDown.iconLinks}
                    goToMenu={dDown.goToMenu}
                    goBack={dDown.goBack}
                    leftAction={dDown.leftAction}
                    leftGoToMenu={dDown.leftGoToMenu}
                    rightAction={dDown.rightAction}
                    rightGoToMenu={dDown.rightGoToMenu}
                    href={dDown.href}
                    hrefLeft={dDown.hrefLeft}
                    hrefRight={dDown.hrefRight}
                    key={dDown.uniqueKey}>
                    {dDown.dDownText}
                </DropdownItem>
            );
        });
        // nodeRef={nodeRef}

        return (
            <CSSTransition
                in={thisActiveMenu}
                timeout={ convertedSpeed }
                classNames={thisClassNames}
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    {theseDropDownItems}
                </div>
            </CSSTransition>
        );
    }

    // const mainTransitionRef = useRef(null);
    // const projectsRef = useRef(null);
    // const settingsCubeRef = useRef(null);
    // const settingsBirdsRef = useRef(null);
    // { CSSTransitionList(mainTransition(backgroundActions), {mainTransitionRef}) }
    // { CSSTransitionList(projects(backgroundActions), {projectsRef}) }
    // { CSSTransitionList(settingsCube(backgroundActions), {settingsCubeRef}) }
    // { CSSTransitionList(settingsBirds(backgroundActions), {settingsBirdsRef}) }

    // call manual configs imported from './config.js' to render each of the possible menus
    return (
        <div className="menu-dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            { CSSTransitionList(mainTransition(backgroundActions)) }
            { CSSTransitionList(projects(backgroundActions)) }
            { CSSTransitionList(settingsCube(backgroundActions)) }
            { CSSTransitionList(settingsBirds(backgroundActions)) }
            { CSSTransitionList(settingsFloating(backgroundActions)) }
        </div>
    );
}


export default DropdownMenu;