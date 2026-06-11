// import React from 'react';
import { useRef } from 'react';
import { CSSUpdates } from '../cssUpdates';
// import { goLeft, goRight } from '../cssUpdates';

interface DropdownSidewaysProps {
    id?: string
    hrefLeft?: string
    hrefRight?: string
    ignoretransitionstart?: string
    ignoretransitionend?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    children?: React.ReactNode
    leftAction?: () => void
    rightAction?: () => void
    leftGoToMenu?: () => string
    rightGoToMenu?: () => string
    setActiveMenu?: (menu: string) => void
    iconLinks?: boolean
}

// Called by DropdownMenu.
// Renders a single row of the dropdown menu.
// Has an arrow to the left and an arrow to the right.
export default function DropdownSideways(props: DropdownSidewaysProps) {
    const cssUpdates = useRef(new CSSUpdates());

    // Transition ignores will not apply to the text in the middle
    return (
        <div
            className="menu-item"
            id={props.id}
            {...(props.ignoretransitionstart ? { ignoretransitionstart: props.ignoretransitionstart } : {})}
            // ignoretransitionstart={props.ignoretransitionstart}
            {...(props.ignoretransitionend ? { ignoretransitionend: props.ignoretransitionend } : {})}
        // ignoretransitionend={props.ignoretransitionend}
        >
            <a
                href={props.hrefLeft}
                className="menu-icon-button"
                onClick={
                    () => {
                        // Run leftAction function (if it exists).
                        props.leftAction && props.leftAction();
                        // Switch transition to make it go to the left.
                        // goLeft();
                        cssUpdates.current.goLeft();
                        // Set the next active menu to leftGoToMenu (if it exists).
                        if (props.setActiveMenu) {
                            props.leftGoToMenu && props.setActiveMenu(props.leftGoToMenu());
                        }
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
                        // goRight();
                        cssUpdates.current.goRight();
                        // Set the next active Menu to rightGoToMenu (if it exists).
                        if (props.setActiveMenu) {
                            props.rightGoToMenu && props.setActiveMenu(props.rightGoToMenu());
                        }
                    }
                }>
                {props.rightIcon}
            </a>
        </div>
    );
}
