// CSS for the body, scrollbars, and 3d canvases in general.
import './styles/index.css';

// CSS for the z-index of each element in the entire page.
// Make sure that each element is layered correctly.
import './styles/zIndexes.css';

import React from "react";
import ReactDOM from "react-dom";

import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
);

