import React, { useState, useEffect, useRef } from 'react';
import { goLeft, goRight} from '../cssUpdates';


export default function DropdownRow(props){
    let moveDirection = goRight;
    if (props.goBack === true){
        moveDirection = goLeft;
    }
    // console.log(`key:${props.key}  id:${props.id}`);

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
