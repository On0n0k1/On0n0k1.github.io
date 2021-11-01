import React, { useState, useEffect, useRef } from 'react';

// svg icons imported using svgr
import StarIcon from '../Icons/star.svg';
import HomeIcon from '../Icons/home.svg';
import OptionsIcon from '../Icons/options.svg';


// import main from '../background/main';
import Background from '../background/Background';
import './menu.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';


// startBirdAnimation()

// startCubeAnimation()

const background = new Background();
const goBirds = () => {
    background.startBirdAnimation();
}

const goCube = () => {
    background.startCubeAnimation();
}

const goFloating = () => {
    background.startFloatingAnimation();
}

const getAnimationClassNames = () => {
    return background.getAnimationClassNames();
}

const getCurrentAnimation = () => {
    return background.getCurrentAnimation();
}

const backgroundActions = { goCube, goBirds, goFloating, getAnimationClassNames, getCurrentAnimation };


function Menu() {
    // Run only when the window opens, setting the canvas renderer
    useEffect(() => {
        // main().catch((err) => {
        //     console.error(err);
        // });

        // Loads 3d models for the bird's animation
        // When menu is first loaded
        background.init().catch((err) => {
            console.error(err);
        });

        // background.startBirdAnimation();
        // background.startCubeAnimation();
        goFloating();
    }, []);

    return (
        <Navbar>
            <NavItem propKey='1' href="#" icon={<StarIcon />} />
            <NavItem propKey='2' href="#" icon={<HomeIcon />} />

            <NavItem propKey='3' icon={<OptionsIcon />}>
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
