import React, { useState, useEffect, useRef } from 'react';
import { goLeft, goRight} from '../cssUpdates';


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

                    props.leftAction && props.leftAction();
                    goLeft();
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
                    props.rightAction && props.rightAction();
                    goRight();
                    props.rightGoToMenu && props.setActiveMenu(props.rightGoToMenu);
                }
            }>
                {props.rightIcon}
            </a>
        </div>
    );
}
