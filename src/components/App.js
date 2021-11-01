import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
import Menu from './Menu/Menu';
import Content from './Content/content';
// import main from './background/main';


function App() {

    // // Run only when the window opens, setting the canvas renderer
    // useEffect(() => {
    //     main().catch((err) => {
    //         console.error(err);
    //     });
    // }, []);

    return (
        <div className="app-div">
            <Menu />
            <Content />
        </div>
    );
}

export default App;
