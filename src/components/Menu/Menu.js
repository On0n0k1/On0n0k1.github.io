import React, { useState, useEffect, useRef } from 'react';

// svg icons imported using svgr
import StarIcon from '../Icons/star.svg';
import HomeIcon from '../Icons/home.svg';
import OptionsIcon from '../Icons/options.svg';


// import main from '../background/main';
import Background from '../background/Background';
import './menu.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';


const background = new Background();

// const backgroundActions = { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation, setFloatingLength, getFloatingLength, getFloatingMaxLength };
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


// focusStork()
// focusParrot()
// focusFlamingo()

function Menu() {
    // Run only when the window opens, setting the canvas renderer
    useEffect(() => {
        // Loads 3d models for the bird's animation
        // When menu is first loaded
        background.init().catch((err) => {
            console.error(err);
        });

        // background.startBirdAnimation();
        // background.startCubeAnimation();
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

function Navbar(props) {
    return (
        <nav className="menu-navbar">
            <ul className="menu-navbar-nav"> { props.children }</ul>
        </nav>
    );
}

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
