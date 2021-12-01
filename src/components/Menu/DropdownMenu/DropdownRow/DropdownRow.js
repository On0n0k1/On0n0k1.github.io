import React from 'react';
import { goLeft, goRight} from '../cssUpdates';

// Called by DropdownMenu.
// Renders a single row of the dropdown menu.
// Has an icon to the left and an arrow to the right.
export default function DropdownRow(props){
    // moveDirection is run right before switching each of the menus.
    // goRight makes transition switch to the right.
    // goLeft makes transition switch to the left.
    let moveDirection = goRight;

    // goBack = true means it will go to the opposite direction from default.
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
                props.goToMenu && props.setActiveMenu(props.goToMenu());
            }
        }>
            {props.leftIcon && <span className="menu-icon-button">{props.leftIcon}</span>}
            {props.children}
            {props.rightIcon && <span className="menu-icon-right">{props.rightIcon}</span>}
        </a>
    );
}
