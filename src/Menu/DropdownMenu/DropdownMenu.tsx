import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

// Manual configs telling what to build
import { mainTransition, projects, settingsCube, settingsBirds, settingsFloating } from './configs';

// Function that gets current css value set in page.
import { getCSS } from '../../other_functions/cssFunctions';
import type { BackgroundActions } from '../../Menu/Menu';
// import type { CSSTransitionClassNames, CSSTransitionProps } from 'react-transition-group/CSSTransition';
import type { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

import './dropdownMenu.css';


// Used in CSSTransition timeout. That way we can just change the variable in the css and have it change here as well.
// Added 50 milliseconds just to be sure that the transition is finished before it ends.
const convertedSpeed = parseInt(getCSS('--menu-speed'), 10) + 50;


interface DropdownMenuProps {
    backgroundActions: BackgroundActions,
}

interface CSSTransitionListProps {
    activeMenu: string
    classNames: CSSTransitionClassNames
    theseDropDownItems: React.ReactNode[]
}

// This component renders the entire dropdown menu and all it's children.
// Menu calls it.
function DropdownMenu(props: DropdownMenuProps) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const backgroundActions = props.backgroundActions;

    // When dropdown first renders, update height value.
    useEffect(() => {
        let current = dropdownRef.current;
        if (current) {
            let firstChild = current.firstChild as HTMLElement;
            if (firstChild) {
                let offsetHeight = firstChild.offsetHeight + 40;
                if (offsetHeight) {
                    setMenuHeight(offsetHeight);
                }
            }
            // setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
        }
    }, []);


    // function that will updated height and call react to re-render the children
    function calcHeight(el: HTMLElement) {
        const height: number = el.offsetHeight + 40;
        setMenuHeight(height);
    }


    // Represents one of the animated dropdown menus.
    // The CSSTransition in the name is because this is one of the CSSTransitions.
    // The "List" in the name is just because it will render a list of children rows.
    function CSSTransitionList(props: CSSTransitionListProps) {
        const nodeRef = useRef<HTMLDivElement>(null);
        const thisActiveMenu = (activeMenu === props.activeMenu);
        const thisClassNames = props.classNames;

        // array of dropDownItem attributes
        const dropDownItems = props.theseDropDownItems;


        return (
            <CSSTransition
                nodeRef={nodeRef}
                in={thisActiveMenu}
                timeout={convertedSpeed}
                classNames={thisClassNames}
                unmountOnExit
                onEnter={() => calcHeight(nodeRef.current!)}>
                <div className="menu" ref={nodeRef}>
                    {dropDownItems}
                </div>
            </CSSTransition>
        );
    }


    // Call manual configs imported from './config.js' to render each of the possible menus.
    // Only the active CSSTransition element is rendered at any given time.
    return (
        <div className="menu-dropdown" style={{ height: menuHeight ?? undefined }} ref={dropdownRef}>
            {CSSTransitionList(mainTransition(backgroundActions, setActiveMenu))}
            {CSSTransitionList(projects(backgroundActions, setActiveMenu))}
            {CSSTransitionList(settingsCube(backgroundActions, setActiveMenu))}
            {CSSTransitionList(settingsBirds(backgroundActions, setActiveMenu))}
            {CSSTransitionList(settingsFloating(backgroundActions, setActiveMenu))}
        </div>
    );
}


export default DropdownMenu;