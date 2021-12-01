import React from 'react';
import { goLeft, goRight} from '../cssUpdates';

// Called by DropdownMenu.
// Renders a single row of the dropdown menu.
// Has an arrow to the left and an arrow to the right.
export default function DropdownSideways(props){

    // Transition ignores will not apply to the text in the middle
    return (
        <div 
            className="menu-item" 
            id={props.id} 
            ignoretransitionstart={props.ignoretransitionstart}
            ignoretransitionend={props.ignoretransitionend}>
        <a 
            href={props.hrefLeft} 
            className="menu-icon-button" 
            onClick={
                () => {
                    // Run leftAction function (if it exists).
                    props.leftAction && props.leftAction();
                    // Switch transition to make it go to the left.
                    goLeft();
                    // Set the next active menu to leftGoToMenu (if it exists).
                    props.leftGoToMenu && props.setActiveMenu(props.leftGoToMenu());
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
                    // Run rightAction function (if it exists).
                    props.rightAction && props.rightAction();
                    // Switch transition to make it go to the right.
                    goRight();
                    // Set the next active Menu to rightGoToMenu (if it exists).
                    props.rightGoToMenu && props.setActiveMenu(props.rightGoToMenu());
                }
            }>
                {props.rightIcon}
            </a>
        </div>
    );
}
