import React, { useState, useEffect, type PropsWithChildren, useRef } from 'react';

// Background is the 3d rendered threejs background
// DropdownMenu is the dropdown menu with cssTransitions
import Background from '../background/Background.tsx';
import DropdownMenu from './DropdownMenu/DropdownMenu.tsx';

// svg icons imported using svgr
// import StarIcon from '../Icons/star.svg?react';
import HomeIcon from '../Icons/home.svg?react';
import OptionsIcon from '../Icons/options.svg?react';
import LinkedinIcon from '../Icons/linkedin.svg?react';
import GithubIcon from '../Icons/github.svg?react';

// css for menu
import './menu.css';
import createMaterials from '../background/FloatingAnimation/components/floater/materials.ts';


// const background = new Background();

export interface BackgroundActions {
    goCube: () => void
    goBirds: () => void
    goFloating: () => void
    getAnimationClassNames: () => string[]
    getCurrentAnimation: () => number
    setFloatingLength: (size: number) => void
    getFloatingLength: () => number
    getFloatingMaxLength: () => number
    focusStork: () => void
    focusParrot: () => void
    focusFlamingo: () => void
    getFocus: () => number
}

// Starts up background animations and renders the top navigation bar.
function Menu() {
    const backgroundRef = useRef<Background | null>(null);
    // const backgroundActions = useRef<BackgroundActions | null>(null);
    const [backgroundActions, setBackgroundActions] = useState<BackgroundActions | null>(null);

    // Run only when the window opens, setting the canvas renderer
    useEffect(() => {
        (async () => {
            const floatingMaterials = await createMaterials();
            // Loads 3d models for the bird's animation
            // When menu is first loaded
            backgroundRef.current = new Background(floatingMaterials);
            setBackgroundActions({
                goCube: () => { backgroundRef.current?.startCubeAnimation(); },
                goBirds: () => { backgroundRef.current?.startBirdAnimation(); },
                goFloating: () => { backgroundRef.current?.startFloatingAnimation(); },
                getAnimationClassNames: () => { return backgroundRef.current?.getAnimationClassNames() ?? []; },
                getCurrentAnimation: () => { return backgroundRef.current?.getCurrentAnimation() ?? 0; },
                setFloatingLength: (size: number) => { backgroundRef.current?.setFloatingLength(size); },
                getFloatingLength: () => {
                    return backgroundRef.current?.getFloatingLength() ?? 0;
                },
                getFloatingMaxLength: () => {
                    return backgroundRef.current?.getFloatingMaxLength() ?? 50;
                },
                focusStork: () => { backgroundRef.current?.focusStork(); },
                focusParrot: () => { backgroundRef.current?.focusParrot(); },
                focusFlamingo: () => { backgroundRef.current?.focusFlamingo(); },
                getFocus: () => {
                    return backgroundRef.current?.getFocus() ?? 0;
                },
            });

            await backgroundRef.current.init();
            backgroundRef.current.startFloatingAnimation();
        })();
    }, []);

    if (backgroundActions) {
        return (
            <Navbar>
                <NavItem propKey='1' title="Home" href="https://on0n0k1.github.io/" icon={<HomeIcon />} />
                <NavItem propKey='2' title="Linkedin" href="https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2/" icon={<LinkedinIcon />} />
                <NavItem propKey='3' title="Github" href="https://github.com/On0n0k1" icon={<GithubIcon />} />

                <NavItem propKey='4' icon={<OptionsIcon />}>
                    <DropdownMenu backgroundActions={backgroundActions}></DropdownMenu>
                </NavItem>
            </Navbar>
        );
    } else {
        return (
            <Navbar>
                <NavItem propKey='1' title="Home" href="https://on0n0k1.github.io/" icon={<HomeIcon />} />
                <NavItem propKey='2' title="Linkedin" href="https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2/" icon={<LinkedinIcon />} />
                <NavItem propKey='3' title="Github" href="https://github.com/On0n0k1" icon={<GithubIcon />} />

                <NavItem propKey='4' title="Menu" icon={<OptionsIcon />} />
            </Navbar>
        );
    }


}

// This renders the full top navigation bar.
function Navbar(props: PropsWithChildren) {
    return (
        <nav className="menu-navbar">
            <ul className="menu-navbar-nav"> {props.children}</ul>
        </nav>
    );
}

interface NavItemProps {
    href?: string,
    title?: string,
    propKey: string,
    icon: React.ReactNode,
    children?: React.ReactNode,
}

// This represents a single icon link in the top navigation bar.
function NavItem(props: NavItemProps) {
    const [open, setOpen] = useState(false);
    // mainContent
    useEffect(() => {
        const mainElement: HTMLElement | null = document.getElementById("mainContent");
        // When clicking outside of the menu, closes the menu.
        if (mainElement) {
            mainElement.addEventListener('click', function () {
                setOpen(false);
            });
        }
    }, []);
    if (props.href) {
        return (
            <li key={props.propKey} className="menu-nav-item">
                <a href={props.href} title={props.title} target="_blank" rel="noopener noreferrer" className="menu-icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>

                {open && props.children}
            </li>
        )
    }

    return (
        <li key={props.propKey} className="menu-nav-item">
            <a className="menu-icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export default Menu;
