import React, { useState, useEffect } from 'react';

// Background is the 3d rendered threejs background
// DropdownMenu is the dropdown menu with cssTransitions
import Background from '../background/Background';
import DropdownMenu from './DropdownMenu/DropdownMenu';

// svg icons imported using svgr
// import StarIcon from '../Icons/star.svg';
import HomeIcon from '../Icons/home.svg';
import OptionsIcon from '../Icons/options.svg';

// css for menu
import './menu.css';


const background = new Background();

// These are functions that affect the background animations.
// Packaging these here so that some of the menu items can interact with it.
const backgroundActions = {
    goCube: () => { background.startCubeAnimation(); },
    goBirds: () => { background.startBirdAnimation(); },
    goFloating: () => { background.startFloatingAnimation(); },
    getAnimationClassNames: () => { return background.getAnimationClassNames(); },
    getCurrentAnimation: () => { return background.getCurrentAnimation(); },
    setFloatingLength: (size) => { background.setFloatingLength(size); },
    getFloatingLength: () => { return background.getFloatingLength(); },
    getFloatingMaxLength: () => { return background.getFloatingMaxLength(); },
    focusStork: () => { background.focusStork(); },
    focusParrot: () => { background.focusParrot(); },
    focusFlamingo: () => { background.focusFlamingo(); },
    getFocus: () => { return background.getFocus(); },
};

// Starts up background animations and renders the top navigation bar.
function Menu() {
    // Run only when the window opens, setting the canvas renderer
    useEffect(() => {
        // Loads 3d models for the bird's animation
        // When menu is first loaded
        background.init().catch((err) => {
            console.error(err);
        });

        backgroundActions.goFloating();
    }, []);

    return (
        <Navbar>
            <NavItem propKey='1' href="https://on0n0k1.github.io/" icon={<HomeIcon />} />

            <NavItem propKey='2' icon={<OptionsIcon />}>
                <DropdownMenu backgroundActions={backgroundActions}></DropdownMenu>
            </NavItem>
        </Navbar>
    );
}

// This renders the full top navigation bar.
function Navbar(props) {
    return (
        <nav className="menu-navbar">
            <ul className="menu-navbar-nav"> { props.children }</ul>
        </nav>
    );
}

// This represents a single icon link in the top navigation bar.
function NavItem(props) {
    const [open, setOpen] = useState(false);
    // mainContent
    useEffect(() => {
        const mainElement = document.getElementById("mainContent");
        // When clicking outside of the menu, closes the menu.
        mainElement.addEventListener('click', function () {
            // console.log("closing window");
            setOpen(false);
        });
    }, []);

    return (
        <li key={props.propKey} className="menu-nav-item">
            <a href={props.href} className="menu-icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export default Menu;
