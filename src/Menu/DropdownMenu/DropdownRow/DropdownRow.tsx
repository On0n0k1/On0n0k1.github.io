// import React from 'react';
import { useRef } from 'react';
import { CSSUpdates } from '../cssUpdates';
// import { goLeft, goRight } from '../cssUpdates';

interface DropdownRowProps {
    id?: string
    href?: string
    goBack?: boolean
    ignoretransitionstart?: string
    ignoretransitionend?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    children?: React.ReactNode
    goToMenu?: () => string
    setActiveMenu?: (menu: string) => void
}

// Called by DropdownMenu.
// Renders a single row of the dropdown menu.
// Has an icon to the left and an arrow to the right.
export default function DropdownRow(props: DropdownRowProps) {
    const cssUpdates = useRef(new CSSUpdates());
    // moveDirection is run right before switching each of the menus.
    // goRight makes transition switch to the right.
    // goLeft makes transition switch to the left.
    // let moveDirection = goRight;

    // goBack = true means it will go to the opposite direction from default.
    // if (props.goBack === true) {
    //     moveDirection = goLeft;
    // }
    let moveDirection = () => cssUpdates.current.goRight();
    if (props.goBack === true) {
        moveDirection = () => cssUpdates.current.goLeft();
    }

    return (
        <a
            id={props.id}
            href={props.href}
            className="menu-item"
            {...(props.ignoretransitionstart ? { ignoretransitionstart: props.ignoretransitionstart } : {})}
            {...(props.ignoretransitionend ? { ignoretransitionend: props.ignoretransitionend } : {})}
            // ignoretransitionend={props.ignoretransitionend}
            onClick={
                () => {
                    moveDirection();
                    if (props.setActiveMenu){
                        props.goToMenu && props.setActiveMenu(props.goToMenu());
                    }
                }
            }>
            {props.leftIcon && <span className="menu-icon-button">{props.leftIcon}</span>}
            {props.children}
            {props.rightIcon && <span className="menu-icon-right">{props.rightIcon}</span>}
        </a>
    );
}
